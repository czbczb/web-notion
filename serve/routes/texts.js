const express = require("express");
const { spawn } = require("child_process");
const path = require("path");
const { Buffer } = require('buffer');
var request = require('request');
const fs = require('fs');
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
  }).catch((err) => {
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

router.get('/testUrl', function (req, res, next) {
  var find_link = function (link, collback) {

    var f = function (link) {
      var options = {
        url: link,
        followRedirect: false,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept-Charset': 'UTF-8;',
          'User-Agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9.2.8) Firefox/3.6.8',
        }
      }

      request(options, function (error, response, body) {
        console.log(response.statusCode);
        if (response.statusCode == 301 || response.statusCode == 302) {
          var location = response.headers.location;
          console.log('location: ' + location);
          f(location);
        } else {
          collback(link);
        }
      })
    }

    f(link);
  }

  find_link("https://alidocs.dingtalk.com/core/api/resources/img/5eecdaf48460cde51600ba23323ecf71c5bbf0d65fb42b63596bf165a99da72501ef4d921a0d25fc65a117e9692870641dbb3b498f28ce60728ab55250dbd565747fad13c75f7af3ebecd74aed7ec017090a1e078894fc82f39f100446eb8627?tmpCode=41bb2016-5998-4c40-9247-683a65361498", function (link) {
    console.log(link);
    downloadImg(link)
    res.send(link);
  });
})

function downloadImg(url, path ='./image.jpg') {
  request(url)
    .pipe(fs.createWriteStream(path))
    .on('finish', () => {
      console.log('图片下载成功');
    });
}

module.exports = router;
