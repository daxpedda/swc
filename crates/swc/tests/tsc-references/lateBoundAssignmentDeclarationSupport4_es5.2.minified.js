var _sym = Symbol(), _str = "my-fake-sym";
function F() {}
F.prototype[_sym] = "ok", F.prototype[_str] = "ok";
var inst = new F();
inst[_str], inst[_sym], module.exports.F = F, module.exports.S = _sym;
var x = require("./lateBoundAssignmentDeclarationSupport4.js"), inst = new x.F();
inst["my-fake-sym"], inst[x.S];
