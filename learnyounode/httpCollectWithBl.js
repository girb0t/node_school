var http = require('http');
var bl = require('bl');
var url = process.argv[2];


http.get(url, function(res) {
  // res.setEncoding('utf8');
  res.pipe(bl(function(err, data) {
    if(!err) {
      var data = data.toString();
      console.log(data.length);
      console.log(data);
    }
  }))
})
