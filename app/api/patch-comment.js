"use strict";

const joi         = require('sagitta').Utility.joi;
const joiValidate = require('sagitta').Utility.joiValidate;

class PatchComment {

  constructor() {
    this.method = 'patch';
    this.uri    = '/patchComment/:id';
    this.type   = 'application/json; charset=utf-8';
    this.schema = joi.object().keys({
      id: joi.string().required(),
      title: joi.string().min(4).max(10).required(),
      content: joi.string().length(20)
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
  let data = this.request.body;
  let id = this.params.id;
  let posts = require("../orm/posts-model").instance;
  let json = null;
  try {
      json = yield posts.update(id, data);
  } catch (err) {
      json = err;
  }
  this.body = json;
}

const api = new PatchComment();

module.exports = api;
