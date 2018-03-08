"use strict";

exports.__esModule = true;
exports.stateful = void 0;

var _hasStatefulSetup = require("./hasStatefulSetup");

var _componentClass = require("./componentClass");

var stateful = function stateful(name, setup, pure) {
  return (0, _hasStatefulSetup.hasStatefulSetup)(setup, pure) && (0, _componentClass.componentClass)(name, setup, pure);
};

exports.stateful = stateful;