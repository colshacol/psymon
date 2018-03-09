"use strict";

exports.__esModule = true;
exports.hasStatefulSetup = void 0;

var hasStatefulSetup = function hasStatefulSetup(setup, pure) {
  return ['lifecycle' in setup, 'methods' in setup, 'state' in setup, pure].includes(true);
};

exports.hasStatefulSetup = hasStatefulSetup;