/*
 * lexer-test.js: Tests for the isla.js lexer.
 *
 * (C) 2012, Charlie Robbins
 *
 */
 
var assert = require('assert'),
    vows = require('vows'),
    fixtures = require('./fixtures'),
    isla = require('../lib/isla');
    
//
// Helper function for lexing a given source string and
// then asserting all lexemes are equal.
//
function assertLexed(file) {
  return {
    topic: function (lexer) {
      return lexer.lex(fixtures[file].source);
    },
    "should return the correct lexemes": function (lexemes) {
      var expected = fixtures[file].lexemes;
      
      assert.equal(lexemes.length, expected.length);
      
      for (var i = 0; i < lexemes.length; i++) {
        assert.deepEqual(lexemes[i], expected[i]);
      }
    }
  };
}

vows.describe('isla.js/lexer').addBatch({
  "With the isla.js Lexer": {
    topic: new isla.Lexer(),
    "intro.is": assertLexed('intro.is'),
    "hallway.is": assertLexed('hallway.is')
  }
}).export(module);