/*
 * repl.js: Read-eval-print loop for the Isla language.
 *
 * (C) 2012, Charlie Robbins
 *
 */

var Interpreter = require('./interpreter');

//
// ### function Repl()
// Constructor function for the isla.js Interpreter which evaluates
// the parsed statements into a runtime.
//
var Repl = module.exports = function Repl() {
  this.started = false;
};

Repl.prototype.start = function () {
  
};

Repl.prototype.run = function (text) {
  console.log(this.interpreter.eval(text));
};