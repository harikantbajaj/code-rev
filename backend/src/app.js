const express = require('express');
const airoutes = require('./routes/ai.routes'); 



const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');

});

module.exports = app;
