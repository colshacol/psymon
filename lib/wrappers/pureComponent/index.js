"use strict";

exports.__esModule = true;
exports.pureComponent = void 0;

var _component = require("../component");

var defaultSetup = {
  lifecycle: {},
  methods: {},
  state: {}
};

var pureComponent = function pureComponent(name, setup) {
  return (0, _component.component)(name, setup, true);
};

exports.pureComponent = pureComponent;