const express = require("express");
const app = express();
const path = require("path");
const baseConfig = require("../config/index");
const studentsRouter = require("../resources/student/student.router");
const cors = require('cors');
const {json,urlencoded} = require("body-parser");

app.use(cors());
app.use(json());

app.use(express.static(path.resolve("public")));
app.use(express.static(path.resolve("views")));

app.get("/",(req,res) => {
  res.sendFile(path.resolve("public","students.xml"));
});

app.use("/students",studentsRouter);

app.use("*",(req,res) => {
  res.send("There is no such resource")
});

const port = process.env.PORT || baseConfig.port;
app.listen(port,() => console.log(`Listening on port ${port}`));