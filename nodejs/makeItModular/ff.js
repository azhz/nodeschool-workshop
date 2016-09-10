// This module gives a filtered list of files based on file extension

var fs = require('fs');
var path = require('path');

var filter = function(dirName, ext, callback) {
    fs.readdir(dirName, function(err, data) {
        if(!err) {
            var extName = '.' + ext;
            var filteredFiles = [];
            for(var i = 0; i < data.length; i++) {
                if(path.extname(data[i]) === extName) {
                    filteredFiles.push(data[i]);
                }
            }
            callback(null, filteredFiles);
        } else {
            return callback(err);
        }
    });
};

module.exports = filter;
