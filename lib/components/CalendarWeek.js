"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CalendarWeek;

var _react = _interopRequireDefault(require("react"));

var _airbnbPropTypes = require("airbnb-prop-types");

var _CalendarDay = _interopRequireDefault(require("./CalendarDay"));

var _CustomizableCalendarDay = _interopRequireDefault(require("./CustomizableCalendarDay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Disabling propTypes check to fix HMR bug
// https://github.com/gaearon/react-hot-loader/issues/304
// https://github.com/airbnb/react-dates/issues/950
// const propTypes = forbidExtraProps({
//   children: or([childrenOfType(CalendarDay), childrenOfType(CustomizableCalendarDay)]).isRequired,
// });
function CalendarWeek(_ref) {
  var children = _ref.children;
  return _react["default"].createElement("tr", null, children);
} // CalendarWeek.propTypes = propTypes;