"use strict";

const OrmSpec = [
  {
    name: 'user',
    cacheKey: 'id',
    schema: `{
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
    }`
  },
  {
    name: 'user-item',
    cacheKey: 'userId',
    schema: `{
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
    }`
  },
  {
    name: 'posts',
    cacheKey: 'id',
    schema: `{
        identity: 'posts',
        connection: 'mongo',
        attributes: {
          id: {
            type: 'string',
            primaryKey: true,
            unique: true,
            defaultsTo: function() {
              let uuid = require("uuid");
              return uuid.v4(); 
            }
          },
          title: {
            type: 'string',
            minLength: 5,
            maxLength: 20,
            required: true,
            notEmpty: true
          },
          content: 'string',
          postAt: {
            type: 'date',
            defaultsTo: function() {
              return new Date();
            },
            after: function() {
              return '2016-04-13'
            }
          }
        },
        autoPK: false,
        autoCreatedAt: false,
        afterCreate: function(values, cb) {
          console.log("after create");
          cb();
        },  
        testFunc: function() {
          console.log("print");
        }
    }`
  }
];


module.exports = OrmSpec;
