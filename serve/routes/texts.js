const express = require("express");
const { spawn } = require("child_process");
const path = require("path");
const { Buffer } = require('buffer');
const { log } = require("console");

var router = express.Router();

/**
 * 将文本转换为视频
 * @param {*} textContent 要转换的文本内容
 * @param {*} outputPath 输出视频文件的路径
 */
async function textToVideo(textContent, outputPath) {
  // 将 Python 脚本放到单独的文件中
  const pythonScriptPath = path.resolve(__dirname, "textToVideo.py");
  return new Promise((resolve, reject) => {
    // 创建 Python 子进程
    // which paython3 的路径
    const paythonPath = "/usr/local/bin/python3";
    const pythonProcess = spawn(paythonPath, [
      pythonScriptPath,
      textContent,
      outputPath,
    ]);

    let stdoutChunks = [];
    let stderrChunks = [];

    // 注册 stdout 的 data 事件
    pythonProcess.stdout.on("data", (data) => {
      stdoutChunks.push(data);
    });

    // 注册 stderr 的 data 事件
    pythonProcess.stderr.on("data", (data) => {
      console.log(data)
      stderrChunks.push(data);
    });

    // 注册 close 事件
    pythonProcess.on("close", (code) => {
      if (code === 0) {
        const stdout = Buffer.concat(stdoutChunks).toString();
        console.log(`[${pythonScriptPath}] stdout: ${stdout}`);

        resolve(outputPath);
      } else {
        const stderr = Buffer.concat(stderrChunks).toString();
        console.error(`[${pythonScriptPath}] stderr: ${stderr}`);

        reject(new Error(`Python process exited with code ${code}`));
      }
    });
  }).catch((err)=> {
    Promise.reject(err)
  });
}
/* GET users listing. */
router.get("/textToVideo", async (req, res, next) => {
  // console.log(req.params) // 获取路由id,此时路由为/textToVideo/:id
  // console.log(req.query) // 获取?id=1
  try {
    const textContent = "Hello, world!";
    const outputPath = path.resolve(__dirname, "hello.mp4");
    console.log(`outputPath ${outputPath}`);

    const result = await textToVideo(textContent, outputPath);

    console.log(`Output file saved to ${result}`);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
