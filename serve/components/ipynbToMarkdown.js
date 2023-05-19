
const getSourceText = (item) => {
  console.log(item.source)
  const text = typeof item.source === 'string' ? item.source : item.source.join("")
  return item.cell_type === "code"
  ? "```\n" + text + "\n```\n"
  : "\n" + text + "\n";
}
function convertIpynbToMarkdown() {
  const cells = [
    {
      "cell_type": "markdown",
      "id": "3c9a0c6e",
      "metadata": {},
      "source": "# MaxLang \u64cd\u4f5cMaxCloud\u76f8\u5173\u529f\u80fd\u793a\u4f8b"
    },
    {
      "cell_type": "markdown",
      "id": "cf166a9b",
      "metadata": {},
      "source": "## \u767b\u5f55MaxCloud\nloginMaxCloud(\"\u7528\u6237\u540d\",\"\u5bc6\u7801\")\n\n\u53c2\u65701\uff1a\u7528\u6237\u540d\uff08\u767b\u5f55MaxCloud\u8d26\u6237\uff09\n\n\u53c2\u65702\uff1a\u5bc6\u7801\uff08\u767b\u5f55MaxCloud\u5bc6\u7801\uff09"
    },
    {
      "cell_type": "code",
      "execution_count": 1,
      "id": "ae5f8aa0",
      "metadata": {
        "trusted": false
      },
      "outputs": [
        {
          "name": "stdout",
          "output_type": "stream",
          "text": "please input password\u00b7\u00b7\u00b7\u00b7\u00b7\u00b7\u00b7\u00b7\n"
        },
        {
          "data": {
            "text/plain": "true"
          },
          "execution_count": 1,
          "metadata": {},
          "output_type": "execute_result"
        }
      ],
      "source": "loginMaxcloud(\"jianwen.gao@mobvista.com\", <<password>>)"
    },
    {
      "cell_type": "markdown",
      "id": "63cb32de",
      "metadata": {},
      "source": "## \u4f7f\u7528Credential \u65b9\u5f0f\u767b\u5f55MaxCloud\nsetCredential(\"maxcloud\", \"jianwen.gao@mobvista.com\", <\\<password\\>>)\n\nloginMaxcloud(\"maxcloud\")"
    },
    {
      "cell_type": "code",
      "execution_count": 2,
      "id": "41982feb",
      "metadata": {
        "trusted": false
      },
      "outputs": [
        {
          "name": "stdout",
          "output_type": "stream",
          "text": "please input password\u00b7\u00b7\u00b7\u00b7\u00b7\u00b7\u00b7\u00b7\n"
        },
        {
          "data": {
            "text/plain": "true"
          },
          "execution_count": 2,
          "metadata": {},
          "output_type": "execute_result"
        }
      ],
      "source": "setCredential(\"maxcloudab\", \"jianwen.gao@mobvista.com\", <<password>>)\n\nloginMaxcloud(\"maxcloudab\")"
    },
    {
      "cell_type": "markdown",
      "id": "a5710ce9",
      "metadata": {},
      "source": "## \u83b7\u53d6Team\u5217\u8868\n\u83b7\u53d6\u767b\u5f55\u8d26\u53f7\u53ef\u4ee5\u4f7f\u7528\u7684\u6240\u6709Team\u5217\u8868"
    },
    {
      "cell_type": "code",
      "execution_count": 2,
      "id": "1bba1de6",
      "metadata": {
        "trusted": false
      },
      "outputs": [
        {
          "data": {
            "text/plain": "[\n{\nteamId: 1, \nteamName: MaxCloud\n}, \n{\nteamId: 2, \nteamName: reyun\n}, \n{\nteamName: test-555, \nteamId: 19\n}, \n{\nteamId: 21, \nteamName: cktest\n}, \n{\nteamId: 23, \nteamName: SharedTeamLikeEP\n}, \n{\nteamId: 24, \nteamName: maxcloud-dev\n}\n]"
          },
          "execution_count": 2,
          "metadata": {},
          "output_type": "execute_result"
        }
      ],
      "source": "listTeam()"
    },
    {
      "cell_type": "markdown",
      "id": "6fa9c7f1",
      "metadata": {},
      "source": "## \u83b7\u53d6Team\u4e0b\u7684\u6240\u6709\u9879\u76ee\u5217\u8868\nlistProject(teamId)\n\n\u53c2\u65701\uff1a\u56e2\u961fID"
    },
    {
      "cell_type": "code",
      "execution_count": 3,
      "id": "53afe959",
      "metadata": {
        "trusted": false
      },
      "outputs": [
        {
          "data": {
            "text/plain": "[\n{\nprojectId: 158, \nprojectName: aaa01, \nrole: admin\n}, \n{\nprojectId: 79, \nprojectName: CrazyWolf, \nrole: admin\n}, \n{\nprojectId: 109, \nprojectName: demo_cui, \nrole: admin\n}, \n{\nprojectName: demo1, \nrole: admin, \nprojectId: 103\n}, \n{\nprojectId: 139, \nprojectName: JayceWeb, \nrole: admin\n}, \n{\nrole: admin, \nprojectId: 114, \nprojectName: kuitestproj\n}, \n{\nprojectId: 106, \nprojectName: leon-dev, \nrole: admin\n}, \n{\nprojectName: test-event, \nrole: admin, \nprojectId: 97\n}\n]"
          },
          "execution_count": 3,
          "metadata": {},
          "output_type": "execute_result"
        }
      ],
      "source": "listProject(1)"
    },
    {
      "cell_type": "markdown",
      "id": "a095fca5",
      "metadata": {},
      "source": "## \u83b7\u53d6\u9879\u76ee\u4e0b\u7684\u6240\u6709\u96c6\u7fa4\u5217\u8868\nlistCluster(teamId, projectId)\n\n\u53c2\u65701\uff1a\u56e2\u961fID\n\n\u53c2\u65702\uff1a\u9879\u76eeID"
    },
    {
      "cell_type": "code",
      "execution_count": 4,
      "id": "d0b5d601",
      "metadata": {
        "trusted": false
      },
      "outputs": [
        {
          "data": {
            "text/plain": "[\n{\nclusterId: 69, \nclusterName: ali-spotmax-maxcloud-bj-demo-test, \nnamespaces: [\ncrazywolf, \ndefault, \ntestnew\n]\n}, \n{\nclusterId: 126, \nclusterName: MC-Mobvista-test-aws-nametest, \nnamespaces: [\ndefault\n]\n}\n]"
          },
          "execution_count": 4,
          "metadata": {},
          "output_type": "execute_result"
        }
      ],
      "source": "listCluster(1, 79)"
    },
    {
      "cell_type": "markdown",
      "id": "3455ff01",
      "metadata": {},
      "source": "## \u521d\u59cb\u5316\u96c6\u7fa4\u53c2\u6570\u53d8\u91cf\n\u4f7f\u7528\u4e00\u4e2amap\u53d8\u91cf\u4fdd\u5b58teamId\u3001projectId,clusterId\u3001namespace \u7b49\u53c2\u6570\uff0c\u4f7f\u7528\u4e00\u4e2a\u65b9\u4fbf\u8bc6\u522b\u7684\u540d\u79f0\uff0c\u540e\u7eed\u96c6\u7fa4\u76f8\u5173\u65b9\u6cd5\u8c03\u7528\u7b2c\u4e00\u4e2a\u53c2\u6570\u90fd\u4f20\u5165\u8fd9\u4e2a\u53d8\u91cf\uff0c\u7528\u4e8e\u6307\u5b9a\u96c6\u7fa4\u73af\u5883\u3002\n\nteamId,projectId,clusterId \u7b49\u53c2\u6570\u53ef\u4ee5\u76f4\u63a5\u4eceMaxCloud\u9879\u76ee\u7ba1\u7406\u9875\u9762\u590d\u5236\uff0c\u5982\u4e0b\u56fe\u6240\u793a\n\n\n<img src=\"https://resource.spotmaxtech.com/common/1665386004933.jpg\" alt=\"image-20221010151738693\" style=\"zoom:50%;\" />"
    },
    {
      "cell_type": "markdown",
      "id": "31d8821d",
      "metadata": {},
      "source": "\u4ece\u7f51\u9875\u4e2d\u590d\u5236\u7684\u4e00\u4e0b\u5185\u5bb9\uff0c\u53ea\u6709 `teamId`\u3001`projectId`\u3001 `clusterId`\u3001 `namespace` \u51e0\u4e2a\u53c2\u6570\u662f\u5fc5\u586b\u7684\uff0cName\u76f8\u5173\u53c2\u6570\u53ea\u662f\u4e3a\u4e86\u65b9\u4fbf\u60a8\u8bc6\u522b"
    },
    {
      "cell_type": "code",
      "execution_count": 1,
      "id": "c3931b4b",
      "metadata": {
        "trusted": false
      },
      "outputs": [
        {
          "data": {
            "text/plain": ""
          },
          "execution_count": 1,
          "metadata": {},
          "output_type": "execute_result"
        }
      ],
      "source": "Crazywolf_test_ack_maxcloud_bj_demo = {\n        \"teamId\": 1,\n        \"teamName\": \"MaxCloud\",\n        \"projectId\": 62,\n        \"projectName\": \"Crazywolf-test\",\n        \"clusterId\": 22,\n        \"clusterName\": \"ack-maxcloud-bj-demo\",\n        \"namespace\": \"crazywolf\"\n}"
    },
    {
      "cell_type": "markdown",
      "id": "ad01e2b8",
      "metadata": {},
      "source": "## \u8bbe\u7f6e\u5f53\u524d\u73af\u5883\u7684kubeconfig\n\u53c2\u65701\uff1a\u96c6\u7fa4\u73af\u5883\u53d8\u91cf\n\n\u6b64\u51fd\u6570\u6267\u884c\u540e\u4f1a\u628a\u5f53\u524d\u96c6\u7fa4\u73af\u5883\u53d8\u91cf\u6307\u5b9a\u96c6\u7fa4\u7684kubeconfig\u653e\u5728\u5f53\u524d\u73af\u5883\u7684~/.kube/config \u6587\u4ef6\u4e2d\uff0c\u540e\u7eed\u53ef\u4ee5\u4f7f\u7528 `exec(xxx)`\u6267\u884cshell \u547d\u4ee4\uff0c\u5982\u679c\u4f7f\u7528`exec(kubectl get pod -n namespaceName)` \u5c31\u53ef\u4ee5\u83b7\u53d6\u6307\u5b9anamespace\u4e0b\u7684pod\u5217\u8868\n\n\u5982\u679c\u9700\u8981\u5207\u6362kubeconfig\u9700\u8981\u91cd\u65b0\u6267\u884cuseCluster\uff0c\u8be5\u64cd\u4f5c\u4f1a\u7528\u65b0\u96c6\u7fa4kubeconfig\u8986\u76d6\u4e4b\u524d\u7684\u6587\u4ef6"
    },
    {
      "cell_type": "code",
      "execution_count": 3,
      "id": "e31be758",
      "metadata": {
        "trusted": false
      },
      "outputs": [
        {
          "data": {
            "text/plain": "true"
          },
          "execution_count": 3,
          "metadata": {},
          "output_type": "execute_result"
        }
      ],
      "source": "useCluster(bj_demo_crazywolf)"
    },
    {
      "cell_type": "markdown",
      "id": "a24ac961",
      "metadata": {},
      "source": "### \u5c55\u793a\u8bbe\u7f6e\u96c6\u7fa4kubeconfig\u540e\u4f7f\u7528shell\u547d\u4ee4\u64cd\u4f5c\u96c6\u7fa4"
    },
    {
      "cell_type": "code",
      "execution_count": 4,
      "id": "bb44dc63",
      "metadata": {
        "trusted": false
      },
      "outputs": [
        {
          "data": {
            "text/plain": "NAME                                  READY   UP-TO-DATE   AVAILABLE   AGE\napply-yaml-test                       1/1     1            1           39d\nhellogo                               1/1     1            1           42d\nhostname-20211230-165858-deployment   1/1     1            1           285d\nhttpbin-test                          1/1     1            1           80d\nmy-wordpress                          0/1     1            0           2d1h\nngxin-dep-0                           1/1     1            1           172d\nngxin-dep-2                           1/1     1            1           172d\nngxin-dep-3                           1/1     1            1           172d\ntest-20220629-192247-deployment       0/0     0            0           103d\n"
          },
          "execution_count": 4,
          "metadata": {},
          "output_type": "execute_result"
        }
      ],
      "source": "exec(\"kubectl get deployment -n crazywolf\")"
    },
    {
      "cell_type": "markdown",
      "id": "684e1286",
      "metadata": {},
      "source": "## \u521b\u5efa\u547d\u540d\u7a7a\u95f4\n\u53c2\u65701\uff1a\u96c6\u7fa4\u73af\u5883\u53d8\u91cf\n\n\u53c2\u65702\uff1a\u65b0\u547d\u540d\u7a7a\u95f4\u540d\u79f0"
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "2e2a4926",
      "metadata": {
        "trusted": false
      },
      "outputs": [],
      "source": "createNamespace(bj_demo_crazywolf, \"gjw-0910\")"
    },
    {
      "cell_type": "markdown",
      "id": "d4e167d4",
      "metadata": {},
      "source": "## \u83b7\u53d6\u8d44\u6e90Yaml\n\u53c2\u65701\uff1a\u96c6\u7fa4\u73af\u5883\u53d8\u91cf\n\n\u53c2\u65702\uff1a\u8d44\u6e90\u7c7b\u578b\n\n\u53c2\u65703\uff1a\u8d44\u6e90\u540d\u79f0"
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "f50c54dc",
      "metadata": {
        "scrolled": true,
        "trusted": false
      },
      "outputs": [],
      "source": "getYaml(bj_demo_crazywolf, \"deployment\",\"ngxin-dep-0\")"
    },
    {
      "cell_type": "markdown",
      "id": "a33c8a7b",
      "metadata": {},
      "source": "## Describe \u8d44\u6e90\n\u53c2\u65701\uff1a\u96c6\u7fa4\u73af\u5883\u53d8\u91cf\n\n\u53c2\u65702\uff1a \u8d44\u6e90\u7c7b\u578b\n\n\u53c2\u65703\uff1a\u8d44\u6e90\u540d\u79f0"
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "a17bc080",
      "metadata": {
        "scrolled": true,
        "trusted": false
      },
      "outputs": [],
      "source": "describeResource(bj_demo_crazywolf, \"deployment\", \"ngxin-dep-0\")"
    },
    {
      "cell_type": "markdown",
      "id": "49e35c0c",
      "metadata": {},
      "source": "## Scale Deployment\n\u53c2\u65701\uff1a\u96c6\u7fa4\u73af\u5883\u53d8\u91cf\n\n\u53c2\u65702\uff1aDeployment \u540d\u79f0\n\n\u53c2\u65703\uff1a Replicas \u6570\u91cf"
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "4ff0eea9",
      "metadata": {
        "trusted": false
      },
      "outputs": [],
      "source": "scaleDeployment(bj_demo_crazywolf, \"ngxin-dep-0\", 1)"
    },
    {
      "cell_type": "markdown",
      "id": "429a9c10",
      "metadata": {},
      "source": "## Scale Statefulset\n\u53c2\u65701\uff1a\u96c6\u7fa4\u73af\u5883\u53d8\u91cf\n\n\u53c2\u65702\uff1aStatefulset \u540d\u79f0\n\n\u53c2\u65703\uff1aReplicas \u6570\u91cf"
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "6305cd62",
      "metadata": {
        "trusted": false
      },
      "outputs": [],
      "source": "scaleStatefulset(bj_demo_crazywolf, \"xxxx\", 2)"
    },
    {
      "cell_type": "markdown",
      "id": "d8f4524c",
      "metadata": {},
      "source": "## \u5217\u4e3e\u6240\u6709\u8d44\u6e90\n\u53c2\u65701\uff1a\u96c6\u7fa4\u73af\u5883\u53d8\u91cf\n\n\u53c2\u65702\uff1a\u8d44\u6e90\u7c7b\u578b\n\nlistResource \u6307\u5b9a\u8d44\u6e90\u7c7b\u578b\u540e\u53ef\u4ee5\u83b7\u53d6\u4e0a\u9762\u6307\u5b9a\u96c6\u7fa4\u547d\u540d\u7a7a\u95f4\u4e0b\u7684\u6240\u6709\u8d44\u6e90\nlistResource \u53ef\u4ee5\u53ea\u4f20\u5165\u4e00\u4e2a\u7c7b\u578b\u53c2\u6570\uff0c\u4e5f\u53ef\u4ee5\u4f20\u5165\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f5c\u4e3a\u96f6\u65f6\u547d\u540d\u7a7a\u95f4\uff08\u4e0d\u4f1a\u8986\u76d6\u4e4b\u524duseCluster\u8bbe\u7f6e\u7684\u547d\u540d\u7a7a\u95f4\uff09\n\n\u76ee\u524d\u652f\u6301\u7684\u8d44\u6e90\u4e3a\uff1a\n\n- deployment\n- job\n- cronjob\n- daemonset \n- statefulset\n- service\n- ingress\n- persistentvolumeclaim\n- configmap\n- secret\n- gateway\n- namespace\n- pod\n- horizontalpodautoscaler\n- serviceaccount\n- replicaset\n- poddisruptionbudget\n- node\n- storageclass"
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "a3fb9586",
      "metadata": {
        "scrolled": false,
        "trusted": false
      },
      "outputs": [],
      "source": "listResource(bj_demo_crazywolf, \"deployment\")"
    },
    {
      "cell_type": "markdown",
      "id": "ee5407fe",
      "metadata": {},
      "source": "## \u83b7\u53d6\u968f\u673a\u5b57\u7b26\u4e32\nrandStr\u53c2\u6570\u4e3a\u9700\u8981\u83b7\u53d6\u968f\u673a\u5b57\u7b26\u4e32\u957f\u5ea6\uff0c\u5982\u679c\u4e0d\u4f20\u53c2\u6570\u9ed8\u8ba4\u4e3a6"
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "c9ec1f21",
      "metadata": {
        "trusted": false
      },
      "outputs": [],
      "source": "randStr(6)"
    },
    {
      "cell_type": "markdown",
      "id": "d75b6e27",
      "metadata": {},
      "source": "## \u628aMaxlang\u5bf9\u8c61\u8f6c\u6362\u6210Json"
    },
    {
      "cell_type": "markdown",
      "id": "ce513d18",
      "metadata": {},
      "source": "### \u6d4b\u8bd5\u628aMap\u8f6c\u6362\u4e3ajson"
    },
    {
      "cell_type": "code",
      "execution_count": 11,
      "id": "5bc16576",
      "metadata": {
        "trusted": false
      },
      "outputs": [
        {
          "data": {
            "text/plain": "{\"address\":\"beiijng\",\"age\":18,\"name\":\"CrazyWolf\"}"
          },
          "execution_count": 11,
          "metadata": {},
          "output_type": "execute_result"
        }
      ],
      "source": "/*\n\u58f0\u660e\u4e00\u4e2aMAP \u5bf9\u8c61\n*/\nmapObj = {\n    \"name\" : \"CrazyWolf\",\n    \"age\" : 18,\n    \"address\" : \"beiijng\"\n}\n/* \u628amap \u5bf9\u8c61\u8f6c\u6362\u6210json */\ntoJson(mapObj)"
    },
    {
      "cell_type": "markdown",
      "id": "0ddf01c0",
      "metadata": {},
      "source": "### \u6d4b\u8bd5\u628a\u6570\u7ec4\u5bf9\u8c61\u8f6c\u6362\u6210json"
    },
    {
      "cell_type": "code",
      "execution_count": 12,
      "id": "61504e22",
      "metadata": {
        "trusted": false
      },
      "outputs": [
        {
          "data": {
            "text/plain": "[1,true,\"stringObj\"]"
          },
          "execution_count": 12,
          "metadata": {},
          "output_type": "execute_result"
        }
      ],
      "source": "/*\n\u58f0\u660e\u4e00\u4e2aArray \u5bf9\u8c61\n*/\n\narrayObj = [1, true, \"stringObj\"]\n\n/* \n\u628amap \u5bf9\u8c61\u8f6c\u6362\u6210json \n*/\ntoJson(arrayObj)"
    },
    {
      "cell_type": "markdown",
      "id": "9cd9f168",
      "metadata": {},
      "source": "### \u6d4b\u8bd5\u628a\u51fd\u6570\u8fd4\u56de\u5bf9\u8c61\u8f6c\u4e3ajson"
    },
    {
      "cell_type": "code",
      "execution_count": 13,
      "id": "79eaf441",
      "metadata": {
        "trusted": false
      },
      "outputs": [
        {
          "data": {
            "text/plain": "[{\"teamId\":1,\"teamName\":\"MaxCloud\"},{\"teamId\":2,\"teamName\":\"reyun\"},{\"teamId\":19,\"teamName\":\"test-555\"},{\"teamId\":21,\"teamName\":\"cktest\"},{\"teamId\":23,\"teamName\":\"SharedTeamLikeEP\"},{\"teamId\":24,\"teamName\":\"maxcloud-dev\"}]"
          },
          "execution_count": 13,
          "metadata": {},
          "output_type": "execute_result"
        }
      ],
      "source": "toJson(listTeam())"
    },
    {
      "cell_type": "markdown",
      "id": "84333a53",
      "metadata": {},
      "source": "## \u7b49\u5f85N\u79d2\nsleep(second)\n\n\u53c2\u65701\uff1a\u4f11\u7720\u79d2\u6570"
    },
    {
      "cell_type": "code",
      "execution_count": 3,
      "id": "c9b94acf",
      "metadata": {
        "trusted": false
      },
      "outputs": [
        {
          "data": {
            "text/plain": "true"
          },
          "execution_count": 3,
          "metadata": {},
          "output_type": "execute_result"
        }
      ],
      "source": "sleep(5)"
    },
    {
      "cell_type": "markdown",
      "id": "dc9ff4c4",
      "metadata": {},
      "source": "## \u4f7f\u7528\u6a21\u7248Apply Yaml"
    },
    {
      "cell_type": "markdown",
      "id": "924b819f",
      "metadata": {},
      "source": "### \u58f0\u660e\u5b57\u7b26\u4e32\u6a21\u7248\n\u6a21\u7248\u8bed\u6cd5\u540cGolang \u8bed\u6cd5"
    },
    {
      "cell_type": "code",
      "execution_count": 6,
      "id": "2a293038",
      "metadata": {
        "trusted": false
      },
      "outputs": [
        {
          "data": {
            "text/plain": ""
          },
          "execution_count": 6,
          "metadata": {},
          "output_type": "execute_result"
        }
      ],
      "source": "configStr = `apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: myconfigmap-{{.nameSuffix}}\n  namespace: crazywolf\n  labels:\n    app: myapplication\ndata:\n  data: {{.randData}}`"
    },
    {
      "cell_type": "markdown",
      "id": "f4b3805c",
      "metadata": {},
      "source": "### \u58f0\u660e\u4e00\u4e2aMap\u6570\u636e\u7528\u4e8e\u66ff\u6362\u4e0a\u9762\u6a21\u7248\u7684\u5360\u4f4d\nMap \u6570\u636ekey\u3001value \u90fd\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\uff0c\u6682\u4e0d\u652f\u6301\u5176\u4ed6\u7c7b\u578b"
    },
    {
      "cell_type": "code",
      "execution_count": 7,
      "id": "f3ecf999",
      "metadata": {
        "trusted": false
      },
      "outputs": [
        {
          "data": {
            "text/plain": ""
          },
          "execution_count": 7,
          "metadata": {},
          "output_type": "execute_result"
        }
      ],
      "source": "randstr = randStr(6)\ndata = {\"nameSuffix\":randstr, \"randData\":randstr}"
    },
    {
      "cell_type": "markdown",
      "id": "db2102b1",
      "metadata": {},
      "source": "### \u4f7f\u7528fillTemp \u65b9\u6cd5\u7528map \u66ff\u6362\u6a21\u7248\u4e2d\u7684\u5360\u4f4d\u7b26\uff0c\u83b7\u53d6\u6700\u7ec8\u53ef\u6267\u884c\u7684yaml\u5b57\u7b26\u4e32"
    },
    {
      "cell_type": "code",
      "execution_count": 9,
      "id": "53d93075",
      "metadata": {
        "trusted": false
      },
      "outputs": [
        {
          "data": {
            "text/plain": "apiVersion: v1kind: ConfigMapmetadata:  name: myconfigmap-137234  namespace: crazywolf  labels:    app: myapplicationdata:  data: 137234\n\n"
          },
          "execution_count": 9,
          "metadata": {},
          "output_type": "execute_result"
        }
      ],
      "source": "yaml = fillTemp(configStr, data)\nyaml"
    },
    {
      "cell_type": "markdown",
      "id": "a33b47b9",
      "metadata": {},
      "source": "### \u8c03\u7528applyYaml \u65b9\u6cd5\u5728\u96c6\u7fa4\u4e2d\u90e8\u7f72yaml"
    },
    {
      "cell_type": "code",
      "execution_count": 10,
      "id": "c57e7e55",
      "metadata": {
        "trusted": false
      },
      "outputs": [
        {
          "data": {
            "text/plain": "true\n\n"
          },
          "execution_count": 10,
          "metadata": {},
          "output_type": "execute_result"
        }
      ],
      "source": "applyYaml(bj_demo_crazywolf, yaml)"
    },
    {
      "cell_type": "markdown",
      "id": "95a11c5e",
      "metadata": {},
      "source": "# HPA"
    },
    {
      "cell_type": "markdown",
      "id": "f6a854de",
      "metadata": {},
      "source": "## \u9501\u5b9aHPA\n\u53c2\u65701\uff1a\u5f53\u524d\u96c6\u7fa4\u73af\u5883\n\u53c2\u65702\uff1aHPA \u540d\u79f0\n\u53c2\u65703\uff1aminReplicas\n\n\u8bbe\u7f6eminReplicas\u503c\uff0c\u9ed8\u8ba4MaxReplicas\u4e0d\u53d8\uff0c\u5982\u679c\u5f53\u524dMaxReplicas\u5c0f\u4e8e\u8981\u8bbe\u7f6e\u7684minReplicas\u5219\u4fee\u6539 MaxReplicas\u4e3aminReplicas\u4e00\u6837\n\u4f8b\u5982\uff1a\n\n```yaml\ndemo-hap\n minReplicas: 2\n maxReplicas: 5\n```\n\n\u8c03\u7528 localHpa(env, \"demo-hpa\", 3)\uff0c\u9501\u5b9a\u4e3a3\u5219\u6267\u884c\u540e\u7ed3\u679c\u4e3a\n```yaml\ndemo-hap\n minReplicas: 3\n maxReplicas: 5\n```\n\n\u5982\u679c\u518d\u6b21\u8c03\u7528\u8c03\u7528 localHpa(env, \"demo-hpa\", 10)\uff0c\u9501\u5b9a\u4e3a10\u5219\u6267\u884c\u540e\u7ed3\u679c\u4e3a\n```yaml\ndemo-hap\n minReplicas: 10\n maxReplicas: 10\n```"
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "63620d00",
      "metadata": {
        "trusted": false
      },
      "outputs": [],
      "source": "lockHpa(bj_demo_crazywolf, \"gjw-test\", 1)"
    },
    {
      "cell_type": "markdown",
      "id": "d6050ad9",
      "metadata": {},
      "source": "## \u8bbe\u7f6eHPA \u7684Replicas\n\u53c2\u65701\uff1aHPA\u540d\u79f0\n\n\u53c2\u65702\uff1aminReplicas\n\n\u53c2\u65703\uff1amaxReplicas"
    },
    {
      "cell_type": "code",
      "execution_count": 1,
      "id": "47ab7b06",
      "metadata": {
        "trusted": false
      },
      "outputs": [
        {
          "data": {
            "text/plain": "ERROR: identifier not found: bj_demo_crazywolf\n"
          },
          "execution_count": 1,
          "metadata": {},
          "output_type": "execute_result"
        }
      ],
      "source": "setHpaReplicas(bj_demo_crazywolf, \"gjw-test\", 1, 2)"
    },
    {
      "cell_type": "markdown",
      "id": "26837a2f",
      "metadata": {},
      "source": "### \u83b7\u53d6HPA\u7684minReplicas\n\u53c2\u65701\uff1a\u96c6\u7fa4\u73af\u5883\n\n\u53c2\u65702\uff1aHPA\u540d\u79f0"
    },
    {
      "cell_type": "code",
      "execution_count": 4,
      "id": "50319bba",
      "metadata": {
        "trusted": false
      },
      "outputs": [
        {
          "data": {
            "text/plain": "1\n"
          },
          "execution_count": 4,
          "metadata": {},
          "output_type": "execute_result"
        }
      ],
      "source": "getHpaMin(bj_demo_crazywolf, \"gjw-test\")"
    },
    {
      "cell_type": "markdown",
      "id": "7e525857",
      "metadata": {},
      "source": "### \u83b7\u53d6HPA\u7684maxReplicas\n\u53c2\u65701\uff1a\u96c6\u7fa4\u73af\u5883\n\n\u53c2\u65702\uff1aHPA\u540d\u79f0"
    },
    {
      "cell_type": "code",
      "execution_count": 5,
      "id": "2ad632c1",
      "metadata": {
        "trusted": false
      },
      "outputs": [
        {
          "data": {
            "text/plain": "2\n"
          },
          "execution_count": 5,
          "metadata": {},
          "output_type": "execute_result"
        }
      ],
      "source": "getHpaMax(bj_demo_crazywolf, \"gjw-test\")"
    },
    {
      "cell_type": "markdown",
      "id": "fb448c73",
      "metadata": {},
      "source": "### \u83b7\u53d6HPA\u5f53\u524dReplicas\n\u53c2\u65701\uff1a\u96c6\u7fa4\u73af\u5883\n\n\u53c2\u65702\uff1aHPA\u540d\u79f0"
    },
    {
      "cell_type": "code",
      "execution_count": 1,
      "id": "ef00a81d",
      "metadata": {
        "trusted": false
      },
      "outputs": [
        {
          "data": {
            "text/plain": "ERROR: identifier not found: getHpaCurrent"
          },
          "execution_count": 1,
          "metadata": {},
          "output_type": "execute_result"
        }
      ],
      "source": "getHpaCurrent(bj_demo_crazywolf, \"gjw-test\")"
    },
    {
      "cell_type": "markdown",
      "id": "ac7d22b6",
      "metadata": {},
      "source": "## Helm \u5b89\u88c5"
    },
    {
      "cell_type": "markdown",
      "id": "f9193929",
      "metadata": {},
      "source": "### \u6dfb\u52a0Repo\n\n\u53c2\u65701\uff1a\u96c6\u7fa4\u73af\u5883\u53d8\u91cf\n\n\u53c2\u65702\uff1arepo name\n\n\u53c2\u65703\uff1arepo URL"
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "f2272760",
      "metadata": {
        "trusted": false
      },
      "outputs": [],
      "source": "addOrUpdateRepo(bj_demo_crazywolf, \"bitnami\", \"https://charts.bitnami.com/bitnami\")"
    },
    {
      "cell_type": "markdown",
      "id": "0c8e8bb8",
      "metadata": {},
      "source": "### \u8bbe\u7f6esets "
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "435b3f0e",
      "metadata": {
        "trusted": false
      },
      "outputs": [],
      "source": "sets = {\n\"wordpressBlogName\" : \"CrazyWolf3453456\"\n}"
    },
    {
      "cell_type": "markdown",
      "id": "0a018cac",
      "metadata": {},
      "source": "### \u5b89\u88c5Chart\n\u53c2\u65701\uff1a\u96c6\u7fa4\u73af\u5883\u53d8\u91cf\n\n\u53c2\u65702\uff1areleaseName\n\n\u53c2\u65703\uff1achart name\n\n\u53c2\u65704\uff1achart\u7248\u672c\n\n\u53c2\u65705\uff1asets\u53c2\u6570 \uff08\u53ef\u9009\uff09"
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "5b8991b3",
      "metadata": {
        "scrolled": true,
        "trusted": false
      },
      "outputs": [],
      "source": "installOrUpgradeChart(bj_demo_crazywolf, \"my-wordpress\", \"bitnami/wordpress\", \"15.2.5\", sets)"
    },
    {
      "cell_type": "markdown",
      "id": "28a7fa95",
      "metadata": {},
      "source": "## \u67e5\u5faa\u5df2\u5b89\u88c5\u7684Helm\u5217\u8868\n\u53c2\u65701\uff1a\u96c6\u7fa4\u73af\u5883\u53d8\u91cf"
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "06564210",
      "metadata": {
        "trusted": false
      },
      "outputs": [],
      "source": "listHelmReleases(bj_demo_crazywolf)"
    },
    {
      "cell_type": "markdown",
      "id": "ff08ce18",
      "metadata": {},
      "source": "## \u67e5\u770bHelm\u5b89\u88c5\u7684Values\n\u53c2\u65701\uff1a\u96c6\u7fa4\u73af\u5883\u53d8\u91cf\n\n\u53c2\u65702\uff1areleaseName\n\n\u53c2\u65703\uff1a\u662f\u5426\u5c55\u793a\u6240\u6709values"
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "21c4d2d1",
      "metadata": {
        "scrolled": true,
        "trusted": false
      },
      "outputs": [],
      "source": "helmValues(bj_demo_crazywolf, \"my-wordpress\", false)"
    },
    {
      "cell_type": "markdown",
      "id": "30995975",
      "metadata": {},
      "source": "## \u8fde\u63a5MySQL"
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "3e73a575",
      "metadata": {
        "trusted": false
      },
      "outputs": [],
      "source": "host=\"spotmax-maxcloud-rds-hk.cpajjklptrkt.ap-east-1.rds.amazonaws.com\"\nuser=\"admin\"\npassword=<<password>>\nport=3306\ndbName=\"maxcloud_group\"\nopenMysql(host, port, dbName, user, password)"
    },
    {
      "cell_type": "markdown",
      "id": "3886d775",
      "metadata": {},
      "source": "openMysql()\n\n\u6b64\u51fd\u6570\u652f\u6301\u76f4\u63a5\u4f7f\u7528\u4f20\u5165\u8d26\u53f7\u5bc6\u7801\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528credential\u65b9\u5f0f\n\nsetCredential(\"mysqlCredential\", \"admin\", \"passwordxxxxx\")\n\nopenMysql(host, port, dbName, \"mysqlCredential\")"
    },
    {
      "cell_type": "markdown",
      "id": "7ef25d03",
      "metadata": {},
      "source": "## \u6267\u884cSQL"
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "623ce619",
      "metadata": {
        "trusted": false
      },
      "outputs": [],
      "source": "sql=`CREATE TABLE test (\n\t\tid bigint(11) UNSIGNED NOT NULL AUTO_INCREMENT,\n\t\tjob_config_id bigint(11) NOT NULL COMMENT 'job_config\u7684id  \u5982\u679c0\u4ee3\u8868\u7684\u662f\u6d4b\u8bd5,',\n\t\tjob_name varchar(255) DEFAULT NULL,\n\t\tmessage varchar(512) DEFAULT NULL COMMENT '\u6d88\u606f\u5185\u5bb9',\n\t\ttype tinyint(1) NOT NULL COMMENT '1:\u9489\u9489',\n\t\tstatus tinyint(1) NOT NULL COMMENT '1:\u6210\u529f 0:\u5931\u8d25',\n\t\tfail_log text COMMENT '\u5931\u8d25\u539f\u56e0',\n\t\tis_deleted tinyint(1) NOT NULL DEFAULT '0',\n\t\tcreate_time datetime DEFAULT CURRENT_TIMESTAMP COMMENT '\u521b\u5efa\u65f6\u95f4',\n\t\tedit_time datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '\u4fee\u6539\u65f6\u95f4',\n\t\tcreator varchar(32) DEFAULT 'sys',\n\t\teditor varchar(32) DEFAULT 'sys',\n\t\tPRIMARY KEY (id),\n\t\tKEY index_job_config_id USING BTREE (job_config_id)\n\t\t) ENGINE = InnoDB CHARSET = utf8mb4 COMMENT '\u544a\u8b66\u53d1\u9001\u60c5\u51b5\u65e5\u5fd7';`\nexecSql(sql)"
    },
    {
      "cell_type": "markdown",
      "id": "f490f174",
      "metadata": {},
      "source": "# \u7ba1\u7406\u79d8\u94a5\n\u7528\u4e8e\u8bbe\u7f6e\u4e91\u5546\u7b49\u9700\u8981\u7528\u5230\u79d8\u94a5\u7684\u573a\u666f\uff0c\u60a8\u53ef\u4ee5\u518d\u4e00\u4e2a\u5355\u72ec\u7684\u573a\u666f\u4e2d\u8bbe\u7f6e\u597d\u79d8\u94a5\uff0c\u540e\u7eed\u4e91\u5546\u7684\u76f8\u5173\u64cd\u4f5c\u90fd\u76f4\u63a5\u4f20\u5165\u79d8\u94a5\u540d\u79f0\u5373\u53ef\n\n## \u65b0\u589eCredential\nsetCredential(name, key, value)\n\n\u53c2\u65701\uff1acredential \u552f\u4e00\u540d\u79f0\n\n\u53c2\u65702\uff1acredential key\uff0c\u5982\u679c\u662fAws credential\u5219\u4e3a aws_access_key_id\n\n\u53c2\u65703\uff1acredential value\uff0c\u5982\u679c\u662fAws credential\u5219\u4e3a aws_secret_access_key\n\nPS\uff1a\u4e0d\u80fd\u91cd\u590d\u8bbe\u7f6e\uff0c\u5982\u9700\u4fee\u6539\u8bf7\u4f7f\u7528updateCredential"
    },
    {
      "cell_type": "code",
      "execution_count": 4,
      "id": "067b6690",
      "metadata": {
        "trusted": false
      },
      "outputs": [
        {
          "name": "stdout",
          "output_type": "stream",
          "text": "please input password\u00b7\u00b7\u00b7\u00b7\u00b7\u00b7\u00b7\u00b7\n"
        },
        {
          "data": {
            "text/plain": "true"
          },
          "execution_count": 4,
          "metadata": {},
          "output_type": "execute_result"
        }
      ],
      "source": "setCredential(\"awsCredential\", \"key_xxxxxx\", <<password>>)"
    },
    {
      "cell_type": "markdown",
      "id": "c8f8407b",
      "metadata": {},
      "source": "## \u4fee\u6539Credential\n\nupdateCredential(name, key, value)\n\n\u53c2\u65701\uff1acredential \u552f\u4e00\u540d\u79f0\n\n\u53c2\u65702\uff1acredential key\uff0c\u5982\u679c\u662fAws credential\u5219\u4e3a aws_access_key_id\n\n\u53c2\u65703\uff1acredential value\uff0c\u5982\u679c\u662fAws credential\u5219\u4e3a aws_secret_access_key"
    },
    {
      "cell_type": "code",
      "execution_count": 6,
      "id": "96a3f7cd",
      "metadata": {
        "trusted": false
      },
      "outputs": [
        {
          "name": "stdout",
          "output_type": "stream",
          "text": "please input password\u00b7\u00b7\u00b7\u00b7\u00b7\u00b7\u00b7\u00b7\n"
        },
        {
          "data": {
            "text/plain": "true"
          },
          "execution_count": 6,
          "metadata": {},
          "output_type": "execute_result"
        }
      ],
      "source": "updateCredential(\"awsCredential\", \"key_xxxxxx\", <<password>>)"
    },
    {
      "cell_type": "markdown",
      "id": "9b7709e2",
      "metadata": {},
      "source": "## \u89e3\u6790\u57df\u540d\n\u6839\u636e\u7ed9\u5b9a\u57df\u540d\u89e3\u6790\u51faIP\u6216CName\uff0c \u540c\u65f6\u67e5\u627eAws Route53 \u5bf9 A \u7c7b\u578b\u7684\u522b\u540d\u8fdb\u884c\u67e5\u627e\n\n### \u4f7f\u7528\u65b9\u5f0f\uff1a\n```\nnslookup(credential, \"data.mintegral.com.\")\n```\n\ne.g. Route53 \u4e2d \u7684\u4e00\u6761\u8bb0\u5f55\u5982\u4e0b\uff0c \u6b63\u5e38\u7684nslookup\u65e0\u6cd5\u8fd4\u56dedualstack.....\u8fd9\u4e2a\u57df\u540d\uff0c \u56e0\u4e3aRoute53\u5e76\u4e0d\u662f\u6807\u51c6\u7684DNS\u670d\u52a1\u5668\n```\nde01.mintegral.com\tA\t\u7b80\u5355\t- dualstack.adn-tktracking-frankfurt-13341082.eu-central-1.elb.amazonaws.com.\ndetailroi.mintegral.com\tA\t\u7b80\u5355\t-\t47.93.30.190\n```\n\u4f7f\u7528Playbook\u4e2d\u7684nslookup\u4f1a\u8fd4\u56de\u5982\u4e0b\u7ed3\u679c\n```\n[\nde01.mintegral.com. in A NAME: 3.67.205.211, \nde01.mintegral.com. in A NAME: 18.198.96.205, \nde01.mintegral.com. in A NAME: 3.126.117.230, \nde01.mintegral.com. in A NAME: 3.65.53.117, \nde01.mintegral.com. in A NAME: 18.184.234.38, \nde01.mintegral.com. in A NAME: 3.125.187.240, \nde01.mintegral.com. in A NAME: 3.120.59.220, \nde01.mintegral.com. in A NAME: 3.120.47.234, \n======records from aws route53=====, \nde01.mintegral.com. A   dualstack.adn-tktracking-frankfurt-13341082.eu-central-1.elb.amazonaws.com.\n]\n```"
    },
    {
      "cell_type": "markdown",
      "id": "8a03bcbc",
      "metadata": {},
      "source": "### \u67e5\u8be2\u57df\u540d\n\n\nAWS Route53 A Name\u5339\u914d\u6210\u529f\u4f1a\u8fd4\u56de\u76f8\u5e94\u7684\u4fe1\u606f"
    },
    {
      "cell_type": "code",
      "execution_count": 8,
      "id": "37227766",
      "metadata": {
        "trusted": false
      },
      "outputs": [
        {
          "data": {
            "text/plain": "[\n+--------------------------------------------+\n| A Names                                    |\n+---------------------+------+---------------+\n| NAME                | TYPE | TARGET        |\n+---------------------+------+---------------+\n| data.mintegral.com. | A    | 81.69.155.136 |\n+---------------------+------+---------------+\n, \n, \ncould not find zone: data.mintegral.com.,mintegral.com.,com.\n]"
          },
          "execution_count": 8,
          "metadata": {},
          "output_type": "execute_result"
        }
      ],
      "source": "nslookup(\"awsCredential\",\"data.mintegral.com.\")"
    },
    {
      "cell_type": "code",
      "execution_count": 9,
      "id": "c1c35ac4",
      "metadata": {
        "trusted": false
      },
      "outputs": [
        {
          "data": {
            "text/plain": "[\n+------------------------------------------------+\n| A Names                                        |\n+--------------------------+------+--------------+\n| NAME                     | TYPE | TARGET       |\n+--------------------------+------+--------------+\n| detailroi.mintegral.com. | A    | 47.93.30.190 |\n+--------------------------+------+--------------+\n, \n, \ncould not find zone: detailroi.mintegral.com.,mintegral.com.,com.\n]"
          },
          "execution_count": 9,
          "metadata": {},
          "output_type": "execute_result"
        }
      ],
      "source": "nslookup(\"awsCredential\",\"detailroi.mintegral.com.\")"
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "1805b47e",
      "metadata": {
        "trusted": false
      },
      "outputs": [],
      "source": "nslookup(\"awsCredential\", de01.mintegral.com.\")"
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "36e37e5e",
      "metadata": {
        "trusted": false
      },
      "outputs": [],
      "source": "nslookup(\"awsCredential\", \"api-stage-old.detailroi.mintegral.com\")"
    },
    {
      "cell_type": "markdown",
      "id": "c2e5d07e",
      "metadata": {},
      "source": "## AWS ASG Size\u67e5\u8be2\u548c\u66f4\u6539\n\nASG \u76f8\u5173\u65b9\u6cd5\u90fd\u652f\u6301\u901a\u8fc7\u516c\u5171\u65b9\u6cd5\u6267\u884c\u4e91\u5546\uff0c\u6216\u8005\u7528\u4e91\u5546\u7684\u65b9\u6cd5\u540d\uff0c\u4ee5\u83b7\u53d6asg\u4e3a\u4f8b\n\n- \u53c2\u6570\u4e2d\u6307\u5b9a\u4e91\u5546\uff08aws\u3001aliyun\u3001huawei\uff09\n\n    getASG(\"credential\", \"aws\",\"us-west-2\", \"kmax-demo-asg-small\")\n\n- \u76f4\u63a5\u7528\u4e91\u5546\u7684\u65b9\u6cd5\n\n    getAwsASG(\"credential\", \"us-west-2\", \"kmax-demo-asg-small\")\n\nlistASGs\u3001getASG\u3001updateASG\u3001lockASG \u90fd\u652f\u6301\u4e0a\u8ff0\u4f7f\u7528\u65b9\u5f0f\n\n### usage:\n\n#### \u5217\u51faregion\u7684ASG\uff0c \u5982\u679casgName\u662f\u7a7a\uff0c \u5217\u51fa\u6240\u6709\u7684ASG\n\n- listASGs(\"credential\", \"aws\", region, asgName)\n\n#### \u66f4\u65b0ASG\u7684\u6700\u5c0f\u5bb9\u91cf\u3001\u6700\u5927\u5bb9\u91cf\u3001\u6240\u9700\u5bb9\u91cf\n\n- updateASG(\"credential\",\"aws\", region, asgName, miniSize, maxSize, desiredSize)\n\n#### \u83b7\u53d6ASG\u7684\u6700\u5927\u3001\u6700\u5c0f\u3001\u6240\u9700\u5bb9\u91cf\n\n- getASG(\"credential\",\"aws\", region, asgName)\n\n#### \u9501\u5b9aASG\u5230lockSize\n\n- lockASG(\"credential\",\"aws\", region, asgName, lockSize)\n\ne.g.  \n```\n    listASGs(\"credential\", \"aws\", \"us-west-2\", \"kmax-demo-asg-small\")\n\tgetASG(\"credential\", \"aws\",\"us-west-2\", \"kmax-demo-asg-small\")\n\tupdateASG(\"credential\", \"aws\", \"us-west-2\", \"kmax-demo-asg-small\", 2, 2, 2) \n\tlockASG(\"credential\", \"aws\", \"us-west-2\", \"kmax-demo-asg-small\", 2) \n    \n    listAwsASGs(\"credential\", \"us-west-2\", \"kmax-demo-asg-small\")\n\tgetAwsASG(\"credential\", \"us-west-2\", \"kmax-demo-asg-small\")\n\tupdateAwsASG(\"credential\", \"us-west-2\", \"kmax-demo-asg-small\", 2, 2, 2) \n\tlockAwsASG(\"credential\", \"us-west-2\", \"kmax-demo-asg-small\", 2) \n```"
    },
    {
      "cell_type": "markdown",
      "id": "a0ccf675",
      "metadata": {},
      "source": "### \u67e5\u8be2ASG(s)\n\n\u53c2\u65701\uff1a\u4e91\u5546credential \uff0c\u8bf7\u5148\u8bd5\u7528setCredential(name, key, value \u8bbe\u7f6e)\n\n\u53c2\u65702\uff1aregion\n\n\u53c2\u65703\uff1aasgName \uff08\u53ef\u9009\uff09\n\n- \u83b7\u53d6Aws asg\u5217\u8868\n\nlistAwsASGs(\"credential\", \"us-west-2\")\n\nlistAwsASGs(\"credential\", \"us-west-2\", \"asgName\")\n\n- \u83b7\u53d6\u963f\u91cc\u4e91 asg \u5217\u8868\n\nlistAliASGs(\"credential\", \"us-west-2\")\n\nlistAliASGs(\"credential\", \"us-west-2\", \"asgName\")\n\n- \u83b7\u53d6huawei asg \u5217\u8868\n\nlistHwASGs(\"credential\", \"us-west-2\")\n\nlistHwASGs(\"credential\", \"us-west-2\", \"asgName\")\n\n**\u4f7f\u7528\u53c2\u6570\u6307\u5b9a\u4e91\u5546**\n\nlistHwASGs(\"credential\", \"aws\", \"us-west-2\")\n\nlistHwASGs(\"credential\", \"aws\", \"us-west-2\", \"asgName\")"
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "eed8c663",
      "metadata": {
        "trusted": false
      },
      "outputs": [],
      "source": "listAwsASGs(\"credential\", \"us-west-2\")\nlistAliASGs(\"credential\", \"us-west-2\")\nlistHwASGs(\"credential\", \"us-west-2\")"
    },
    {
      "cell_type": "markdown",
      "id": "8936ddae",
      "metadata": {},
      "source": "### \u66f4\u6539ASG\u7684\u6700\u5c0f\u5bb9\u91cf\u3001\u6700\u5927\u5bb9\u91cf\u3001\u6240\u9700\u5bb9\u91cf\n\n\u53c2\u65701\uff1a\u4e91\u5546credential \uff0c\u8bf7\u5148\u8bd5\u7528setCredential(name, key, value \u8bbe\u7f6e)\n\n\u53c2\u65702\uff1aregion\n\n\u53c2\u65703\uff1aasgName\n\n\u53c2\u65704\uff1a\u6700\u5c0f\n\n\u53c2\u65705\uff1a\u6700\u5927\n\n\u53c2\u65706\uff1a\u671f\u671b\u503c\n\n- \u4fee\u6539Aws asg\n\nupdateAwsASG(\"credential\", \"us-west-2\", \"asgName\", 1, 100, 50)\n\n- \u4fee\u6539\u963f\u91cc\u4e91 asg\n\nupdateAliASG(\"credential\", \"us-west-2\", \"asgName\", 1, 100, 50)\n\n- \u4fee\u6539 huawei asg\n\nupdateHwASG(\"credential\", \"us-west-2\", \"asgName\" ,1, 100, 50)\n\n**\u4f7f\u7528\u53c2\u6570\u6307\u5b9a\u4e91\u5546**\n\nupdateHwASG(\"credential\", \"aws\", \"us-west-2\", \"asgName\" ,1, 100, 50)"
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "b2cc14e3",
      "metadata": {
        "trusted": false
      },
      "outputs": [],
      "source": "updateAwsASG(\"credential\", \"us-west-2\", \"kmax-demo-asg-small\", 2, 2, 2)\nupdateAliASG(\"credential\", \"us-west-2\", \"kmax-demo-asg-small\", 2, 2, 2)\nupdateHwASG(\"credential\", \"us-west-2\", \"kmax-demo-asg-small\", 2, 2, 2)"
    },
    {
      "cell_type": "markdown",
      "id": "cef47fb1",
      "metadata": {},
      "source": "### \u9501\u5b9aASG\u5bb9\u91cf\n\n\u53c2\u65701\uff1a\u4e91\u5546credential \uff0c\u8bf7\u5148\u8bd5\u7528setCredential(name, key, value \u8bbe\u7f6e)\n\n\u53c2\u65702\uff1aregion\n\n\u53c2\u65703\uff1aasgName\n\n\u53c2\u65704\uff1a\u9501\u5b9a\u503c\n\n\u5982\u679c\u53c2\u65704\u9501\u5b9a\u503c\u5c0f\u4e8e1\uff0c\u5219\u6700\u5c0f\u503c\u4f1a\u88ab\u4fee\u6539\u4e3a\u5f53\u524d\u7684\u671f\u671b\u503c\n\u5982\u679c\u53c2\u65704\u5927\u4e8e\u6700\u5927\u503c\uff0c\u5219\u6700\u5927\u503c\u4f1a\u88ab\u4fee\u6539\u4e3a\u9501\u5b9a\u503c\n\u5982\u679c\u671f\u671b\u503c\u5c0f\u4e8e\u53c2\u65704\u9501\u5b9a\u503c\uff0c\u5219\u671f\u671b\u503c\u4fee\u6539\u4e3a\u6240\u5b9a\u503c\n\n- \u9501\u5b9aAws asg\n\nlockAwsASG(\"credential\", \"us-west-2\", \"asgName\", 10)\n\n- \u9501\u5b9aaliyun asg\n\nlockAliASG(\"credential\", \"us-west-2\", \"asgName\", 10)\n\n- \u9501\u5b9ahuawei asg\n\nlockHwASG(\"credential\", \"us-west-2\", \"asgName\", 10)"
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "e6ad340b",
      "metadata": {
        "trusted": false
      },
      "outputs": [],
      "source": "lockAwsASG(\"credential\", \"us-west-2\", \"asgName\", 10)\nlockAliASG(\"credential\", \"us-west-2\", \"asgName\", 10)\nlockHwASG(\"credential\", \"us-west-2\", \"asgName\", 10)"
    },
    {
      "cell_type": "markdown",
      "id": "7278f192",
      "metadata": {},
      "source": "## \u83b7\u53d6asg\n\u53c2\u65701\uff1a\u4e91\u5546credential \uff0c\u8bf7\u5148\u8bd5\u7528setCredential(name, key, value \u8bbe\u7f6e)\n\n\u53c2\u65702\uff1aregion\n\n\u53c2\u65703\uff1aasgName\n\n- \u83b7\u53d6Aws asg\u5217\u8868\n\ngetAwsASG(\"credential\", \"us-west-2\", \"asgName\")\n\n- \u83b7\u53d6\u963f\u91cc\u4e91 asg \u5217\u8868\n\ngetAliASG(\"credential\", \"us-west-2\", \"asgName\")\n\n- \u83b7\u53d6huawei asg \u5217\u8868\n\ngetHwASG(\"credential\", \"us-west-2\", \"asgName\")"
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "5ba1786d",
      "metadata": {
        "trusted": false
      },
      "outputs": [],
      "source": "getAwsASG(\"credential\", \"us-west-2\", \"asgName\")\ngetAliASG(\"credential\", \"us-west-2\", \"asgName\")\ngetHwASG(\"credential\", \"us-west-2\", \"asgName\")"
    },
    {
      "cell_type": "markdown",
      "id": "23f7bdc9",
      "metadata": {},
      "source": "# Bucket \u7ba1\u7406"
    },
    {
      "cell_type": "markdown",
      "id": "8b71d973",
      "metadata": {},
      "source": "## \u5217\u51faBucket\n\nlistBucket\n\n\u53c2\u65701\uff1acredential\n\n\u53c2\u65702\uff1a\u4e91\u5546provider\n\n\u53c2\u65703\uff1aendpoint(aliyun\u7684\u65f6\u5019\u5fc5\u4f20)\n\n- \u5217\u51faAws bucket\n\nlistBucket(\"credential\", \"aws\")\n\n- \u5217\u51faAliyun bucket\n\nlistBucket(\"credential\", \"aliyun\",  \"https://oss-cn-beijing.aliyuncs.com\")"
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "8beffac8",
      "metadata": {
        "trusted": false
      },
      "outputs": [],
      "source": "listBucket(\"credential\", \"aws\")\nlistBucket(\"credential\", \"aliyun\",  \"https://oss-cn-beijing.aliyuncs.com\")"
    },
    {
      "cell_type": "markdown",
      "id": "da6e44d7",
      "metadata": {},
      "source": "## \u521b\u5efa\u6587\u4ef6\u5939\nnewBucketDir\n\n\u53c2\u65701\uff1acredential\n\n\u53c2\u65702\uff1a\u4e91\u5546provider \uff08aws,aliyun\uff09\n\n\u53c2\u65703\uff1abucketName\n\n\u53c2\u65704\uff1adirName\n\n\u53c2\u65705\uff1aendpoint(aliyun\u7684\u65f6\u5019\u5fc5\u4f20)\n\n- aws \u6307\u5b9abucket\u4e0b\u521b\u5efa\u6587\u4ef6\n\nnewBucketDir(\"credential\", \"aws\", \"bucketName\", \"test_dirname\")\n\n- aliyun \u6307\u5b9abucket\u4e0b\u521b\u5efa\u6587\u4ef6\n\nnewBucketDir(\"credential\", \"aliyun\", \"bucketName\", \"test_dirname\", \"https://oss-cn-beijing.aliyuncs.com\")"
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "04142ce0",
      "metadata": {
        "trusted": false
      },
      "outputs": [],
      "source": "newBucketDir(\"credential\", \"aws\", \"bucketName\", \"test_dirname\")\nnewBucketDir(\"credential\", \"aliyun\", \"bucketName\", \"test_dirname\", \"https://oss-cn-beijing.aliyuncs.com\")"
    },
    {
      "cell_type": "markdown",
      "id": "ac1b5c5b",
      "metadata": {},
      "source": "## \u5217\u51faBucket \u4e2d\u7684\u6587\u4ef6\nlistBucketFile\n\n\u53c2\u65701\uff1acredential\n\n\u53c2\u65702\uff1a\u4e91\u5546provider\n\n\u53c2\u65703\uff1abucketName\n\n\u53c2\u65704\uff1a\u524d\u7f00 Prefix\n\n\u53c2\u65705\uff1aendpoint(aliyun\u7684\u65f6\u5019\u5fc5\u4f20)\n\n- \u5217\u51faaws \u6307\u5b9abucket \u4e0b\u7684\u6587\u4ef6\n\nlistBucketFile(\"credential\", \"aws\", \"bucketName\", \"test_dirname/\")\n\n- \u5217\u51faaliyun \u6307\u5b9abucket \u4e0b\u7684\u6587\u4ef6\n\nlistBucketFile(\"credential\", \"aliyun\", \"bucketName\", \"test_dirname/\", \"https://oss-cn-beijing.aliyuncs.com\")"
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "45aac048",
      "metadata": {
        "trusted": false
      },
      "outputs": [],
      "source": "listBucketFile(\"credential\", \"aws\", \"bucketName\", \"test_dirname/\")\nlistBucketFile(\"credential\", \"aliyun\", \"bucketName\", \"test_dirname/\", \"https://oss-cn-beijing.aliyuncs.com\")"
    }
  ];
  let temp = "";
  cells.map((item) => {
    temp += getSourceText(item)
      
  });
  console.log(temp);
}

convertIpynbToMarkdown();
