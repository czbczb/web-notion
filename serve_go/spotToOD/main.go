package main

import (
	"fmt"
	"time"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/ec2"
)

func main() {
	// 获取当前 Spot 实例中断率
	// 创建 AWS 会话
	sess, err := session.NewSession(&aws.Config{
		Region: aws.String("us-west-2"), // 设置您的区域
	})
	if err != nil {
		fmt.Println("Failed to create session:", err)
		return
	}

	// 创建 EC2 服务客户端
	svc := ec2.New(sess)

	// 获取 Spot 实例中断率
	interruptionRate, err := getSpotInstanceInterruptionRate(svc)
	if err != nil {
		fmt.Println("Failed to get spot instance interruption rate:", err)
		return
	}
	threshold := float64(3)

	fmt.Println("Spot Instance Interruption Rate:", *interruptionRate)
	// 设置中断率阈值

	// 监控 Spot 实例中断率定时任务
	ticker := time.NewTicker(time.Minute)
	for range ticker.C {
		// 获取当前 Spot 实例中断率

		// 判断是否超过阈值
		if interruptionRate > threshold {
			// 触发故障转移逻辑
			migrateToODInstance()
		}
	}
}

// 获取 Spot 实例中断率
func getSpotInstanceInterruptionRate(svc *ec2.EC2) (*float64, error) {
	// 请求描述信息
	req := &ec2.DescribeSpotInstanceRequestsInput{}

	// 发送请求并获取响应
	resp, err := svc.DescribeSpotInstanceRequests(req)
	if err != nil {
		return nil, err
	}

	// 计算中断率
	totalInstances := len(resp.SpotInstanceRequests)
	interruptedInstances := 0

	for _, instance := range resp.SpotInstanceRequests {
		if *instance.State == "marked-for-termination" {
			interruptedInstances++
		}
	}

	interruptionRate := float64(interruptedInstances) / float64(totalInstances)

	return &interruptionRate, nil
}

func migrateToODInstance() {
	// 创建 OD 实例
	odInstanceID, err := createODInstance()
	if err != nil {
		fmt.Println("Failed to create OD instance:", err)
		return
	}

	// 配置 OD 实例的网络和应用程序
	err = configureODInstance(odInstanceID)
	if err != nil {
		fmt.Println("Failed to configure OD instance:", err)

		// 如果配置失败，需要回滚并删除 OD 实例
		rollbackODInstance(odInstanceID)

		return
	}

	// 迁移任务到 OD 实例
	err = migrateTasksToODInstance(odInstanceID)
	if err != nil {
		fmt.Println("Failed to migrate tasks to OD instance:", err)

		// 如果迁移失败，需要回滚并删除 OD 实例
		rollbackODInstance(odInstanceID)

		return
	}

	fmt.Println("Tasks migrated to OD instance successfully.")
}

// 创建 OD 实例
func createODInstance() (string, error) {
	sess, err := session.NewSession(&aws.Config{
		Region: aws.String("us-west-2"), // 设置您的区域
	})
	if err != nil {
		return "", err
	}

	svc := ec2.New(sess)

	// 使用 RunInstances API 创建 OD 实例
	runResult, err := svc.RunInstances(&ec2.RunInstancesInput{
		ImageId:      aws.String("ami-xxxxxxxx"), // 设置 AMI ID
		InstanceType: aws.String("t3.micro"),     // 设置实例类型
		MinCount:     aws.Int64(1),
		MaxCount:     aws.Int64(1),
	})
	if err != nil {
		return "", err
	}

	instanceID := *runResult.Instances[0].InstanceId
	fmt.Println("Created OD instance:", instanceID)

	return instanceID, nil
}

// 配置 OD 实例的网络和应用程序
func configureODInstance(instanceID string) error {
	sess, err := session.NewSession(&aws.Config{
		Region: aws.String("us-west-2"), // 设置您的区域
	})
	if err != nil {
		return err
	}

	svc := ec2.New(sess)

	// 使用 ModifyInstanceAttribute API 配置 OD 实例
	_, err = svc.ModifyInstanceAttribute(&ec2.ModifyInstanceAttributeInput{
		InstanceId: aws.String(instanceID),
		// 设置需要的网络和应用程序配置参数，例如安全组、子网、用户数据等
		// ...
	})
	if err != nil {
		return err
	}

	fmt.Println("Configured OD instance:", instanceID)

	return nil
}

// 回滚并删除 OD 实例
func rollbackODInstance(instanceID string) {
	sess, err := session.NewSession(&aws.Config{
		Region: aws.String("us-west-2"), // 设置您的区域
	})
	if err != nil {
		fmt.Println("Failed to create session:", err)
		return
	}

	svc := ec2.New(sess)

	// 使用 TerminateInstances API 删除 OD 实例
	_, err = svc.TerminateInstances(&ec2.TerminateInstancesInput{
		InstanceIds: []*string{aws.String(instanceID)},
	})

	if err != nil {
		fmt.Println("Failed to terminate OD instance:", err)
	} else {
		fmt.Println("Rolled back and terminated OD instance:", instanceID)
	}
}

// 迁移任务到 OD 实例
func migrateTasksToODInstance(odInstanceID string) error {
	// 获取 Spot 实例中的任务列表
	spotInstanceTasks := []map[string]string{
		ID: aws.String(odInstanceID),
	}
	// 迁移每个任务到 OD 实例上
	for _, task := range spotInstanceTasks {
		err := migrateTaskToODInstance(odInstanceID, task)
		if err != nil {
			fmt.Printf("Failed to migrate task %s to OD instance: %v\n", task.ID, err)

			// 如果迁移失败，执行回滚操作
			rollbackMigratedTasks(odInstanceID, spotInstanceTasks[0:i])

			return err
		}

		// 更新任务状态，标记为已迁移
		updateTaskStatus(task.ID, "migrated")
	}

	return nil
}

// 迁移单个任务到 OD 实例
func migrateTaskToODInstance(odInstanceID string, task Task) error {
	// 根据任务要求，在 OD 实例上创建相应的运行环境
	err := createRuntimeEnvironment(odInstanceID, task)
	if err != nil {
		return err
	}

	// 将任务数据和配置文件传输到 OD 实例
	err = transferTaskDataAndConfig(odInstanceID, task)
	if err != nil {
		return err
	}

	// 调整任务的网络配置，使其与 OD 实例适配
	err = adjustTaskNetworkConfig(odInstanceID, task)
	if err != nil {
		return err
	}

	// 启动任务在 OD 实例上的运行
	err = startTaskOnODInstance(odInstanceID, task)
	if err != nil {
		return err
	}

	return nil
}

// 执行回滚操作，将已迁移的任务恢复到原来的 Spot 实例上
func rollbackMigratedTasks(odInstanceID string, tasks []Task) {
	// 将已迁移的任务恢复到原来的 Spot 实例上
	for _, task := range tasks {
		// 恢复任务的数据和配置文件
		err := restoreTaskDataAndConfig(task)
		if err != nil {
			fmt.Printf("Failed to restore task %s data and config: %v\n", task.ID, err)
			continue
		}

		// 恢复任务的网络配置
		err = restoreTaskNetworkConfig(task)
		if err != nil {
			fmt.Printf("Failed to restore task %s network config: %v\n", task.ID, err)
			continue
		}

		// 启动任务在原来的 Spot 实例上的运行
		err = startTaskOnSpotInstance(task)
		if err != nil {
			fmt.Printf("Failed to start task %s on spot instance: %v\n", task.ID, err)
			continue
		}

		// 更新任务状态，标记为已恢复
		updateTaskStatus(task.ID, "restored")

		fmt.Printf("Task %s has been restored to the original spot instance.\n", task.ID)
	}

	// 删除 OD 实例
	rollbackODInstance(odInstanceID)
}
