class XMLNode {

    constructor(node){
        this.node = node;
    }
    
    extractChildren(){
        
        let nodeListe = this.node.childNodes;
        let result = [];
        for(let i =0;i < nodeListe.length; i++){
            if(nodeListe[i].nodeType == 1){
                result.push(new XMLNode(nodeListe[i]));
            }
        }

        return result;
    }

    getNodeName(){
        return this.node.nodeName;
    }
}

module.exports.XMLNode = XMLNode;