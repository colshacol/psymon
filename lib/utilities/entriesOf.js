"use strict";

exports.__esModule = true;
exports.entriesOf = void 0;

var entriesOf = function entriesOf(objects) {
  return objects.reduce(function (final, object) {
    if (object === void 0) {
      object = {};
    }

    Object.entries(object).forEach(function (entry) {
      final.push(entry);
    });
    return final;
  }, []);
};

exports.entriesOf = entriesOf;