"use strict";

const OrmSpec = [
  {
    identity: 'user',
    connection: 'default',
    shardKey: 'id',
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
    shardKey: 'userId',
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