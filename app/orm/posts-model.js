"use strict";

const OrmModel = require('sagitta').Orm.OrmModel;

class PostsModel extends OrmModel {

  constructor() {
    super();
    this.name        = 'posts';
    this.cacheKey    = 'id';
    this.schema      = {
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
    };
  }
  
  afterCreate(createdValues, next) {
    OrmModel.removeCacheAfterRecordChanged('posts', 'id', createdValues, next);
  }

  afterUpdate(updatedRecord, next) {
    OrmModel.removeCacheAfterRecordChanged('posts', 'id', updatedRecord, next);
  }

  afterDestroy(deletedRecord, next) {
    OrmModel.removeCacheAfterRecordChanged('posts', 'id', deletedRecord, next);
  }

}

const model = new PostsModel();

module.exports = model;