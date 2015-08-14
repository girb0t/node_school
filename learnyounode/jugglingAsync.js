var http = require('http');
var bl = require('bl');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var data1 = undefined;
var data2 = undefined;
var data3 = undefined;

function checkAllCallsComplete() {
  if(data1 && data2 && data3) {
    console.log(data1);
    console.log(data2);
    console.log(data3);
  }
}

http.get(url1, function(res) {
  res.pipe(bl(function(err, data) {
    if(err){
      console.log('Error: ' + err.message);
    } else {
      data1 = data.toString();
      checkAllCallsComplete();
    }
  }))
})

http.get(url2, function(res) {
  res.pipe(bl(function(err, data) {
    if(err){
      console.log('Error: ' + err.message);
    } else {
      data2 = data.toString();
      checkAllCallsComplete();
    }
  }))
})

http.get(url3, function(res) {
  res.pipe(bl(function(err, data) {
    if(err){
      console.log('Error: ' + err.message);
    } else {
      data3 = data.toString();
      checkAllCallsComplete();
    }
  }))
})
