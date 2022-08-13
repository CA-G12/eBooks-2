const {
  homeHandler, landingHTMLHandler, landingHandler, booksHandler, notFoundHandler,
} = require('./handlers');

const router = (req, res) => {
  const endpoint = req.url;
  console.log(endpoint);

  if (endpoint === '/') {
    landingHTMLHandler(res);
  } else if (endpoint.includes('LandingPage')) {
    console.log('in Landing handler');
    landingHandler(endpoint, res);
  } else if (endpoint.includes('HomePage')) {
    console.log('in home handler');
    homeHandler(endpoint, res);
  } else if (endpoint === '/books') {
    console.log('in books handler');
    booksHandler(endpoint, res);
  } else {
    notFoundHandler(res);
  }
};
module.exports = router;
