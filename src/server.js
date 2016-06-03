var express = require('express');
var path = require('path');

var PORT = 4200;

var app = express();

app.use('/static', express.static(path.join(__dirname, '..', 'dist')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, function () {
  console.log('Server running on ' + PORT);
});
