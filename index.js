"use strict";

const libPath = require('path');

const Sagitta = require('sagitta');

const app = Sagitta.Instance.app;

app.init({
  cache: {
    host:   '127.0.0.1',
    port:   6379,
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
      memory: require('sails-memory')
    },
    connections: {
      default: {
        adapter: 'memory'
      }
    }
  },
  router: {
    path:   libPath.join(__dirname, 'app', 'api'),
    apiVer: '1.0'
  },
  template: {},
  app: {
    host:       '127.0.0.1',
    port:       3089,
    staticPath: libPath.join(__dirname, 'public')
  }
}).then(() => {
  app.start();
}).catch((err) => {
  console.log(err.stack);
});
