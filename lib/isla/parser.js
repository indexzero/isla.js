/*
 * parser.js: Parser responsible for generating ASTs for the Isla.js interpreter
 *
 * (C) 2012, Charlie Robbins
 *
 */

var Lexer = require('./lexer');

//
// ### function Parser()
// Constructor function for the isla.js Parser which transforms
// the lexemes stream into statements.
//
var Parser = module.exports = function Parser() {
  this.statements = [];
  this.tuples = [];
};

Parser.prototype.parse = function (source) {
  //
  // Transform the source code into Lexemes
  //
  this.lexemes = (new Lexer()).lex(source);
  
  //
  // Then transform the Lexemes into Tuples separated by
  // EOL tokens.
  //
  var cur = 0;
  while (this.lexemes.length) {
    if (this.lexemes[cur][0] === 'EOF') {
      break;
    }
    if (this.lexemes[cur][0] === 'EOL') {
      this.tuples.push(this.lexemes.slice(0, cur - 1));
      this.lexemes.shift();
      cur = 0
    }
    else {
      cur++;
    }
  }
  
  //
  // Evaluate tuples for correctness and transform them into 
  // statements with proper lvalue and rvalue components.
  //
  // Valid Tuples:
  // * VAR OP TYPE
  // * VAR OP VAR
  // * FN VAR
  // * FN TYPE
  // * VAR VAR OP TYPE
  // * VAR VAR OP VAR
  //
  this.tuples.forEach(function (tuple) {
    
  });
};

// Parser.prototype.states = {
//   VAR: {
//     
//   },
//   OP: {
//     
//   },
//   
//   TYPE: {
//     
//   },
//   
//   FN: {
//     
//   },
//   
//   EOL: {
//     transitions: {
//       VAR: {
//         
//       },
//       TYPE: {
//         
//       },
//       FN: {
//         
//       },
//       EOF: {
//         
//       }
//     }
//   },
//   
//   EOF: {
//     /* Empty */
//   }
// }
