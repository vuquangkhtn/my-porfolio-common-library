"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Text = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _confirmPopup = _interopRequireDefault(require("./confirmPopup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  title: 'Common/Confirmation',
  component: _confirmPopup.default,
  argTypes: {}
};
exports.default = _default;

var Template = function Template(args) {
  var handleConfirm = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var confirm;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _confirmPopup.default)(args);

            case 3:
              confirm = _context.sent;

              if (confirm) {
                alert('OK');
              } else {
                alert('cancel');
              }

              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              alert('throw error');

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function handleConfirm() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: handleConfirm
  }, "Show confirm"));
};

var Text = Template.bind({});
exports.Text = Text;
Text.args = {
  header: 'Custom Confirm Popup',
  confirmation: 'Do you want to confirm?'
};