const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
const { spawn } = require("child_process");

// 设置参数
const text = "这是要转换成视频的文本。";
const font = "30px Arial";
const canvasWidth = 640;
const canvasHeight = 480;
const fps = 25;
const durationInSeconds = 10;

async function run() {
  // 创建画布并写入文本
  const canvas = createCanvas(canvasWidth, canvasHeight);
  const ctx = canvas.getContext("2d");
  ctx.font = font;
  ctx.fillText(text, 50, 50);

  // 获取帧数
  const totalFrames = Math.ceil(durationInSeconds * fps);

  // 计算每个帧之间的时间间隔
  const frameDuration = 1 / fps;

  // 预加载字体和背景图片，加快生成速度
  await Promise.all([loadImage("background.jpg"), loadFont(font)]);

  // 创建视频编码器
  const ffmpegProcess = spawn(
    "ffmpeg",
    [
      "-y",
      "-f",
      "image2pipe",
      "-r",
      String(fps),
      "-i",
      "pipe:0",
      "-c:v",
      "libx264",
      "-pix_fmt",
      "yuv420p",
      "-r",
      String(fps),
      "-t",
      String(durationInSeconds),
      "-vf",
      `scale=${canvasWidth}:${canvasHeight}`,
      "output.mp4",
    ],
    {
      stdio: ["pipe", process.stdout, process.stderr],
    }
  );

  // 写入帧数据到编码器
  for (let i = 0; i < totalFrames; i++) {
    // 使用预先加载的字体绘制文本
    ctx.drawImage(
      await loadImage("background.jpg"),
      0,
      0,
      canvasWidth,
      canvasHeight
    );
    ctx.fillText(text, 50, 50);

    // 将画布上传到编码器
    const canvasStream = canvas.createPNGStream();
    canvasStream.on("data", function (chunk) {
      ffmpegProcess.stdin.write(chunk);
    });
    await new Promise((resolve) => {
      canvasStream.on("end", resolve);
    });
    await new Promise((resolve) => setTimeout(resolve, frameDuration * 1000));
  }

  // 结束视频编码
  ffmpegProcess.stdin.end();

  // 完成后清理临时文件
  ffmpegProcess.on("close", function () {
    console.log("Done.");
  });
}

// 加载自定义字体
function loadFont(font) {
  return new Promise((resolve, reject) => {
    try {
      const Canvas = require("canvas-prebuilt");
      const Font = Canvas.Font;
      const path = require("path");
      const fontPath = path.resolve(__dirname, "fonts", `${font}.ttf`);
      const fontFile = fs.readFileSync(fontPath);
      const customFont = new Font(font, fontFile);
      customFont.addFace(fontFile, 0);
      resolve(true);
    } catch (e) {
      reject(e);
    }
  });
}

run();
