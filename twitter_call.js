var request = require('request');
var bodyParser = require('body-parser');


/* Access Information Twitter */
var consumer_secret = '6GIj9vTWPg1Jx9pyjArdJ1nu5rYlpY6brTBkjn7JyJlPxAVK9d';
  var consumer_key = 'ZmjDGiFp4nCG5SjrwT4XffCKx';

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

request(authorization_request_data, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    request(
      {uri: 'https://api.twitter.com/1.1/search/tweets.json?q=%23MadMax',
        headers: {
          Authorization: 'Bearer ' +info.access_token
        }
      }, read_twitter_search_response);
  }
}).form({grant_type:'client_credentials'});
