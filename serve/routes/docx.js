const express = require("express");
const HTMLDocx = require("html-docx-js");
const fs = require("fs");
const { chatReplyCluade3Process } = require('../components/cluade3');

var router = express.Router();

router.post("/htmlToDocx", async function (req, res) {
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

router.get("/htmlToDocxV2", function (req, res) {
  console.log(req.body);
  res.send();
});

module.exports = router;