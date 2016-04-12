#!/usr/bin/env node

process.env.DEBUG = '*';

const generator = require('sagitta').Bin.ormGenerator;

generator.run(require('path').join(__dirname, '../app/orm'), process.argv.slice(2));