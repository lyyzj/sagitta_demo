"use strict";

const libPath = require('path');

const Sagitta = require('sagitta');

const fsp = require('fs-promise');

const app = Sagitta.Instance.app;

const databaseCfg = fsp.readJsonSync(libPath.join('config/database.json'));

app.init({
  cache: {
    host:   '127.0.0.1',
    port:   6370,
    family: 4,
    db:     0
  },
  config: { path: libPath.join(__dirname, 'config') },
  logger: {
    level:      'verbose',
    path:       libPath.join(__dirname, 'log', 'sagitta_demo.log'),
    timestamp:  true,
    showLevel:  true,
    maxsize:    1024 * 1024, // 1m
    maxFiles:   1000,
    json:       true,
    tailable:   true
  },
  orm: {
    path: libPath.join(__dirname, 'app', 'orm'),
    adapters: {
      memory: require('sails-memory'),
      mongodb: require('sails-mongo')
    },
    connections: {
      default: {
        adapter: 'memory'
      },
      mongo: databaseCfg.mongo
    }
  },
  router: {
    path:   libPath.join(__dirname, 'app', 'api'),
    apiVer: '1.0'
  },
  template: {},
  app: {
    host:       '0.0.0.0',
    port:       3089,
    staticPath: libPath.join(__dirname, 'public')
  }
}).then(() => {
  app.start();
  app.logger.info('Server started ...');
}).catch((err) => {
  console.log(err.stack);
});
