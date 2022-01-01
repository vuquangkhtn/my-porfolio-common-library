"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _excluded = ["mode", "backgroundColor", "children"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var primaryMixin = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: #eee;\n  color: #5b5b5b;\n  &:hover {\n    color: #ffc200;\n  }\n"])));
var secondaryMixin = (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background: #474559;\n  color: #ffffff;\n  &:hover {\n    background: #ffc200;\n    color: #ffffff;\n  }\n"])));
var submitMixin = (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background: #ffc200;\n  color: #ffffff;\n  &:hover {\n    background: #474559;\n    color: #ffffff;\n  }\n"])));

var StyledButton = _styledComponents.default.button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-weight: bold;\n  border-radius: 50px;\n  padding: 13px 29px;\n  font-size: 14px;\n  line-height: normal;\n  overflow: hidden;\n  transition: all 0.4s ease;\n\n  &:hover, &:focus {\n    text-decoration: none;\n  }\n\n  &.disabled, &:disabled {\n    opacity: 0.65;\n  }\n\n  &:not(:disabled):not(.disabled) {\n    cursor: pointer;\n  }\n\n  &:not(:disabled):not(.disabled):active, &:not(:disabled):not(.disabled).active {\n    background-image: none;\n  }\n\n  ", ";\n  ", ";\n  ", ";\n"])), function (props) {
  return props.mode === 'primary' && primaryMixin;
}, function (props) {
  return props.mode === 'secondary' && secondaryMixin;
}, function (props) {
  return props.mode === 'submit' && submitMixin;
});

var Button = function Button(_ref) {
  var mode = _ref.mode,
      backgroundColor = _ref.backgroundColor,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(StyledButton, _extends({
    mode: mode,
    style: backgroundColor && {
      backgroundColor: backgroundColor
    }
  }, props), children);
};

Button.propTypes = {
  mode: _propTypes.default.oneOf(['primary', 'secondary', 'submit']),
  backgroundColor: _propTypes.default.string,
  children: _propTypes.default.object.isRequired,
  onClick: _propTypes.default.func
};
Button.defaultProps = {
  backgroundColor: null,
  mode: 'primary',
  onClick: undefined
};
var _default = Button;
exports.default = _default;