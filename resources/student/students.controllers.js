const {updateStudent} = require("../../dao/students/index");
const Student = require("./student.model");
const {writeToFile } = require("../../utils/index");
const path = require("path");
const basePath = path.resolve("db","students.xml");

module.exports = {
    updateStudent(req,res){
        const id = req.body.id;
        const name = req.body.name;
        const nickname = req.body.nickname;
        const age = req.body.age;
        updateStudent(new Student(id,name,nickname,age),function(newDocument){
            // console.log("i got the new document"+newDocument+"");
            writeToFile(basePath,newDocument);
            res.send("Got it");
        });
    }
}