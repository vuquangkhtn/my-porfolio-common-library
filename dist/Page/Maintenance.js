"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Link = _interopRequireDefault(require("../Link/Link"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledMaintenance = _styledComponents.default.article(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  body {\n    text-align: center;\n    padding: 150px;\n  }\n  h1 {\n    font-size: 50px;\n    text-align: center;\n  }\n  body {\n    font: 20px Helvetica, sans-serif;\n    color: #333;\n  }\n  article {\n    display: block;\n    text-align: left;\n    width: 650px;\n    margin: 0 auto;\n  }\n\n  div {\n    display: flex;\n    justify-content: center;\n  }\n\n  p {\n    text-align: center;\n    max-width: 600px;\n    width: 100%;\n  }\n"])));

var Maintenance = function Maintenance() {
  return /*#__PURE__*/_react.default.createElement(StyledMaintenance, null, /*#__PURE__*/_react.default.createElement("h1", null, "We\u2019ll be back soon!"), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "Sorry for the inconvenience but we\u2019re performing some maintenance at the moment. If you need to you can always ", /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "mailto:vuquangkhtn@gmail.com"
  }, "contact us"), ", otherwise we\u2019ll be back online shortly!")));
};

var _default = Maintenance;
exports.default = _default;