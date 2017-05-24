var express = require('express');
var dns = require('dns');
var app = express();

const PORT = process.env.PORT || 3000;
console.log('Up on the port ' + PORT);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if (ip.substr(0, 7) == "::ffff:") {
    ip = ip.substr(7)
  }
  dns.reverse(req.connection.remoteAddress, function(err, domains) {
    res.send(JSON.stringify(domains));
  });
  var ret = {
    ipadress: ip,
    language: req.headers["accept-language"].split(",")[0].toLowerCase()
  };
  res.send(JSON.stringify(ret));
});

app.listen(PORT);