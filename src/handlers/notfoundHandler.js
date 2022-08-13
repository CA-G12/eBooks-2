const notFoundHandler = (res) => {
  res.writeHead(400, { 'Content-Type': 'text/html' });
  res.write('unknown uri');
  res.end();
};
module.exports = notFoundHandler;
