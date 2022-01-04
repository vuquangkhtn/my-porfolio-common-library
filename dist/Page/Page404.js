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

var StyledError = _styledComponents.default.article(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700');\n  @import url('https://fonts.googleapis.com/css?family=Catamaran:400,800');\n\n  .error-container {\n    text-align: center;\n    font-size: 106px;\n    font-family: 'Catamaran', sans-serif;\n    font-weight: 800;\n    margin: 70px 15px;\n  }\n  .error-container > span {\n    display: inline-block;\n    position: relative;\n  }\n  .error-container > span.four {\n    width: 136px;\n    height: 43px;\n    border-radius: 999px;\n    background: linear-gradient(\n        140deg,\n        rgba(0, 0, 0, 0.1) 0%,\n        rgba(0, 0, 0, 0.07) 43%,\n        transparent 44%,\n        transparent 100%\n      ),\n      linear-gradient(\n        105deg,\n        transparent 0%,\n        transparent 40%,\n        rgba(0, 0, 0, 0.06) 41%,\n        rgba(0, 0, 0, 0.07) 76%,\n        transparent 77%,\n        transparent 100%\n      ),\n      linear-gradient(to right, #d89ca4, #e27b7e);\n  }\n  .error-container > span.four:before,\n  .error-container > span.four:after {\n    content: '';\n    display: block;\n    position: absolute;\n    border-radius: 999px;\n  }\n  .error-container > span.four:before {\n    width: 43px;\n    height: 156px;\n    left: 60px;\n    bottom: -43px;\n    background: linear-gradient(\n        128deg,\n        rgba(0, 0, 0, 0.1) 0%,\n        rgba(0, 0, 0, 0.07) 40%,\n        transparent 41%,\n        transparent 100%\n      ),\n      linear-gradient(\n        116deg,\n        rgba(0, 0, 0, 0.1) 0%,\n        rgba(0, 0, 0, 0.07) 50%,\n        transparent 51%,\n        transparent 100%\n      ),\n      linear-gradient(to top, #99749d, #b895ab, #cc9aa6, #d7969e, #e0787f);\n  }\n  .error-container > span.four:after {\n    width: 137px;\n    height: 43px;\n    transform: rotate(-49.5deg);\n    left: -18px;\n    bottom: 36px;\n    background: linear-gradient(to right, #99749d, #b895ab, #cc9aa6, #d7969e, #e0787f);\n  }\n\n  .error-container > span.zero {\n    vertical-align: text-top;\n    width: 156px;\n    height: 156px;\n    border-radius: 999px;\n    background: linear-gradient(\n        -45deg,\n        transparent 0%,\n        rgba(0, 0, 0, 0.06) 50%,\n        transparent 51%,\n        transparent 100%\n      ),\n      linear-gradient(to top right, #99749d, #99749d, #b895ab, #cc9aa6, #d7969e, #ed8687, #ed8687);\n    overflow: hidden;\n    animation: bgshadow 5s infinite;\n  }\n  .error-container > span.zero:before {\n    content: '';\n    display: block;\n    position: absolute;\n    transform: rotate(45deg);\n    width: 90px;\n    height: 90px;\n    background-color: transparent;\n    left: 0px;\n    bottom: 0px;\n    background: linear-gradient(\n        95deg,\n        transparent 0%,\n        transparent 8%,\n        rgba(0, 0, 0, 0.07) 9%,\n        transparent 50%,\n        transparent 100%\n      ),\n      linear-gradient(\n        85deg,\n        transparent 0%,\n        transparent 19%,\n        rgba(0, 0, 0, 0.05) 20%,\n        rgba(0, 0, 0, 0.07) 91%,\n        transparent 92%,\n        transparent 100%\n      );\n  }\n  .error-container > span.zero:after {\n    content: '';\n    display: block;\n    position: absolute;\n    border-radius: 999px;\n    width: 70px;\n    height: 70px;\n    left: 43px;\n    bottom: 43px;\n    background: #fdfaf5;\n    box-shadow: -2px 2px 2px 0px rgba(0, 0, 0, 0.1);\n  }\n\n  .screen-reader-text {\n    position: absolute;\n    top: -9999em;\n    left: -9999em;\n  }\n\n  @keyframes bgshadow {\n    0% {\n      box-shadow: inset -160px 160px 0px 5px rgba(0, 0, 0, 0.4);\n    }\n    45% {\n      box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);\n    }\n    55% {\n      box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);\n    }\n    100% {\n      box-shadow: inset 160px -160px 0px 5px rgba(0, 0, 0, 0.4);\n    }\n  }\n\n  /* demo stuff */\n  * {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  body {\n    background-color: #fdfaf5;\n    margin-bottom: 50px;\n  }\n  html,\n  input,\n  select,\n  textarea {\n    font-family: 'Montserrat', Helvetica, sans-serif;\n    color: #bbb;\n  }\n  h1 {\n    text-align: center;\n    margin: 30px 15px;\n  }\n  .zoom-area {\n    max-width: 490px;\n    margin: 30px auto 30px;\n    font-size: 19px;\n    text-align: center;\n  }\n  .link-container {\n    text-align: center;\n  }\n"])));

var Error = function Error() {
  return /*#__PURE__*/_react.default.createElement(StyledError, null, /*#__PURE__*/_react.default.createElement("h1", null, "404 Error Page #2"), /*#__PURE__*/_react.default.createElement("p", {
    className: "zoom-area"
  }, /*#__PURE__*/_react.default.createElement("b", null, "CSS"), " animations to make a cool 404 page.", ' '), /*#__PURE__*/_react.default.createElement("section", {
    className: "error-container"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "four"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "screen-reader-text"
  }, "4")), /*#__PURE__*/_react.default.createElement("span", {
    className: "zero"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "screen-reader-text"
  }, "0")), /*#__PURE__*/_react.default.createElement("span", {
    className: "four"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "screen-reader-text"
  }, "4"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "link-container"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    mode: "secondary",
    onClick: function onClick() {
      return window.history.back();
    }
  }, "Go Back")));
};

var _default = Error;
exports.default = _default;