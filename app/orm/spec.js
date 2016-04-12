"use strict";

const OrmSpec = [
  {
    identity: 'user',
    connection: 'default',
    cacheKey: 'id',
    attributes: {
      id: {
        type: 'integer',
        primaryKey: true,
        autoIncrement: true
      },
      firstName: 'string',
      lastName: 'string'
    }
  },
  {
    identity: 'user-item',
    connection: 'default',
    cacheKey: 'userId',
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
  }
];


module.exports = OrmSpec;