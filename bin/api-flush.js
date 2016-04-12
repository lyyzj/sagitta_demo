#!/usr/bin/env node

process.env.DEBUG = '*';

const generator = require('sagitta').Bin.apiGenerator;

generator.run(require('path').join(__dirname, '../app/api'), process.argv.slice(2));