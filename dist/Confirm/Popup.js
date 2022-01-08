"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledPopup = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  color: #5b5b5b;\n  justify-content: center;\n"])));

var Container = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  min-width: 400px;\n  min-height: 200px;\n  background: white;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);\n"])));

var Header = _styledComponents.default.h1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 10px 5px 10px;\n  font-weight: bold;\n  font-size: 20px;\n"])));

var Content = _styledComponents.default.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 5px 10px;\n  font-size: 16px;\n  font-weight: 300;\n"])));

var Actions = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  column-gap: 5px;\n  padding: 10px 5px;\n  background-color: #f5f5f5;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n"])));

var Popup = function Popup(_ref) {
  var show = _ref.show,
      proceed = _ref.proceed,
      dismiss = _ref.dismiss,
      header = _ref.header,
      confirmation = _ref.confirmation,
      _ref$isMessage = _ref.isMessage,
      isMessage = _ref$isMessage === void 0 ? false : _ref$isMessage;
  if (!show) return null;

  var handleCancel = function handleCancel() {
    proceed(false);
  };

  return /*#__PURE__*/_react.default.createElement(StyledPopup, {
    onClick: function onClick() {
      return dismiss();
    }
  }, /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(Header, null, header), /*#__PURE__*/_react.default.createElement(Content, null, confirmation), /*#__PURE__*/_react.default.createElement(Actions, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    mode: "submit",
    onClick: function onClick() {
      return proceed(true);
    }
  }, "OK"), !isMessage && /*#__PURE__*/_react.default.createElement(_Button.default, {
    mode: "primary",
    onClick: handleCancel
  }, "Cancel"))));
};

Popup.propTypes = {
  isMessage: _propTypes.default.bool,
  show: _propTypes.default.bool,
  proceed: _propTypes.default.func,
  cancel: _propTypes.default.func,
  dismiss: _propTypes.default.func,
  confirmation: _propTypes.default.string,
  header: _propTypes.default.string
};
var _default = Popup;
exports.default = _default;