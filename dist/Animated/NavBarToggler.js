"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["expanded", "color"];

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var expandedMixin = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .navbar-toggler-icon:first-child {\n    transform: rotate(45deg);\n    top: 6px;\n  }\n  .navbar-toggler-icon:nth-child(2) {\n    display: none;\n  }\n  .navbar-toggler-icon:last-child {\n    transform: rotate(-45deg);\n    bottom: 1px;\n  }\n"])));

var StyledToggler = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border: 0;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n  outline: none;\n  cursor: pointer;\n  margin-right: 10px;\n  background: none;\n\n  &:focus {\n    outline: none;\n  }\n\n  .navbar-toggler-icon {\n    background: ", ";\n    display: block;\n    width: 100%;\n    height: 2px;\n    margin: 5px 0;\n    transition: all 0.4s ease;\n    position: relative;\n  }\n\n  ", "\n"])), function (props) {
  return props.color || '#212121';
}, function (props) {
  return props.expanded && expandedMixin;
});

var NavBarToggler = function NavBarToggler(_ref) {
  var expanded = _ref.expanded,
      color = _ref.color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(StyledToggler, _extends({
    type: "button",
    expanded: expanded,
    color: color
  }, restProps), /*#__PURE__*/_react.default.createElement("span", {
    className: "navbar-toggler-icon"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "navbar-toggler-icon"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "navbar-toggler-icon"
  }));
};

NavBarToggler.propTypes = {
  expanded: _propTypes.default.bool,
  color: _propTypes.default.string
};
var _default = NavBarToggler;
exports.default = _default;