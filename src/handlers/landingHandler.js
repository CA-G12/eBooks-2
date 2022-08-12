const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

const landingHandler = (req, res) => {
  const extension = path.extname(req);
  const filePath = path.join(__dirname, '..', '..', req);
  console.log(filePath);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(`error in accessing homepage${extension}${err}`);
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1>Server Error</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': mime.lookup(extension) });
      res.end(data);
    }
  });
};
module.exports = landingHandler;
