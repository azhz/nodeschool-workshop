var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, data) {
    if(!err) {
        var extName = '.' + process.argv[3];
        for(var i = 0; i < data.length; i++) {
            if(path.extname(data[i]) === extName) {
                console.log(data[i]);
            }
        }
    } else {
        console.log(err);
    }
});
