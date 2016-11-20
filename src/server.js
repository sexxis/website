'use strict';

const express = require('express');
const path = require('path');

const PORT = 4200;
const PATH = path.join(__dirname, '..', 'dist');

const app = express();

app.enable('trust proxy');

app.use('/static', express.static(PATH));

app.get('/', (req, res) => {
  res.sendFile(path.join(PATH, 'index.html'));
});

let i = 0;
app.get('/talks', (req, res) => {
  console.log(++i, new Date(), req.ip);
  res.redirect('https://docs.google.com/document/d/1TRr4wxsQMiL1ku8THGHOGjuUghSnLXEJlOPM05fQXs4/edit');
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
