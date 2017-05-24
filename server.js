/* const http = require('http');
const os = require('os');

const PORT = process.env.PORT || 3000;
console.log('Up on the port '+PORT);


const server = http.createServer((req, res) => {

  // IP Adress looking for
  console.log(req.headers["x-forwarded-for"]);
  var language = req.headers["accept-language"].split(",")[0];
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write("language:"+language+"\n");
  res.end();
}).listen(PORT);

*/
var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;
console.log('Up on the port '+PORT); 

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  var ret = {
     ipadress: req.ip,
     language: req.headers["accept-language"].split(",")[0].toLowerCase()
  };
  res.send(JSON.stringify(ret));
});

app.listen(PORT);