var request = require('request');

var Twitter = require('./Twitter');

var t = new Twitter('FwFoQ7yR3mXoQBWaz8vYwTQYj', 'f1ocbHacdaWJfRL53zHlgVS1xblxwtuHXCMeJFCNhD0yJ6Dg7y','971745506367102976-Xh6VoCepWvbgzSAJ9YVLFZgXbehjXFH','CnePNTvwfPGYm22nzwpPCSP6p97F4ye8issMXuqhI3kCA');

t.search('Teste', function(error, response, body) {
	console.log('foi');
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(body);
  } else {
      console.log(error);
  }
});
console.log(t.authorization_request_data)
request(t.authorization_request_data);
