"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _NavBarToggler = _interopRequireDefault(require("./NavBarToggler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Common/NavBarToggler',
  component: _NavBarToggler.default,
  argTypes: {
    color: {
      control: 'color'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement(_NavBarToggler.default, args));
};

var Default = Template.bind({});
exports.Default = Default;
Text.args = {
  expanded: false
};