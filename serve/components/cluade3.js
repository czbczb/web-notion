const {
  BedrockRuntimeClient,
  InvokeModelCommand,
} = require("@aws-sdk/client-bedrock-runtime");
const { fromEnv } = require("@aws-sdk/credential-provider-env");

const credentials = fromEnv();
const bedrock = new BedrockRuntimeClient({
  region: "us-east-1",
  credentials,
});

async function chatReplyCluade3Process(options) {
  const { prompt, history, systemMessage } = options;
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
    max_tokens: 20000,
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
    const command = new InvokeModelCommand(params);
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

module.exports = { chatReplyCluade3Process };
