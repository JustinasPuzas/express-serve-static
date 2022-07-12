const path = require("path");
const express = require("express");
const app = express();
const config = require("./config");

app.use(express.static(path.join(__dirname, "..", `${config.PATH}`, "build")));
console.log(path.join(__dirname, "..", `${config.PATH}`, "/build"));
app.use(express.static("public"));

app.use(async (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "..", `${config.PATH}`, "build", "index.html")
  );
});

app.listen(config.PORT, () => {
  console.log(`server started on port ${config.PORT}`);
});
