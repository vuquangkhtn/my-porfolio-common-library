"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputMixin = void 0;

var _styledComponents = require("styled-components");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var inputMixin = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: transparent;\n  border-radius: 2px;\n  outline: none;\n  box-shadow: none;\n  font-weight: bold;\n  margin: 16px 0;\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  border: 1px solid #ced4da;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n\n  &:not(textarea) {\n    height: 48px;\n  }\n\n  &:hover,\n  &:focus {\n    border-color: #ffc200;\n    color: #495057;\n    background-color: #fff;\n    outline: 0;\n  }\n\n  &::-ms-expand {\n    background-color: transparent;\n    border: 0;\n  }\n\n  &::-webkit-input-placeholder {\n    color: #6c757d;\n    opacity: 1;\n  }\n\n  &::-moz-placeholder {\n    color: #6c757d;\n    opacity: 1;\n  }\n\n  &:-ms-input-placeholder {\n    color: #6c757d;\n    opacity: 1;\n  }\n\n  &::-ms-input-placeholder {\n    color: #6c757d;\n    opacity: 1;\n  }\n\n  &::placeholder {\n    color: #6c757d;\n    opacity: 1;\n  }\n\n  &:disabled,\n  &[readonly] {\n    background-color: #e9ecef;\n    opacity: 1;\n  }\n"])));
exports.inputMixin = inputMixin;