const express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/process", async (req, res, next) => {
  console.log(req.body);
  res.setHeader("Content-type", "application/octet-stream");
  res.write(JSON.stringify({ test: "test0" }));
  res.write(JSON.stringify({ test: "test1" }));
  const handle = (num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        res.write(JSON.stringify({ test: `test${num}` }));
        resolve(num);
      }, 1000);
    });
  };
  await handle(2);
  await handle(3);
  await handle(4);
  res.send();
});

router.get("/stream", function (req, res) {
  // 设置 Content-Type 为 text/event-stream
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  // 向客户端发送数据
  setInterval(function () {
    var data = new Date().toLocaleTimeString();
    res.write("data: " + data + "\n\n");
  }, 1000);
});

module.exports = router;
