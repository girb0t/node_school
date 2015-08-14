var net = require('net');
var port = process.argv[2];

function formatTime(unit) {
  if (unit < 10) {
    unit = '0' + unit;
  }
  return unit.toString();
}

function prettyDate() {
  var date = new Date(),
      year = date.getFullYear(),
      month = formatTime(date.getMonth() + 1),
      day = formatTime(date.getDate()),
      hours = formatTime(date.getHours()),
      minutes = formatTime(date.getMinutes());

  return (year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + '\n');
}

var server = net.createServer(function(socket) {
  socket.write(prettyDate());
  socket.end();
});

server.listen(port);
