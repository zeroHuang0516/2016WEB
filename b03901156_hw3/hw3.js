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

//  return userID
app.get('/api/users/:id', function (req, res) {
  var _id = req.params.id;
  if(_id === '1') {
    res.json({
      id: parseInt(_id),
      name: 'Joe',
      age: 18,
    });
  }
  else if (_id === '2') {
    res.json({
      id: parseInt(_id),
      name: 'John',
      age: 22,
    });
  }
});

//  post
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/api/body', function (req, res) {
  res.send(JSON.stringify(req.body));
});

//  picture read
app.use(express.static(__dirname + '/public'));