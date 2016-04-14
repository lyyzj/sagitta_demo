"use strict";

const OrmModel = require('sagitta').Orm.OrmModel;

class UserItemModel extends OrmModel {

  constructor() {
    this.name        = 'user-item';
    this.cacheKey    = 'userId';
    this.schema      = {
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
    };
  }
  
  afterCreate(createdValues, next) {
    OrmModel.removeCacheAfterRecordChanged('user-item', 'userId', createdValues, next);
  }

  afterUpdate(updatedRecord, next) {
    OrmModel.removeCacheAfterRecordChanged('user-item', 'userId', updatedRecord, next);
  }

  afterDestroy(deletedRecord, next) {
    OrmModel.removeCacheAfterRecordChanged('user-item', 'userId', deletedRecord, next);
  }

}

const model = new UserItemModel();

module.exports = model;