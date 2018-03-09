"use strict";

exports.__esModule = true;
exports.component = void 0;

var _functional = require("./utilities/functional");

var _hasStatefulSetup = require("./utilities/hasStatefulSetup");

var _componentClass = require("./utilities/componentClass");

var DEFAULT_SETUP = {
  component: null,
  lifecycle: {},
  methods: {},
  state: {}
};

var component = function component(name, setup, pure) {
  if (setup === void 0) {
    setup = DEFAULT_SETUP;
  }

  if (pure === void 0) {
    pure = false;
  }

  return (0, _hasStatefulSetup.hasStatefulSetup)(setup, pure) && (0, _componentClass.componentClass)(name, setup, pure) || (0, _functional.functional)(name, setup.component);
};

exports.component = component;