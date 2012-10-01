/*
 * interpreter.js: Interpreter responsible for interpreting Isla AST at runtime.
 *
 * (C) 2012, Charlie Robbins
 *
 */

//
// ### function Interpreter()
// Constructor function for the isla.js Interpreter which evaluates
// the parsed statements into a runtime.
//
var Interpreter = module.exports = function Interpreter() {
  this.runtime = {
    vars: {},
    types: {}
  };
};

Interpreter.prototype.ops = {
  add: function (stmt, runtime) {
    if (stmt.lvalue.type !== 'list') {
      throw new TypeError(stmt.lvalue.name + ' is not a list.');
    }
    else if (!runtime.vars[stmt.lvalue.name]) {
      throw new Error(stmt.lvalue.name + ' is not defined.');
    }
    else if (!runtime.vars[stmt.rvalue.name]) {
      throw new Error(stmt.rvalue.name + ' is not defined.');
    }
   
    //
    // Remark: How do we represent literals vs. variable refs?
    //
    runtime.vars[stmt.lvalue.name].value.push()
  },
  create: function (stmt) {
    
  },
  assign: function (stmt) {
    
  },
  member: function (stmt) {
    
  },
  remove: function (stmt) {
    
  }
};

Interpreter.fns = Interpreter.prototype.fns = {
  write: function (stmt, runtime) {
    
  }
};