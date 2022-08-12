const http = require('http');
const router = require('./router');

const port = 3333;
const server = http.createServer(router);
server.listen(port, () => {
  console.log(
    `Server is listening on port ${port}.  Ready to accept requests!`,
  );
});
