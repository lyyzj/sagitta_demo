"use strict";

const OrmModel    = require('sagitta').Orm.OrmModel;

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

}

const model = new UserItemModel();

module.exports = model;