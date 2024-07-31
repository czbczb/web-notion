const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const ffmpeg = require("fluent-ffmpeg");
const scormPackager = require("simple-scorm-packager");

const router = express.Router();

// 设置上传目录和文件大小限制
const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 100 * 1024 * 1024 }, // 限制为100MB
});

// 创建输出目录函数
const ensureDirectoryExists = (directory) => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
};

/* POST 上传文件 */
router.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("没有上传文件。");
  }

  const filePath = req.file.path;
  const fileNameWithoutExt = path.basename(
    req.file.originalname,
    path.extname(req.file.originalname)
  );

  const sourceOutputDir = path.join(__dirname, "convertedSource");
  ensureDirectoryExists(sourceOutputDir);

  const outputPath = path.join(sourceOutputDir, `${fileNameWithoutExt}.mp4`);

  ffmpeg(filePath)
    .output(outputPath)
    .on("end", () => {
      const scormOutputDir = path.join(__dirname, "scorm-packages");
      ensureDirectoryExists(scormOutputDir);
      const packageVersion = "1.0.0";
      const dateTimestamp = new Date().getTime();

      const scormConfig = {
        version: "2004.3",
        organization: "东指科技",
        title: fileNameWithoutExt,
        // identifier: "00",

        language: "zh-CN",
        masteryScore: 80, // 掌握分数
        startingPage: `index.html`,
        source: sourceOutputDir, // 确保是字符串路径, // 包含课程文件的目录
        package: {
          version: packageVersion,
          name: fileNameWithoutExt,
          zip: true,
          date: dateTimestamp,
          outputFolder: scormOutputDir,
          author: "zongbao.cui",
          description: "A test of the course packaging module",
          keywords: ["scorm", "test", "course"],
          rights: `©${new Date().getFullYear()} My dongzhi Company. All right reserved.`,
          vcard: {
            author: "zongbao cui",
            org: "东指科技",
            tel: "13581711930",
            address: "西安高新三期",
            mail: "czb2402@163.com",
            url: "https://mydomain.com",
          },
        },
      };

      // 创建 SCORM 包
      scormPackager(scormConfig, (msg) => {
        if (msg === "Done") {
          const zipFileName = `${fileNameWithoutExt.replace(
            " ",
            ""
          )}_v${packageVersion}_${dateTimestamp}.zip`;

          res.json({
            fileName: zipFileName,
          });
        } else {
          res.json({
            message: msg,
          });
        }
      });
    })
    .on("error", (err) => {
      console.error("FFmpeg 错误:", err);
      res.status(500).send("文件转换错误");
    })
    .run();
});

// 下载 SCORM 课件
router.get("/download/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, "scorm-packages", fileName);

  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).send("文件未找到。");
  }
});

module.exports = router;
