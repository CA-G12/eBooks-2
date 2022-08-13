const http = require('http');
require('dotenv').config();

const hostname = process.env.HOSTNAME || 'localhost0';
const port = process.env.PORT || 4000;
const router = require('./router');

const server = http.createServer(router);
server.listen(port, hostname, () => {
  console.log(
    `Server is listening on port ${port}.  Ready to accept requests!`,
  );
});
