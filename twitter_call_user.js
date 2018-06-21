//twitter_call_user.js

var request = require('request');
var access_token = '';
var access_token_secret = '';
var consumer_key = '';
var consumer_secret = '';

var authorization_request_data = {
  method: 'GET',
  uri: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=Guilhermim6 ',
  oauth: {
      consumer_key: consumer_key,
      consumer_secret: consumer_secret,
      token: access_token,
      token_secret: access_token_secret
    }
}

function read_twitter_search_response(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info);
  }
}

request(authorization_request_data, read_twitter_search_response);
