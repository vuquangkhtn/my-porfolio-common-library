"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Text = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextArea = _interopRequireDefault(require("./TextArea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Common/TextArea',
  component: _TextArea.default,
  argTypes: {}
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement(_TextArea.default, args));
};

var Text = Template.bind({});
exports.Text = Text;
Text.args = {
  placeholder: 'type here',
  disabled: false,
  rows: 6
};