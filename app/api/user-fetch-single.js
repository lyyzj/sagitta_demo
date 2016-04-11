"use strict";

const joi         = require('joi');
const joiValidate = require('sagitta').Utility.joiValidate;

class UserFetchSingle {

  constructor() {
    this.method = 'get';
    this.uri    = '/user/:id';
    this.type   = 'application/json; charset=utf-8';
    this.schema = joi.object().keys({
      id: joi.number().integer().required()
    });
  }

  register() {
    return [this.uri, validate, execute];
  }

}

function *validate(next) {
  let aggregatedParams = Object.assign({}, this.params, this.query, this.request.body);
  yield joiValidate(aggregatedParams, api.schema);
  yield next;
}

function *execute(next) {
  this.body = `GOT ID: ${this.params.id}`;
}

const api = new UserFetchSingle();

module.exports = api;