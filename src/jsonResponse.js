import { type } from "os";

// Note this object is purely in memory
// When node shuts down this will be cleared.
// Same when your heroku app shuts down from inactivity
// We will be working with databases in the next few weeks.
const users = {};

// function to respond with a json object
// takes request, response, status code and object to send
const respondJSON = (request, response, status, object, types) => {
  response.writeHead(status, { 'Content-Type': type });
  response.write(JSON.stringify(object));
  response.end();
};

// function to respond without json body
// takes request, response and status code
// const respondJSONMeta = (request, response, status) => {
//   response.writeHead(status, { 'Content-Type': 'application/json' });
//   response.end();
// };

// successful response
const success = (request, response, types) => {
  const responseJSON = {
    message: 'This ia a successful response',
  };

  respondJSON(request, response, 200, responseJSON, types);
};

// bad response
const badRequest = (request, response, types) => {
  const responseJSON = {
    message: 'This is a bad request',
  };
  W
  if (!types.valid) {
    responseJSON.id = 'badRequest';
    
    return respondJSON(request, response, 400, responseJSON);
  }
}

// unauthorized response
const unauthorized = (request, response, types, params) => {
    const respondJSON = {
        message:'This is an unauthorized response',
    };
    //no params
    if(params == false){
        respondJSON.id = 'unauthorized';
        return respondJSON(request, response, 200, responseJSON);        
        
    }
}

//forbidden
const forbidden = (request, response, types) => {
    const respondJSON = {
        message:'You do not have access to this',
        id:'forbidden',
    };
    return respondJSON(request, response, 403, responseJSON);
}

//internal
const internal = (request, response, types) => {
    const respondJSON = {
        message:'Internal Server error',
        id:'internalError',
    };
    return respondJSON(request, response, 500, responseJSON);
}


// no implemented response
const notImplemented = (request, response, types) => {
    const respondJSON = {
        message:'The request has not been implemented yet.',
        id:'notImplement',
    };
    return respondJSON(request, response, 501, responseJSON);
}
 
//not found response
const notFound = (request, response, types) => {
    const respondJSON = {
        message:'The page you are looking for was not found',
        id:'notFound',
    };
    return respondJSON(request, response, 404, responseJSON);
}


// public exports
module.exports = {
  success,
  badRequest,
  unauthorized,
  forbidden,
  internal,
  notImplemented,
  notFound,
};
