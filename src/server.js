const http = require('http'); // pull in http module
// url module for parsing url string
const url = require('url');
// querystring module for parsing querystrings from url
const query = require('querystring');
// pull in our custom files
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

// handle POST requests
const urlStruct = {
    '/': htmlHandler.getIndex,
    '/style.css': htmlHandler.getCss,
    '/success': jsonHandler.success,
    '/badRequest': jsonHandler.badRequest,
    'unauthorized': jsonHandler.unauthorized,
    '/forbidden': jsonHandler.forbidden,
    '/internal': jsonHandler.internal,
    '/notImplemented': jsonHandler.notImplement,
    notFound: jsonHandler.notFound,
};

const onRequest = (request, response) => {
  // parse url into individual parts
  // returns an object of url parts by name
  const parsedUrl = url.parse(request.url);

  // check if method was POST, otherwise assume GET
  // for the sake of this example
  if (request.method === 'POST') {
    handlePost(request, response, parsedUrl);
  } else {
    handleGet(request, response, parsedUrl);
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
