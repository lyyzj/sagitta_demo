"use strict";

const joi = require('joi');

const ApiSpec = [
  {
    name:   'post-comment',
    method: 'post',
    uri:    '/postComment',
    schema: `joi.object().keys({
      title: joi.string().required(),
      content: joi.string().required()
    })`
  },
  {
    name:   'get-comment',
    method: 'get',
    uri:    '/getComment/:id',
    schema: `joi.object().keys({
      id: joi.string().required()
    })`
  },
  {
    name:   'put-comment',
    method: 'put',
    uri:    '/putComment/:id',
    schema: `joi.object().keys({
      id: joi.string().required(),
      title: joi.string().required(),
      content: joi.string().required()
    })`
  },
  {
    name:   'delete-comment',
    method: 'delete',
    uri:    '/deleteComment/:id',
    schema: `joi.object().keys({
      id: joi.string().required()
    })`
  },
  {
    name:   'patch-comment',
    method: 'patch',
    uri:    '/patchComment/:id',
    schema: `joi.object().keys({
      id: joi.string().required(),
      title: joi.string().min(4).max(10).required(),
      content: joi.string().length(20)
    })`
  },
];


module.exports = ApiSpec;
