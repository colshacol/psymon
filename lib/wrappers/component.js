"use strict";

exports.__esModule = true;
exports.component = void 0;

var _react = require("react");

var _entriesOf = require("../utilities/entriesOf");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var defaultSetup = {
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

  return (
    /*#__PURE__*/
    function (_ref) {
      _inheritsLoose(PsymonComponent, _ref);

      function PsymonComponent(props) {
        var _this;

        _this = _ref.call(this, props) || this;

        var self = _assertThisInitialized(_this);

        self.state = setup.state;
        self.displayName = name;
        (0, _entriesOf.entriesOf)([setup.methods, setup.lifecycle]).forEach(function (method) {
          self[method[0]] = method[1](self);
        });
        return _this;
      }

      var _proto = PsymonComponent.prototype;

      _proto.render = function render() {
        var self = this;
        var props = self.props;
        return setup.component(self)(props);
      };

      return PsymonComponent;
    }(pure ? _react.PureComponent : _react.Component)
  );
};

exports.component = component;