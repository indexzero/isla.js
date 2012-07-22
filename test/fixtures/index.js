/*
 * index.js: Top-level include for the isla.js test fixtures
 *
 * (C) 2012, Charlie Robbins
 *
 */

var fs = require('fs'),
    path = require('path'),
    lexemes = require('./lexemes');

//
// test/fixtures/isla/intro.is
//
exports['intro.is'] = {
  source:  fs.readFileSync(path.join(__dirname, 'isla', 'intro.is'), 'utf8'),
  lexemes: lexemes['intro.is']
};

//
// test/fixtures/isla/hallway.is
//
exports['hallway.is'] = {
  source:  fs.readFileSync(path.join(__dirname, 'isla', 'hallway.is'), 'utf8'),
  lexemes: lexemes['hallway.is']
};