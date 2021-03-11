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

    extractChildByName(name){
        let nodeListe = this.node.childNodes;
        for(let i =0;i < nodeListe.length; i++){
            if(nodeListe[i].nodeType == 1 && nodeListe[i].nodeName == name){
                return new XMLNode(nodeListe[i]);
            }
        }
    }
    extractChildById(id){
        let nodeListe = this.node.childNodes;
        for(let i =0;i < nodeListe.length; i++){
            if(nodeListe[i].nodeType == 1 && nodeListe[i].getAttribute("id") == id){
                return new XMLNode(nodeListe[i]);
            }
        }
    }

    changeContent(newContent){
        console.log("the new content is the following : "+newContent);
        this.node.firstChild.nodeValue = newContent;
        console.log(this.node.firstChild.nodeValue);
    }

    getDocument(){
        return this.getDocument();
    }

    getNodeName(){
        return this.node.nodeName;
    }
}

module.exports.XMLNode = XMLNode;