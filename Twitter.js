'use strict'
class Twitter {
  constructor (chave, chave_segredo, token, token_segredo) {
    this.chave = chave;
    this.chaveSegredo = chave_segredo;
    this.token = token;
    this.tokenSegredo = token_segredo;
  }

  search (queryString, callback) {

  }

  listTweetsByUsername (userName, callback) {

  }
}
module.exports = Twitter
