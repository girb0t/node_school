var fs = require('fs');
var filePath = process.argv[2];
fs.readFile(filePath, function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString().split('\n').length - 1);
  }
});

