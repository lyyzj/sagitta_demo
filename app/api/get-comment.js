"use strict";

const joi         = require('sagitta').Utility.joi;
const joiValidate = require('sagitta').Utility.joiValidate;

class GetComment {

  constructor() {
    this.method = 'get';
    this.uri    = '/getComment/:id';
    this.type   = 'application/json; charset=utf-8';
    this.schema = joi.object().keys({
      id: joi.string().required()
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
  let id = this.params.id;
  let postsModel = require("../orm/posts-model");
  let json = null;
  try {
    json = yield postsModel.find(id, id);
  } catch (err) {
    json = err;
  }
  this.body = json;
}

const api = new GetComment();

module.exports = api;
