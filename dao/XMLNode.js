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

    extractAttribute(name){
        let attr = this.node.getAttribute(name);
        if(attr != null){
            return attr;
        }
        return null;
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
        this.node.firstChild.nodeValue = newContent;
    }

    getNodeName(){
        return this.node.nodeName;
    }

    getNodeValue(){
        return this.node.firstChild.nodeValue;
    }

    setDocument(doc){
        this.doc = doc;
    }

    getDocument(){
        return this.doc;
    }
}

module.exports.XMLNode = XMLNode;