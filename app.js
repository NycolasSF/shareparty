var request = require('request');
var bodyParser = require('body-parser');


/* Access Information Twitter */
var consumer_secret = 'Ms5aIq7lZGbUQXtvkaaImRPgdkSdXN9Lp43XRrkLYEJ5hsRmME';
var consumer_key = '87Kw2R4B5CZzERMOo5LLZZpgL';

var consumer_secret_encode = encodeURI(consumer_secret);
var consumer_key_encode = encodeURI(consumer_key);

var bearer_token = new Buffer(consumer_key_encode+':'+consumer_secret_encode).toString('base64');


function read_twitter_search_response(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info);
  }
}

/* Access Request to get Bearer Token */
var authorization_request_data = {
  method: 'POST',
  uri: 'https://api.twitter.com/oauth2/token',
  headers: {
    Authorization: 'Basic ' +bearer_token
  }
}

request(request_info, (error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    request(
      {uri: 'https://api.twitter.com/1.1/search/tweets.json?q=%23SaveLucifer',
        headers: {
          Authorization: 'Bearer ' +info.access_token
        }
      }, read_twitter_search_response);
  }
}).form({grant_type:'client_credentials'});
