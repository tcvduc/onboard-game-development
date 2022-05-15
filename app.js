const express = require("express");
const path = require("path");
const open = require("open");

const app = express();
const port = process.env.port || 1212;
const host = `http://localhost:${port}`;

app.use("/assets", express.static(path.resolve(__dirname, "./assets")));
app.use(
  "/distributable",
  express.static(path.resolve(__dirname, "./distributable"))
);

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./index.html"));
});

app.listen(port, function () {
  console.log(`Game server is started at ${host}`);
});
