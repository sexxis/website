const express = require('express');
const path = require('path');

const PORT = 4200;
const PATH = path.join(__dirname, '..', 'dist');
const BOOTSTRAP_PATH = path.join(
    __dirname, '..', 'node_modules', 'bootstrap', 'dist'
);

var app = express();

app.use('/static', express.static(PATH));
app.use('/bootstrap', express.static(BOOTSTRAP_PATH));

app.get('/', (req, res) => {
  res.sendFile(path.join(PATH, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
