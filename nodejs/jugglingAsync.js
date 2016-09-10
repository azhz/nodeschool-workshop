var http = require('http');

var url1 = process.argv[2],
    url2 = process.argv[3],
    url3 = process.argv[4];

var response = '';

http.get(url1, url1Callback);

function url1Callback(res) {
    res.on('data', function(data) {
        response += data.toString();
    });

    res.on('end', function() {
        response += '\n';
        http.get(url2, url2Callback);
    });
}

function url2Callback(res) {
    res.on('data', function(data) {
        response += data.toString();
    });

    res.on('end', function() {
        response += '\n';
        http.get(url3, url3Callback);
    });
}

function url3Callback(res) {
    res.on('data', function(data) {
        response += data.toString();
    });

    res.on('end', function() {
        console.log(response);
    });
}
