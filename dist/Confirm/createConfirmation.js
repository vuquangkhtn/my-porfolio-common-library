"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var createConfirmation = function createConfirmation(Component) {
  return function (props) {
    var wrapper = document.body.appendChild(document.createElement('div'));

    function dispose() {
      setTimeout(function () {
        _reactDom.default.unmountComponentAtNode(wrapper);

        setTimeout(function () {
          if (document.body.contains(wrapper)) {
            document.body.removeChild(wrapper);
          }
        });
      });
    }

    var promise = new Promise(function (resolve, reject) {
      _reactDom.default.render( /*#__PURE__*/_react.default.createElement(Component, _extends({
        resolve: resolve,
        reject: reject,
        dispose: dispose
      }, props)), wrapper);
    });
    return promise.then(function (result) {
      dispose();
      return result;
    }, function (result) {
      dispose();
      return Promise.reject(result);
    });
  };
};

var _default = createConfirmation;
exports.default = _default;