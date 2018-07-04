'use strict'
class Twitter {
  constructor (chave, chave_segredo, token, token_segredo) {
    this.chave = chave;
    this.chaveSegredo = chave_segredo;
    this.token = token;
    this.tokenSegredo = token_segredo;
  }

  search (queryString, callback) {
    this.authorization_request_data = {
      method: 'GET',
      uri: 'https://api.twitter.com/1.1/statuses/user_timeline.json?q='+queryString,
      oauth: {
          consumer_key: this.chave,
          consumer_secret: this.chave_segredo,
          token: this.token,
          token_secret: this.token_segredo
      }
    }
    callback
  }

  listTweetsByUsername (userName, callback) {
    this.authorization_request_data = {
      method: 'GET',
      uri: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name='+userName,
      oauth: {
          consumer_key: this.chave,
          consumer_secret: this.chave_segredo,
          token: this.token,
          token_secret: this.token_segredo
      }
    }
    callback
  }
}
module.exports = Twitter
