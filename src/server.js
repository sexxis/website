var express = require('express');
var path = require('path');

var PORT = 4200;
var PATH = path.join(__dirname, '..', 'dist');

var app = express();

app.use('/static', express.static(PATH);

app.get('/', function (req, res) {
  res.sendFile(path.join(PATH 'index.html'));
});

app.listen(PORT, function () {
  console.log('Server running on ' + PORT);
});
