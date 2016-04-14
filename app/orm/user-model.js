"use strict";

const OrmModel = require('sagitta').Orm.OrmModel;

class UserModel extends OrmModel {

  constructor() {
    this.name        = 'user';
    this.cacheKey    = 'id';
    this.schema      = {
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
    };
  }
  
  afterCreate(createdValues, next) {
    OrmModel.removeCacheAfterRecordChanged('user', 'id', createdValues, next);
  }

  afterUpdate(updatedRecord, next) {
    OrmModel.removeCacheAfterRecordChanged('user', 'id', updatedRecord, next);
  }

  afterDestroy(deletedRecord, next) {
    OrmModel.removeCacheAfterRecordChanged('user', 'id', deletedRecord, next);
  }

}

const model = new UserModel();

module.exports = model;