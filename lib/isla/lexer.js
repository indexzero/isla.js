/*
 * lexer.js: Lexer responsible for generating lexemes for the Isla.js interpreter
 *
 * (C) 2012, Charlie Robbins
 *
 */

//
// ### function Lexer()
// Constructor function for the isla.js Lexer which transforms
// raw source code text into lexemes.
//
var Lexer = module.exports = function Lexer() {
  this.lexemes = [];
};

//
// @matchers {Object}
// Set of regular expressions representing the 
// tokens the Lexer outputs.
//
Lexer.matchers = Lexer.prototype.matchers = {
  type: {
    integer: /^([1-9][0-9]*)/,
    string: /^'([A-Za-z0-9 \.,\\]+)'/,
    bool: /^(true|false)/
    room: /^room/,
    list: /^list/
  },
  op: {
    add: /^add\s/,
    create: /^is\sa\s/,
    assign: /^is\s/,
    member: /^has\s/,
    remove: /^remove\s/
  },
  fn: {
    write: /^write\s/
  },
  'var': {
    declare: /^([A-Za-z]+)\s/,
    use: /([A-Za-z]+)$/
  } 
};

//
// ### function lex (source)
// #### @source {string} Isla source code
// 
// Returns the set of lexemes which represent the `source`.
//
Lexer.prototype.lex = function (source) {
  if (!source) {
    throw new Error('Cannot lex null or undefined.');
  }
  
  source = source.replace(/(\r|\s+$)/g, '');
  this.source = source;                  // Source code we are attempting to lex
  this.lineNum = 0;                      // Line number of the lexing operation
  this.indents = 0;                      // Number of indents
  this.tokens = [];                      // Stream of parsed tokens in the form ['TYPE', value, line]
  this.lines = this.source.split('\n');  // Split the source code by \n since we have no multi-line statements
  
  while (this.lines.length > 0) {
    this.i = 0;                          // Current character position in this line
    this.line = this.lines.shift();      // Get the next line
    
    while (this.i < this.line.length) {
      this.chunk = this.line.slice(this.i);
      this.extractNextToken();
    }
    
    this.newlineToken();
    this.lineNum++;
  }
  
  this.token('EOF', 'EOF');
  return this.tokens;
};

//
// ### function extractNextToken () 
//
// Emits the next lexeme token from the current source. The
// following precedence is used when extracting lexemes:
//
// 1. Operators
// 2. Built-in functions
// 3. Variables
// 4. Type literals
//
Lexer.prototype.extractNextToken = function () {
  var tokens = ['op', 'fn', 'var', 'type'],
      index;
  
  for (index = 0; index < tokens.length; index++) {
    if (this.matcherToken.call(this, tokens[index])) {
      return;
    }
  }
};

//
// ### function matcherToken (matcher)
// #### @matcher {string} Group of regexp matchers to attempt to match against.
//
// Attempts to emit a token for the specified group of regular
// expressions, `matcher`. e.g.
//
//    this.matcherToken('op')
//    this.matcherToken('fn')
//    this.matcherToken('var')
//    this.matcherToken('type')
//
Lexer.prototype.matcherToken = function (matcher) {
  var match,
      token;
  
  for (token in this.matchers[matcher]) {
    if (!(match = this.match(this.matchers[matcher][token]))) {
      continue;
    }
    
    //
    // By convention all of the regular expressions used in the 
    // isla.js lexer only have one capture group, so `match` will
    // always be in one of two forms:
    //
    // 1. Has a capture group: 
    //    ['name ', 'name', index: 0, input: 'name is \'Isla\'']
    // 2. Has no capture group:
    //    ['is ', index: 0, input: 'is \'Isla\'']
    //
    this.i += match[0].length;
    
    this.token(
      matcher.toUpperCase(), 
      token, 
      match[1] || match[0].trim()
    );
    
    return true;
  }
  
  return false;
};

//
// ### function newlineToken ()
// 
// Attempts to emit a newline token if the last
// token is not already a newline token. This strips
// excessive whitespace from Isla source code.
//
Lexer.prototype.newlineToken = function() {
  if (this.tag() !== 'EOL') {
    this.token('EOL', "\n");
  }
  return true;
},

//
// ### token (group, tag, value) 
// #### @group {string} Group the token belongs to: op, fn, var, type
// #### @tag {string} Tag associated with this token
// #### @value {string} **Optional** Value associated with this token
//
// Emits a token for the specified `group`, `tag`, and `value`.
//
Lexer.prototype.token = function(group, tag, value) {
  var token = [group, tag, value, this.lineNum];
  return this.tokens.push(token);
};

//
// ### function prev (index)
// #### @index {number} Distance to go back in lexemes.
//
// Returns the previous token in the current set
// of lexemes.
//
Lexer.prototype.prev = function(index) {
  return this.tokens[this.tokens.length - (index || 1)];
};

//
// ### function tag (index, newTag)
// #### @index  {number} Distance to go back in lexemes.
// #### @newTag {string} **Optional** New tag to assign to the lexeme.
//
// Returns the tag of the lexeme at `index`. If a `newTag` is supplied,
// then that lexeme is re-tagged.
//
Lexer.prototype.tag = function(index, newTag) {
  var tok;
  if (!(tok = this.prev(index))) {
    return null;
  }
  
  if (typeof newTag !== "undefined" && newTag !== null) {
    return (tok[0] = newTag);
  }
  
  return tok[0];
};

//
// ### function match (regex, index) 
// #### @regex {RegExp} Regular expression to match
// #### @index {number} Match in regex to return
//
// Attempts to match the `regex` against the current
// Isla source code chunk, `this.chunk`, and then
// returns the match or the capture group at `index`.
//
Lexer.prototype.match = function(regex, index) {
  var m;
  if (!(m = this.chunk.match(regex))) {
    return false;
  }
  
  if (!m) {
    return false;
  }
  
  return index ? m[index] : m;
};