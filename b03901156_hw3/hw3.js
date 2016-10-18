const bodyParser = require('body-parser');
const fs = require('fs');
const express = require('express');
const app = express();

//  return html
app.get('/', function (req, res) {
  const output = ('<h1>­º­¶</h1>');
  fs.writeFile('./index.html', 'utf8', output, (err) => {
    if (err) throw err;
  });
});

