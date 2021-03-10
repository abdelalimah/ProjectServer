// this part of the project is responsible for extracting data from the data base (which is the xml files in our case).
const path = require("path");
const fs = require("fs");
const XMLNode = require("./XMLNode").XMLNode;
const DOMParser = require("xmldom").DOMParser;

function getDocumentElement(xmlFileContent){
    let doc = new DOMParser().parseFromString(xmlFileContent+"",'text/xml');
    return doc.documentElement;
}

module.exports = {
    getStudents(cb){
        fs.readFile(path.resolve('db','students.xml'),function(err,data){
            let root = new XMLNode(getDocumentElement(data));
            let students = root.extractChildren();

            for (let index=0; index<students.length; index++) {
                if(students[index].getNodeName() == "student"){
                    console.log(students[index].node.nodeName);
                    students.push(students[index]);
                }
            }
            
            cb(students);
        });
    }
}