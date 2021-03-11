const {getDocumentElement} = require("../index");
const fs = require("fs");
const path = require("path");
const basePath = path.resolve("db","students.xml");

module.exports = {
    updateStudent(student,cb){
        fs.readFile(basePath,(err,data) => {
            if(!err){
                const {root,document} = getDocumentElement(data);
                const nodeToUpdate = root.extractChildById(student.id);
                const name = nodeToUpdate.extractChildByName("name");
                const nickname = nodeToUpdate.extractChildByName("nickname");
                const age = nodeToUpdate.extractChildByName("age");
                name.changeContent(student.name);
                nickname.changeContent(student.nickname);
                age.changeContent(student.age);

                cb(document);
                return;
            }

            throw new Error("XML file reading error");
        });
    }
}