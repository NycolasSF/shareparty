var Twiter = require('./Twitter');

var t = new Twitter('','','','');

t.search('Teste', function(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(body);
  } else {
      console.log(error);
  }
});
