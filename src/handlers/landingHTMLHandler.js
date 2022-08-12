const fs = require('fs');
const path = require('path');

const landingHTMLHandler = (res) => {
  const filePath = path.join(__dirname, '..', '..', 'index.html');
  console.log('file path issssssssssss', filePath)
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1>Server Error</h1>');
    } else {
      console.log(data); 
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
};
module.exports = landingHTMLHandler;
