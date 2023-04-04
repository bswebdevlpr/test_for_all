const fs = require("fs");
const express = require("express");
const app = express();

app.use("/uploads", express.static("./uploads"));

app.get("/", (req, res) => {
  res.json({ msg: "express test" });
});

app.get("/test", (req, res) => {
  res.json({ msg: "TEST URL" });
});

// app.use("/uploads", (req, res) => {
//   fs.readFile(`./uploads${req.path}`, (err, data) => {
//     if (err) {
//       res.send({
//         readFileUrl: `./uploads${req.path}`,
//         path: req.path,
//         url: req.url,
//         originalUrl: req.originalUrl,
//         headersHost: req.headers.host,
//         err,
//       });
//     }
//     res.send(data);
//   });
// });

app.listen(3000, () => {
  console.log(`Server Listening on 3000`);
});
