const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/are-ui'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/are-ui/index.html'));
});
app.all('/*', function (req, res, next) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendFile('index.html', {
    root: __dirname
  });
});

app.listen(process.env.PORT || 5000);
