const express = require("express");
const HTMLDocx = require("html-docx-js");
const fs = require("fs");
const { exec } = require('child_process');

const { chatReplyCluade3Process } = require('../components/cluade3');

var router = express.Router();

router.post("/translateHtml", async function (req, res) {
  // 将 HTML 转换为 DOCX
  const response = await chatReplyCluade3Process({
    prompt: req.body.prompt,
    history: req.body.history,
    systemMessage: req.body.systemMessage,
  }).catch((error) => {
    console.log(error);
  });

  // const doc = HTMLDocx.asBlob(response);
  // // 将 DOCX 文件写入磁盘
  // fs.writeFileSync("output.docx", doc);
  res.send({
    data: response,
  });
});

router.post("/saveHtmlToDocx", function (req, res) {
  const doc = HTMLDocx.asBlob(req.body.html);
  // 将 DOCX 文件写入磁盘
  fs.writeFileSync("output.docx", doc);
  res.send({
    data: null,
    message: 'success'
  });
});

router.get("/nommoth", function (req, res) {

  // 使用 Pandoc 转换 HTML 到 DOCX
  const htmlFilePath = 'temp.html'
exec(`pandoc ${htmlFilePath} -o output1.docx`, (error, stdout, stderr) => {
  if (error) {
      console.error(`Error: ${error.message}`);
      return;
  }
  if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
  }
  console.log(`Stdout: ${stdout}`);
});
  res.send({
    data: null,
    message: 'success'
  });
});

module.exports = router;