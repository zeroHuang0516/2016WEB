const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//  return html
app.get('/', function (req, res) {
  res.send('<h1>����</h1>');
});

//  return x,y
app.get('/api/query', function (req, res) {
  res.json(req.query);
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
app.use('/public', express.static(`${__dirname}/public`));
//  error
app.use(function (req, res, next) {
  res.status(404).send('404 status');
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
