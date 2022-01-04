"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledError = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');\n\n  .message {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n\n    h1,\n    h2,\n    h3 {\n      margin: 0;\n      line-height: 0.8;\n    }\n\n    h2,\n    h3 {\n      font-weight: 300;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 8em;\n    }\n\n    h2 {\n      margin: 30px 0;\n    }\n\n    h3 {\n      font-size: 2.5em;\n    }\n\n    h4 {\n      display: inline-block;\n      margin: 0 15px;\n    }\n  }\n"])));

var Error = function Error() {
  return /*#__PURE__*/_react.default.createElement(StyledError, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "message"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "500"), /*#__PURE__*/_react.default.createElement("h3", null, "Server Error"), /*#__PURE__*/_react.default.createElement("h2", null, "It's not you, it's me."), /*#__PURE__*/_react.default.createElement(_Button.default, {
    mode: "secondary",
    onClick: function onClick() {
      var _window;

      return (_window = window) === null || _window === void 0 ? void 0 : _window.history.back();
    }
  }, "Go Back")));
};

var _default = Error;
exports.default = _default;