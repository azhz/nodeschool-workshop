var ff = require('./ff');

ff(process.argv[2], process.argv[3], function(err, data) {
    if(err) throw err;
    data.forEach(function(fileName) {
        console.log(fileName);
    });
});
