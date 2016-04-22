"use strict";

var request = require('sagitta').Utility.promisedRequest;
var _       = require('sagitta').Utility.underscore;

var SagittaClient = function() {};

function handleParams(uri, params, aggParams, requiredParams) {
  var data = {};

  // replace ":param" in uri
  aggParams.forEach(function(key, index) {
    var value = params[index];
    if (typeof value === 'undefined') {
      return;
    }
    if (_.indexOf(requiredParams, key) >= 0 && (value === '' || value === undefined)) {
      throw new Error('Param ' + key + ' is required!');
    }
    // if in uri
    if (uri.match(':' + key) !== null) {
      uri = uri.replace(':' + key, value);
    } else {
      data[key] = value;
    }
  });

  return { uri: uri, data: data };
}

SagittaClient.prototype.postComment = function(title, content) {
  var uri = '/postComment';
  var aggParams = ['title', 'content'];
  var requiredParams = ['title', 'content'];

  var data = null;
  try {
    data = handleParams(uri, arguments, aggParams, requiredParams)
  } catch (err) {
    return Promise.reject(err);
  }

  var url = 'http://127.0.0.1:3089/api/1.0' + data.uri;

  return request.postAsync({
    url: url,
    body: data.data,
    json: true,
    timeout: 5000
  });
};

SagittaClient.prototype.getComment = function(id) {
  var uri = '/getComment/:id';
  var aggParams = ['id'];
  var requiredParams = ['id'];

  var data = null;
  try {
    data = handleParams(uri, arguments, aggParams, requiredParams)
  } catch (err) {
    return Promise.reject(err);
  }

  var url = 'http://127.0.0.1:3089/api/1.0' + data.uri;
  return request.getAsync({
    url: url,
    timeout: 5000
  });
};

SagittaClient.prototype.putComment = function(id, title, content) {
  var uri = '/putComment/:id';
  var aggParams = ['id', 'title', 'content'];
  var requiredParams = ['id', 'title', 'content'];

  var data = null;
  try {
    data = handleParams(uri, arguments, aggParams, requiredParams)
  } catch (err) {
    return Promise.reject(err);
  }

  var url = 'http://127.0.0.1:3089/api/1.0' + data.uri;
  return request.putAsync({
    url: url,
    body: data.data,
    json: true,
    timeout: 5000
  });
};

SagittaClient.prototype.deleteComment = function(id) {
  var uri = '/deleteComment/:id';
  var aggParams = ['id'];
  var requiredParams = ['id'];

  var data = null;
  try {
    data = handleParams(uri, arguments, aggParams, requiredParams)
  } catch (err) {
    return Promise.reject(err);
  }

  var url = 'http://127.0.0.1:3089/api/1.0' + data.uri;
  return request.delAsync({
    url: url,
    timeout: 5000
  });
};

SagittaClient.prototype.patchComment = function(id, title, content) {
  var uri = '/patchComment/:id';
  var aggParams = ['id', 'title', 'content'];
  var requiredParams = ['id', 'title'];

  var data = null;
  try {
    data = handleParams(uri, arguments, aggParams, requiredParams)
  } catch (err) {
    return Promise.reject(err);
  }

  var formData = data.data;
  if (arguments.length == 2 && typeof arguments[1] === 'object') {
     formData = arguments[1];
  }

  var url = 'http://127.0.0.1:3089/api/1.0' + data.uri;
  return request.patchAsync({
    url: url,
    body: formData,
    json: true,
    timeout: 5000
  });
};

module.exports = new SagittaClient();