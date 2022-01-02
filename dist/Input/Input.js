"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _baseStyles = require("./baseStyles");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledInput = _styledComponents.default.input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", ";\n"])), _baseStyles.inputMixin);

var Input = function Input(_ref) {
  var restProps = _extends({}, _ref);

  return /*#__PURE__*/_react.default.createElement(StyledInput, restProps);
};

var _default = Input;
exports.default = _default;