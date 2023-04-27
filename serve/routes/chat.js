var express = require("express");
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

module.exports = router;
