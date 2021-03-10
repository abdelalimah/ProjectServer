const express = require("express");
const app = express();
const path = require("path");
const baseConfig = require("../config/index");
const dao = require("../dao/index");
const studentsRouter = require("./students/index");

app.use(express.static(path.resolve("public")));
app.use(express.static(path.resolve("views")));

app.get("/",(req,res) => {
  res.sendFile(path.resolve("public","index.xml"));
});

app.use("/students",studentsRouter);
app.use("/students/student/:id",studentsRouter);

app.use("*",(req,res) => {
  res.send("There is no such resource")
});

const port = process.env.PORT || baseConfig.port;
app.listen(port,() => console.log(`Listening on port ${port}`));