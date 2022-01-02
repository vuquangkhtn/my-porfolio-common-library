"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button.default;
  }
});
Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: function get() {
    return _react.Icon;
  }
});
Object.defineProperty(exports, "Input", {
  enumerable: true,
  get: function get() {
    return _Input.default;
  }
});
Object.defineProperty(exports, "Link", {
  enumerable: true,
  get: function get() {
    return _Link.default;
  }
});
Object.defineProperty(exports, "NavBarToggler", {
  enumerable: true,
  get: function get() {
    return _NavBarToggler.default;
  }
});
Object.defineProperty(exports, "TextArea", {
  enumerable: true,
  get: function get() {
    return _TextArea.default;
  }
});
exports.confirmKit = void 0;

var _react = require("@iconify/react");

var _Button = _interopRequireDefault(require("./Button/Button"));

var _Input = _interopRequireDefault(require("./Input/Input"));

var _TextArea = _interopRequireDefault(require("./Input/TextArea"));

var _Link = _interopRequireDefault(require("./Link/Link"));

var _NavBarToggler = _interopRequireDefault(require("./Animated/NavBarToggler"));

var _confirmPopup = _interopRequireDefault(require("./Confirm/confirmPopup"));

var _confirmable = _interopRequireDefault(require("./Confirm/confirmable"));

var _createConfirmation = _interopRequireDefault(require("./Confirm/createConfirmation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var confirmKit = {
  confirmPopup: _confirmPopup.default,
  confirmable: _confirmable.default,
  createConfirmation: _createConfirmation.default
};
exports.confirmKit = confirmKit;