var net = require('net');

var server = net.createServer(function(socket) {
    var cDate = new Date();
    var data = cDate.getFullYear() + '-' +
        addZero(cDate.getMonth() + 1) + '-' +
        addZero(cDate.getDate()) + ' ' +
        addZero(cDate.getHours()) + ':' +
        addZero(cDate.getMinutes()) + '\n';
    socket.write(data);
    socket.end();
});

server.listen(process.argv[2]);

function addZero(num) {
    if(parseInt(num) > 9) return num;
    return '0' + num;
}
