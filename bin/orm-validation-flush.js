#!/usr/bin/env node

process.env.DEBUG = '*';

const libPath = require('path');

const generator = require('sagitta').Bin.ormValidationGenerator;

generator.run(libPath.join(__dirname, '../app/orm'), libPath.join(__dirname, '../client'));