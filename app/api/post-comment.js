"use strict";

const joi         = require('sagitta').Utility.joi;
const joiValidate = require('sagitta').Utility.joiValidate;

class PostComment {

  constructor() {
    this.method = 'post';
    this.uri    = '/postComment';
    this.type   = 'application/json; charset=utf-8';
    this.schema = joi.object().keys({
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
  try{
    yield joiValidate(aggregatedParams, api.schema, { allowUnknown: true });
    yield next;
  }catch(err) {
    this.body = err.details[0].message;
  }
}

function *execute(next) {
  let waterline_joi = require("waterline-joi");
  let data = {title:this.request.body.title,content:this.request.body.content || 'default content'};
  let postModel = require("../orm/posts-model");
  let posts = postModel.instance;
  let json = null;
  try{
      /*
      let joi_schema = waterline_joi(postModel.schema.attributes);
      yield joiValidate(data, joi_schema, { allowUnknown: true });
      */
      json = yield posts.create(data);
  } catch(err) {
      json = err;
  }
  this.body = json;
}

const api = new PostComment();

module.exports = api;
