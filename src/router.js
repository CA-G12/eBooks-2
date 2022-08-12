const router = (req, res) => {
  const endpoint = req.url;
  console.log(endpoint);

  if (endpoint === '/') {
    //   landingHandler
  } else if (endpoint.includes('public')) {
    console.log('in public handler');
    //   homeHandler
  } else if (endpoint === '/books') {
    //   booksHandler
  } else if (endpoint === '/search') {
    //   SearchHandler
  } else {
    //   notFoundHandler
  }
};
module.exports = router;
