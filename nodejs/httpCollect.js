var http = require('http');

http.get(process.argv[2], function(res) {
    var body = '';
    res.on('data', function(data) {
        body += data.toString();
    });
    res.on('end', function() {
        console.log(body.length);
        console.log(body);
    });
});
