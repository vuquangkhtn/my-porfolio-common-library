"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./button.css");

var _excluded = ["mode", "backgroundColor", "size", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(_ref) {
  var mode = _ref.mode,
      backgroundColor = _ref.backgroundColor,
      size = _ref.size,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var modeClass = "btn--".concat(mode);
  return /*#__PURE__*/_react.default.createElement("button", _extends({
    type: "button",
    className: ['btn', modeClass, props.className].join(' '),
    style: backgroundColor && {
      backgroundColor: backgroundColor
    }
  }, props), children);
};

exports.Button = Button;
Button.propTypes = {
  mode: _propTypes.default.oneOf('primary', 'secondary', 'submit'),
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