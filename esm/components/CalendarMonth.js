import shallowCompare from "react-addons-shallow-compare";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint react/no-array-index-key: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import { forbidExtraProps, mutuallyExclusiveProps, nonNegativeInteger } from 'airbnb-prop-types';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import moment from 'moment';
import { CalendarDayPhrases } from '../defaultPhrases';
import getPhrasePropTypes from '../utils/getPhrasePropTypes';
import CalendarWeek from './CalendarWeek';
import CalendarDay from './CalendarDay';
import calculateDimension from '../utils/calculateDimension';
import getCalendarMonthWeeks from '../utils/getCalendarMonthWeeks';
import isSameDay from '../utils/isSameDay';
import toISODateString from '../utils/toISODateString';
import ModifiersShape from '../shapes/ModifiersShape';
import ScrollableOrientationShape from '../shapes/ScrollableOrientationShape';
import DayOfWeekShape from '../shapes/DayOfWeekShape';
import { HORIZONTAL_ORIENTATION, VERTICAL_SCROLLABLE, DAY_SIZE } from '../constants';
var propTypes = process.env.NODE_ENV !== "production" ? forbidExtraProps(_objectSpread({}, withStylesPropTypes, {
  month: momentPropTypes.momentObj,
  horizontalMonthPadding: nonNegativeInteger,
  isVisible: PropTypes.bool,
  enableOutsideDays: PropTypes.bool,
  modifiers: PropTypes.objectOf(ModifiersShape),
  orientation: ScrollableOrientationShape,
  daySize: nonNegativeInteger,
  onDayClick: PropTypes.func,
  onDayMouseEnter: PropTypes.func,
  onDayMouseLeave: PropTypes.func,
  onMonthSelect: PropTypes.func,
  onYearSelect: PropTypes.func,
  renderMonthText: mutuallyExclusiveProps(PropTypes.func, 'renderMonthText', 'renderMonthElement'),
  renderCalendarDay: PropTypes.func,
  renderDayContents: PropTypes.func,
  renderMonthElement: mutuallyExclusiveProps(PropTypes.func, 'renderMonthText', 'renderMonthElement'),
  firstDayOfWeek: DayOfWeekShape,
  setMonthTitleHeight: PropTypes.func,
  verticalBorderSpacing: nonNegativeInteger,
  focusedDate: momentPropTypes.momentObj,
  // indicates focusable day
  isFocused: PropTypes.bool,
  // indicates whether or not to move focus to focusable day
  // i18n
  monthFormat: PropTypes.string,
  phrases: PropTypes.shape(getPhrasePropTypes(CalendarDayPhrases)),
  dayAriaLabelFormat: PropTypes.string
})) : {};;
var defaultProps = {
  month: moment(),
  horizontalMonthPadding: 13,
  isVisible: true,
  enableOutsideDays: false,
  modifiers: {},
  orientation: HORIZONTAL_ORIENTATION,
  daySize: DAY_SIZE,
  onDayClick: function onDayClick() {},
  onDayMouseEnter: function onDayMouseEnter() {},
  onDayMouseLeave: function onDayMouseLeave() {},
  onMonthSelect: function onMonthSelect() {},
  onYearSelect: function onYearSelect() {},
  renderMonthText: null,
  renderCalendarDay: function renderCalendarDay(props) {
    return React.createElement(CalendarDay, props);
  },
  renderDayContents: null,
  renderMonthElement: null,
  firstDayOfWeek: null,
  setMonthTitleHeight: null,
  focusedDate: null,
  isFocused: false,
  // i18n
  monthFormat: 'MMMM YYYY',
  // english locale
  phrases: CalendarDayPhrases,
  dayAriaLabelFormat: undefined,
  verticalBorderSpacing: undefined
};

var CalendarMonth =
/*#__PURE__*/
function (_ref) {
  _inherits(CalendarMonth, _ref);

  _createClass(CalendarMonth, [{
    key: !React.PureComponent && "shouldComponentUpdate",
    value: function value(nextProps, nextState) {
      return shallowCompare(this, nextProps, nextState);
    }
  }]);

  function CalendarMonth(props) {
    var _this;

    _classCallCheck(this, CalendarMonth);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CalendarMonth).call(this, props));
    _this.state = {
      weeks: getCalendarMonthWeeks(props.month, props.enableOutsideDays, props.firstDayOfWeek == null ? moment.localeData().firstDayOfWeek() : props.firstDayOfWeek)
    };
    _this.setCaptionRef = _this.setCaptionRef.bind(_assertThisInitialized(_this));
    _this.setMonthTitleHeight = _this.setMonthTitleHeight.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CalendarMonth, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setMonthTitleHeightTimeout = setTimeout(this.setMonthTitleHeight, 0);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var month = nextProps.month,
          enableOutsideDays = nextProps.enableOutsideDays,
          firstDayOfWeek = nextProps.firstDayOfWeek;
      var _this$props = this.props,
          prevMonth = _this$props.month,
          prevEnableOutsideDays = _this$props.enableOutsideDays,
          prevFirstDayOfWeek = _this$props.firstDayOfWeek;

      if (!month.isSame(prevMonth) || enableOutsideDays !== prevEnableOutsideDays || firstDayOfWeek !== prevFirstDayOfWeek) {
        this.setState({
          weeks: getCalendarMonthWeeks(month, enableOutsideDays, firstDayOfWeek == null ? moment.localeData().firstDayOfWeek() : firstDayOfWeek)
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.setMonthTitleHeightTimeout) {
        clearTimeout(this.setMonthTitleHeightTimeout);
      }
    }
  }, {
    key: "setMonthTitleHeight",
    value: function setMonthTitleHeight() {
      var setMonthTitleHeight = this.props.setMonthTitleHeight;

      if (setMonthTitleHeight) {
        var captionHeight = calculateDimension(this.captionRef, 'height', true, true);
        setMonthTitleHeight(captionHeight);
      }
    }
  }, {
    key: "setCaptionRef",
    value: function setCaptionRef(ref) {
      this.captionRef = ref;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          dayAriaLabelFormat = _this$props2.dayAriaLabelFormat,
          daySize = _this$props2.daySize,
          focusedDate = _this$props2.focusedDate,
          horizontalMonthPadding = _this$props2.horizontalMonthPadding,
          isFocused = _this$props2.isFocused,
          isVisible = _this$props2.isVisible,
          modifiers = _this$props2.modifiers,
          month = _this$props2.month,
          monthFormat = _this$props2.monthFormat,
          onDayClick = _this$props2.onDayClick,
          onDayMouseEnter = _this$props2.onDayMouseEnter,
          onDayMouseLeave = _this$props2.onDayMouseLeave,
          onMonthSelect = _this$props2.onMonthSelect,
          onYearSelect = _this$props2.onYearSelect,
          orientation = _this$props2.orientation,
          phrases = _this$props2.phrases,
          renderCalendarDay = _this$props2.renderCalendarDay,
          renderDayContents = _this$props2.renderDayContents,
          renderMonthElement = _this$props2.renderMonthElement,
          renderMonthText = _this$props2.renderMonthText,
          styles = _this$props2.styles,
          verticalBorderSpacing = _this$props2.verticalBorderSpacing;
      var weeks = this.state.weeks;
      var monthTitle = renderMonthText ? renderMonthText(month) : month.format(monthFormat);
      var verticalScrollable = orientation === VERTICAL_SCROLLABLE;
      return React.createElement("div", _extends({}, css(styles.CalendarMonth, {
        padding: "0 ".concat(horizontalMonthPadding, "px")
      }), {
        "data-visible": isVisible
      }), React.createElement("div", _extends({
        ref: this.setCaptionRef
      }, css(styles.CalendarMonth_caption, verticalScrollable && styles.CalendarMonth_caption__verticalScrollable)), renderMonthElement ? renderMonthElement({
        month: month,
        onMonthSelect: onMonthSelect,
        onYearSelect: onYearSelect,
        isVisible: isVisible
      }) : monthTitle), React.createElement("table", _extends({}, css(!verticalBorderSpacing && styles.CalendarMonth_table, verticalBorderSpacing && styles.CalendarMonth_verticalSpacing, verticalBorderSpacing && {
        borderSpacing: "0px ".concat(verticalBorderSpacing, "px")
      }), {
        role: "presentation"
      }), React.createElement("tbody", null, weeks.map(function (week, i) {
        return React.createElement(CalendarWeek, {
          key: i
        }, week.map(function (day, dayOfWeek) {
          return renderCalendarDay({
            key: dayOfWeek,
            day: day,
            daySize: daySize,
            isOutsideDay: !day || day.month() !== month.month(),
            tabIndex: isVisible && isSameDay(day, focusedDate) ? 0 : -1,
            isFocused: isFocused,
            onDayMouseEnter: onDayMouseEnter,
            onDayMouseLeave: onDayMouseLeave,
            onDayClick: onDayClick,
            renderDayContents: renderDayContents,
            phrases: phrases,
            modifiers: modifiers[toISODateString(day)],
            ariaLabelFormat: dayAriaLabelFormat
          });
        }));
      }))));
    }
  }]);

  return CalendarMonth;
}(React.PureComponent || React.Component);

CalendarMonth.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
CalendarMonth.defaultProps = defaultProps;
export default withStyles(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      color = _ref2$reactDates.color,
      font = _ref2$reactDates.font,
      spacing = _ref2$reactDates.spacing;
  return {
    CalendarMonth: {
      background: color.background,
      textAlign: 'center',
      verticalAlign: 'top',
      userSelect: 'none'
    },
    CalendarMonth_table: {
      borderCollapse: 'collapse',
      borderSpacing: 0
    },
    CalendarMonth_verticalSpacing: {
      borderCollapse: 'separate'
    },
    CalendarMonth_caption: {
      color: color.text,
      fontSize: font.captionSize,
      textAlign: 'center',
      paddingTop: spacing.captionPaddingTop,
      paddingBottom: spacing.captionPaddingBottom,
      captionSide: 'initial'
    },
    CalendarMonth_caption__verticalScrollable: {
      paddingTop: 12,
      paddingBottom: 7
    }
  };
}, {
  pureComponent: typeof React.PureComponent !== 'undefined'
})(CalendarMonth);