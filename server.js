var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;
console.log('Up on the port ' + PORT);

app.get('/', function (req, res) {
  // get the ip 
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if (ip.substr(0, 7) == "::ffff:") {
    ip = ip.substr(7)
  }
 // get the software
 var regExp = /\(([^)]+)\)/;
 var matches = regExp.exec(req.headers['user-agent']);
 // create the object
 var ret = {
    ipadress: ip,
    language: req.headers["accept-language"].split(",")[0].toLowerCase(),
    software: matches[1]
  };
  res.send(JSON.stringify(ret));
});

app.listen(PORT);