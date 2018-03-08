"use strict";

exports.__esModule = true;
exports.component = void 0;

var _functional = require("./utilities/functional");

var _stateful = require("./utilities/stateful");

var defaultSetup = {
  component: null,
  lifecycle: {},
  methods: {},
  state: {}
};

var component = function component(name, setup, pure) {
  if (setup === void 0) {
    setup = defaultSetup;
  }

  if (pure === void 0) {
    pure = false;
  }

  return (0, _stateful.stateful)(name, setup, pure) || (0, _functional.functional)(name, setup.component);
};

exports.component = component;