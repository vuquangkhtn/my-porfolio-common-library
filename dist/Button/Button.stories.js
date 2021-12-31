"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Submit = exports.Secondary = exports.Primary = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Common/Button',
  component: _Button.default,
  argTypes: {
    backgroundColor: {
      control: 'color'
    },
    mode: {
      options: ['primary', 'secondary', 'submit'],
      control: {
        type: 'select'
      }
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.default, args);
};

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  children: 'Button'
};
var Secondary = Template.bind({});
exports.Secondary = Secondary;
Secondary.args = {
  mode: 'secondary',
  children: 'Button'
};
var Submit = Template.bind({});
exports.Submit = Submit;
Submit.args = {
  mode: 'submit',
  children: 'Button'
};