var http = require('http');
var url = process.argv[2];

function callback(response) {
  response.setEncoding('utf8');
  response.on('data', handleData);
}

function handleData(data) {
  console.log(data);
}

http.get(url, callback);

