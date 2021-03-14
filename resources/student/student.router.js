const express = require("express");
const router = express.Router();
const path = require("path");
const {updateStudent,addStudent,deleteStudent,searchStudent} = require("./students.controllers.js");

router.get("/",(req,res) => {
    res.sendFile(path.resolve("db","students.xml"));
  })
  .get("/:slug",(req,res) => {
    res.send(req.params.slug+" "+req.query.search_by);
  })
  .put("/:cne",updateStudent)
  .post("/",addStudent)
  .delete("/:cne",deleteStudent)

module.exports = router
