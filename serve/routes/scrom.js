const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const ffmpeg = require("fluent-ffmpeg");
const Scorm2004 = require("scorm2004");

var router = express.Router();
// 设置上传目录和文件大小限制
const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 100 * 1024 * 1024 }, // 限制为100MB
});

/* GET home page. */
router.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const filePath = req.file.path;
  const fileNameWithoutExt = path.basename(
    req.file.originalname,
    path.extname(req.file.originalname)
  );
  const outputPath = `converted/${fileNameWithoutExt}.mp4`;

  ffmpeg(filePath)
    .output(outputPath)
    .on("end", () => {
      const scormConfig = {
        version: "2004",
        courseId: fileNameWithoutExt,
        title: fileNameWithoutExt,
        organization: "Example Organization",
        entryUrl: outputPath,
      };

      const scormOutputDir = "scorm-packages/";
      const scormOutputPath = path.join(scormOutputDir, `${fileNameWithoutExt}.zip`);

      const scorm = new Scorm2004(scormConfig);

      scorm.createPackage((err, result) => {
        if (err) {
          console.error("SCORM Package Error:", err);
          return res.status(500).send("SCORM Package Error");
        }

        fs.writeFileSync(scormOutputPath, result);
        res.json({ fileName: `${fileNameWithoutExt}.zip` });
      });
    })
    .on("error", (err) => {
      console.error("FFmpeg Error:", err);
      res.status(500).send("File Conversion Error");
    })
    .run();
});

// 下载SCORM课件
router.get("/download/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, "scorm-packages", fileName);

  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).send("File not found.");
  }
});

module.exports = router;
