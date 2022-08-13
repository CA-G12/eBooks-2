const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

const booksHandler = (req, res) => {
  const jsonPoint = `${req}.json`;
  const jsonPath = path.join(__dirname, '..', jsonPoint);

  fs.readFile(jsonPath, (err, data) => {
    if (err) {
      console.log(err);
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1>Server Error</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': mime.lookup('.json') });
      res.end(data);
    }
  });
};
module.exports = booksHandler;
