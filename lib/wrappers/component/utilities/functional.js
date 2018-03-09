"use strict";

exports.__esModule = true;
exports.functional = void 0;

var functional = function functional(name, component) {
  var c = component({});
  c.displayName = name;
  return c;
};

exports.functional = functional;