var http = require("http");
var url = process.argv[2];
var allData = "";

function collectData(data) {
  allData += data;
}
function callback(res) {
  res.setEncoding('utf8');
  res.on('data', collectData);
  res.on('end', function() {
    console.log(allData.length);
    console.log(allData);
  });
}
http.get(url, callback);
