const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, ".." , "my-app/build")));
console.log(path.join(__dirname, ".." , "my-app/build"));
app.use(express.static("public"));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "my-app/build", "index.html"));
  });

app.listen(5000, () => {
    console.log("server started on port 5000");
  });