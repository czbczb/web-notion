const express = require("express");
const { spawn } = require("child_process");
const path = require("path");
const { Buffer } = require("buffer");
var request = require("request");
const fs = require("fs");
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
      console.log(data);
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
    Promise.reject(err);
  });
}
/* GET users listingtextToVideo. */
router.get("/", async (req, res, next) => {
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

router.get("/testUrl", function (req, res, next) {
  var find_link = function (link, collback) {
    var f = function (link) {
      var options = {
        url: link,
        followRedirect: false,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept-Charset": "UTF-8;",
          "User-Agent":
            "Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9.2.8) Firefox/3.6.8",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          "Accept-Language": "zh-CN,zh;q=0.9",
          Cookie:
            "cna=A5hsHVCUBDkCAW/L7VI8XLBD; account=oauth_k1%3AX2XiXU3klqiBUgYkeWS9lH9Fo6heglm27it0D1jZ%2BWNUhHT5n7A4OPRVH8Sf48cf5PYMUNnt3BZRe16t6rPD%2F5kEF2cEsnEOJQjT0DcXzAE%3D; deviceid=0c0dd99734ff4dc0ad9cde5edad26108; pub_uid=wufHhMBg42fExWXv1h22kg%3D%3D; XSRF-TOKEN=a4be2c92-842e-4707-8b46-f735b61d740a; ding_doc_unified_login=true; tfstk=fUPoAjXv5mt6Wz8dqSc5d8RwqmXYP3GQTkdKvXnF3mofPXeRAkm38mFLyyF-8XqbVvP-wzEctmzE4eMILrF3aV0rYBkPLpzQG3uFUzEHHogtNU9ITvm4FlrndaiKYDqL88QA61U7PXGUxGCO6hqagQFoYHheVkZn5GIO6sU7PXGFXJF0wDhmRmurzLRPoxuK0BRUY0k20V0sTDrETZ0q-23yYQRe0juez9REjWPbggVhLo_x91IXzYiaz0z8ySz2Xczz4BRE04DlSzoDTBP03n0G2cfD0mUU5Jk0t_O-OregxJrV8Bo33VqiWuC2ZXy4m5DalGASq-r7tbH1te00IrruZXXMPqFuu5M3NgAqqoa4BbNNcBqakPFShWjM0Dw-5juunwJq4vSyPKJNSRdIuwF2dpMrlqm6B4N4V9465W7cod6SUqgRXWQDLCMrl45OoZv68YujyGC..; isg=BAkJXx16iz9Li3WpsS03CzW1GDNjVv2IDKdKlKt-n_Av8ikE86YJWFkhNFbEnpXA",
          Priority: "u=0, i",
          "Sec-Ch-Ua":
            '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          "Sec-Ch-Ua-Mobile": "?0",

          "Sec-Ch-Ua-Platform": "macOS",
          "Sec-Fetch-Dest": "document",

          "Sec-Fetch-Mode": "navigate",

          "Sec-Fetch-Site": "none",

          "Sec-Fetch-User": "?1",

          "Upgrade-Insecure-Requests": 1,
        },
      };

      request(options, function (error, response, body) {
        console.log(response.statusCode);
        if (response.statusCode == 301 || response.statusCode == 302) {
          var location = response.headers.location;
          console.log("headers: " + JSON.stringify(response.headers));
          console.log("location: " + location);
          console.log(body);
          f(location);
        } else {
          collback(link);
        }
      });
    };

    f(link);
  };

  const link =
    "https://alidocs.dingtalk.com/core/api/resources/img/5eecdaf48460cde550abb3a7cd99f1d0483c1b00da3e91ef596bf165a99da72501ef4d921a0d25fc65a117e9692870640fffdcb56606a2a6e76cb28e5408b514ea0ad5e90f24812a98ceb272bd899417574582e222c9a1bc9508fd59fedd0e8f?tmpCode=82817398-e66d-4bac-9940-5af5b7cb1ce0";

  const redirectLink =
    "https://alidocs2.oss-cn-zhangjiakou.aliyuncs.com/res/mPdnp8dYEjBpnw98/img/decd092c-ee6e-4f02-8c46-26a620df68b4.png?Expires=1720438971&OSSAccessKeyId=LTAI1XUz8ModxrPd&Signature=3fcuoGBRiuEzHZzz99Zvvd%2B2dRg%3D&";
  find_link(link, function (link) {
    console.log(link);
    downloadImg(link);
    res.send(link);
  });
});

function downloadImg(url, path = "./image.jpg") {
  request(url)
    .pipe(fs.createWriteStream(path))
    .on("finish", () => {
      console.log("图片下载成功");
    });
}

module.exports = router;
