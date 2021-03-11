// this part of the project is responsible for extracting data from the data base (which is the xml files in our case).
const XMLNode = require("./XMLNode").XMLNode;
const DOMParser = require("xmldom").DOMParser;

function getDocumentElement(xmlFileContent){
    let doc = new DOMParser().parseFromString(xmlFileContent+"",'text/xml');
    return {root: new XMLNode(doc.documentElement,doc)};
}

module.exports = {getDocumentElement};