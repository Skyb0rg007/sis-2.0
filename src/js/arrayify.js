

module.exports = arrayify;

function arrayify (dictObj) {
    var values = Object.values(dictObj)
    var new_obj = {"courses": values }
    var catalog = JSON.stringify(new_obj)
    var fs = require('fs');
    fs.writeFile("catalog.json", catalog, function(err) 
        {if (err) return console.error(err);});

}

