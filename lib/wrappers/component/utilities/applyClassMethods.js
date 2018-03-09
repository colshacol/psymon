"use strict";

exports.__esModule = true;
exports.applyClassMethods = void 0;

var _entriesOf = require("./entriesOf");

var applyClassMethods = function applyClassMethods(self) {
  return function (setup) {
    return (0, _entriesOf.entriesOf)([setup.methods, setup.lifecycle]).map(function (method) {
      self[method[0]] = method[1](self);
    });
  };
};

exports.applyClassMethods = applyClassMethods;