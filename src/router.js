const homeHandler = require('./handlers/homeHandler');
const landingHTMLHandler = require('./handlers/landingHTMLHandler');
const landingHandler = require('./handlers/landingHandler');
const booksHandler = require('./handlers/booksHandler');

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

    //   booksHandler
  } else if (endpoint === '/search') {
    //   SearchHandler
  } else {
    //   notFoundHandler
  }
};
module.exports = router;
