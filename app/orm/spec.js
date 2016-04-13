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
  }
];


module.exports = OrmSpec;