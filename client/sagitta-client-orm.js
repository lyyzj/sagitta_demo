"use strict";

var joiValidate     = require('sagitta').Utility.joiValidate;
var waterlineToJoi  = require('sagitta').Utility.waterlineToJoi;

var Validator = function() {
  this.schema = {
    'user': waterlineToJoi({
      identity: 'user',
      connection: 'default',
      attributes: {
        id: {
          type: 'integer',
          primaryKey: true,
          autoIncrement: true
        },
        firstName: 'string',
        lastName: 'string'
      }
    }),
    'user-item': waterlineToJoi({
      identity: 'user-item',
      connection: 'default',
      attributes: {
        itemId: {
          type: 'integer',
          primaryKey: true,
          autoIncrement: true
        },
        userId: {
          type: 'integer'
        }
      }
    }),
  };
};

Validator.prototype.validate = function(name, obj) {
  if (!this.schema.hasOwnProperty(name)) {
    throw new Error('Unknown model name: ' + name);
  }
  return joiValidate(obj, this.schema[name]);
};

module.exports = new Validator();