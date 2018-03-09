"use strict";

exports.__esModule = true;
exports.functional = void 0;

var functional = function functional(name, component) {
  component.displayName = name;
  return component;
};

exports.functional = functional;