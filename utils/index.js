const fs = require("fs");

module.exports = {
    writeToFile(path,document){
        fs.writeFile(path,document+"",function(err){
            if(err) throw new Error("Failed to write to file in path" + path);
            console.log("Wrote to the file successfuly")
        })
    }
}