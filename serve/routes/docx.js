const express = require("express");
const HTMLDocx = require("html-docx-js");
const fs = require("fs");
const bedrock = require("@aws-sdk/client-bedrock-runtime");
const credential = require("@aws-sdk/credential-provider-env");


var router = express.Router();

async function chatReplyCluade3Process(options) {
  const credentials = credential.fromEnv();
  const bedrock = new bedrock.BedrockRuntimeClient({
    region: "us-east-1",
    credentials,
  });

  const { prompt, history, systemMessage } = options;
  // const modelId = "anthropic.claude-3-sonnet-20240229-v1:0";
  const modelId = "anthropic.claude-3-haiku-20240307-v1:0";
  const contentType = "application/json";
  const accept = "application/json";

  const messages = [
    ...history,
    {
      role: "user",
      content: [
        {
          type: "text",
          text: prompt,
        },
      ],
    },
  ];

  const body = JSON.stringify({
    anthropic_version: "bedrock-2023-05-31",
    max_tokens: 2000,
    messages: messages,
    system: systemMessage,
  });

  const params = {
    modelId: modelId,
    body: body,
    contentType: contentType,
    accept: accept,
  };

  return new Promise((resolve, reject) => {
    const command = new bedrock.InvokeModelCommand(params);
    bedrock
      .send(command)
      .then((response) => {
        const textDecoder = new TextDecoder();
        const responseBodyString = textDecoder.decode(response.body);

        resolve(JSON.parse(responseBodyString).content[0].text);
      })
      .catch((error) => {
        reject({
          type: "Fail",
          err: error,
          message: error.message ?? "Please check the back-end console",
        });
      });
  });
}
router.post("/htmlToDocx", async function (req, res) {
  // 将 HTML 转换为 DOCX
  const response = await chatReplyCluade3Process({
    message: req.body.prompt,
    history: req.body.history,
    systemMessage: req.body.systemMessage,
  })
  console.log(response);
  const doc = HTMLDocx.asBlob(response);
  // 将 DOCX 文件写入磁盘
  fs.writeFileSync("output.docx", doc);
  res.send("success");
});

router.get("/htmlToDocxV2", function (req, res) {
  console.log(req.body);
  res.send();
});

module.exports = router;