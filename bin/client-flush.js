#!/usr/bin/env node

process.env.DEBUG = '*';

const libPath = require('path');

const generator = require('sagitta').Bin.clientGenerator;

generator.run(libPath.join(__dirname, '../app/api'), libPath.join(__dirname, '../client'), {
  host: '127.0.0.1:3089',
  apiVer: '1.0'
});