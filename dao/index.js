const {addStudent,updateStudent,removeStudent} = require("./students");
const XMLNode = require("./XMLNode").XMLNode;
const DOMParser = require("xmldom").DOMParser;
const path = require("path");
const basePath = path.resolve("db","index.xml");
const fs = require("fs");

function getDocumentElement(xmlFileContent){
    let doc = new DOMParser().parseFromString(xmlFileContent+"",'text/xml');
    let root = doc.documentElement;
    root.setDocument(doc);
    return root;
}

module.exports = {
    updateStudent(student,cb){
        fs.readFile(basePath,function(err,data){
            const root = new XMLNode(getDocumentElement(data));
            let branches = root.extractChildren();
            
            for (let i = 0; i < branches.length; i++) {
                console.log(branches[i]);
            }
            
        })
        return;
    }
}