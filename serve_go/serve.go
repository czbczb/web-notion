package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"time"
)

func main() {
	r := gin.Default()

	r.POST("/stream", func(c *gin.Context) {
		c.Header("Content-Type", "text/event-stream")
		c.Header("Cache-Control", "no-cache")

		for i := 0; i < 10; i++ {
			time.Sleep(time.Second)
			data := fmt.Sprintf("data: %d\n\n", i)
			if _, err := c.Writer.WriteString(data); err != nil {
				return
			}
			c.Writer.Flush()
		}
	})

	if err := r.Run(":8081"); err != nil {
		panic("Failed to start server: " + err.Error())
	}
}