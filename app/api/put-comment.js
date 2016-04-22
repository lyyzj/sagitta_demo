"use strict";

const joi         = require('sagitta').Utility.joi;
const joiValidate = require('sagitta').Utility.joiValidate;

class PutComment {

  constructor() {
    this.method = 'put';
    this.uri    = '/putComment/:id';
    this.type   = 'application/json; charset=utf-8';
    this.schema = joi.object().keys({
      id: joi.string().required(),
      title: joi.string().required(),
      content: joi.string().required()
    });
  }

  register() {
    return [this.uri, validate, execute];
  }

}

function *validate(next) {
  let aggregatedParams = Object.assign({}, this.params, this.query, this.request.body);
  yield joiValidate(aggregatedParams, api.schema, { allowUnknown: true });
  yield next;
}

function *execute(next) {
  let data = {title:this.request.body.title, content:this.request.body.content};
  let id = this.params.id;
  let posts = require("../orm/posts-model").instance;
  let json = null;
  try{
      json = yield posts.update(id, data);
  } catch(err) {
      json = err;
  }
  this.body = json;
}

const api = new PutComment();

module.exports = api;
