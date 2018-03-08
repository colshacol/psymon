"use strict";

exports.__esModule = true;
exports.componentClass = void 0;

var _react = require("react");

var _applyClassMethods = require("./applyClassMethods");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var componentClass = function componentClass(name, setup, pure) {
  var _name = name || (pure ? 'PsymonPureComponent' : 'PsymonComponent');

  var Wrapper =
  /*#__PURE__*/
  function (_ref) {
    _inheritsLoose(Wrapper, _ref);

    function Wrapper(props) {
      var _this;

      _this = _ref.call(this, props) || this;
      _this.state = setup.state;
      _this.displayName = _name;
      applyClassMethods(_assertThisInitialized(_this))(setup);
      return _this;
    }

    var _proto = Wrapper.prototype;

    _proto.render = function render() {
      return setup.component(this)(this.props);
    };

    return Wrapper;
  }(pure ? _react.PureComponent : _react.Component);

  Object.defineProperty(Wrapper, 'name', {
    value: _name
  });
  return Wrapper;
};

exports.componentClass = componentClass;