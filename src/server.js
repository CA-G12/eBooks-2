const http = require('http');

const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 8080;
const router = require('./router');

const server = http.createServer(router);
server.listen(port, hostname, () => {
  console.log(
    `Server is listening on port ${port}.  Ready to accept requests!`,
  );
});
