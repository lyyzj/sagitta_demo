"use strict";

var request = require('sagitta').Utility.promisedRequest;
var SagittaClient = function() {};

SagittaClient.prototype.userFetchSingle = function(id) {
  var uri = '/user/:id';
  var aggParams = ['id'];
  aggParams.forEach(function(key, index) {
    var value = arguments[index];
    if (typeof value !== 'undefined') {
      uri = uri.replace(':' + key, value);
    }
  });
  var url = 'http://127.0.0.1:3089/api/1.0' + uri;
  return request.getAsync({
    url: url,
    timeout: 5000
  });
};

module.exports = new SagittaClient();