"use strict";

const OrmModel    = require('sagitta').Orm.OrmModel;

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

}

const model = new UserModel();

module.exports = model;