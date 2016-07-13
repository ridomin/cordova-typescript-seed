var fs = require('fs')
var path = require('path')
var base64File = require('base64-file-coder-node')();
var DOMParser = require('xmldom').DOMParser
var XMLSerializer = require('xmldom').XMLSerializer


function replaceB64(doc, elName, attrName, prefix){
    var links = doc.getElementsByTagName(elName)
    for (var l in links) {
        var current = links[l]
        var linkAtts = current.attributes
        for (var a in linkAtts) {          
            var la =  linkAtts[a]
            if (la.name===attrName){
                console.log(la.name)
                base64File.encode(la.value, function (error, base64) {
                    if (!error) {
                        //console.log(base64)
                        la.value = prefix + base64
                        console.log(la.value)
                        
                        var serializer = new XMLSerializer()
                        var raw = serializer.serializeToString(doc)
                        //console.log(raw)
                        saveDoc(raw)
                    } else {
                        console.error(error)
                    }
                });        
            }    
        }
    }
}

function saveDoc(d){
   
    fs.writeFile('startmin.html', d, 'utf8', function (err, data) {
      if (err) return console.log(err)
    })
}

fs.readFile('start.html', 'utf8', function (err, data) {
    if (err) {
      console.error(err)
      return
    }

    var doc = new DOMParser().parseFromString(data)    
    replaceB64(doc, "link", "href", "data:text/css;base64,")
    replaceB64(doc, "script", "src", "data:text/javascript;base64,")

    
})



