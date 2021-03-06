import shallowCompare from "react-addons-shallow-compare";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';
import { forbidExtraProps, nonNegativeInteger } from 'airbnb-prop-types';
import openDirectionShape from '../shapes/OpenDirectionShape';
import { SingleDatePickerInputPhrases } from '../defaultPhrases';
import getPhrasePropTypes from '../utils/getPhrasePropTypes';
import SingleDatePickerInput from './SingleDatePickerInput';
import IconPositionShape from '../shapes/IconPositionShape';
import DisabledShape from '../shapes/DisabledShape';
import toMomentObject from '../utils/toMomentObject';
import toLocalizedDateString from '../utils/toLocalizedDateString';
import isInclusivelyAfterDay from '../utils/isInclusivelyAfterDay';
import { ICON_BEFORE_POSITION, OPEN_DOWN } from '../constants';
var propTypes = process.env.NODE_ENV !== "production" ? forbidExtraProps({
  children: PropTypes.node,
  date: momentPropTypes.momentObj,
  onDateChange: PropTypes.func.isRequired,
  focused: PropTypes.bool,
  onFocusChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  ariaLabel: PropTypes.string,
  screenReaderMessage: PropTypes.string,
  showClearDate: PropTypes.bool,
  showCaret: PropTypes.bool,
  showDefaultInputIcon: PropTypes.bool,
  inputIconPosition: IconPositionShape,
  disabled: DisabledShape,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  openDirection: openDirectionShape,
  noBorder: PropTypes.bool,
  block: PropTypes.bool,
  small: PropTypes.bool,
  regular: PropTypes.bool,
  verticalSpacing: nonNegativeInteger,
  keepOpenOnDateSelect: PropTypes.bool,
  reopenPickerOnClearDate: PropTypes.bool,
  isOutsideRange: PropTypes.func,
  displayFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onClose: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyDownArrowDown: PropTypes.func,
  onKeyDownQuestionMark: PropTypes.func,
  customInputIcon: PropTypes.node,
  customCloseIcon: PropTypes.node,
  // accessibility
  isFocused: PropTypes.bool,
  // i18n
  phrases: PropTypes.shape(getPhrasePropTypes(SingleDatePickerInputPhrases)),
  isRTL: PropTypes.bool
}) : {};;
var defaultProps = {
  children: null,
  date: null,
  focused: false,
  placeholder: '',
  ariaLabel: undefined,
  screenReaderMessage: 'Date',
  showClearDate: false,
  showCaret: false,
  showDefaultInputIcon: false,
  inputIconPosition: ICON_BEFORE_POSITION,
  disabled: false,
  required: false,
  readOnly: false,
  openDirection: OPEN_DOWN,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  verticalSpacing: undefined,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDate: false,
  isOutsideRange: function isOutsideRange(day) {
    return !isInclusivelyAfterDay(day, moment());
  },
  displayFormat: function displayFormat() {
    return moment.localeData().longDateFormat('L');
  },
  onClose: function onClose() {},
  onKeyDownArrowDown: function onKeyDownArrowDown() {},
  onKeyDownQuestionMark: function onKeyDownQuestionMark() {},
  onKeyDown: null,
  customInputIcon: null,
  customCloseIcon: null,
  // accessibility
  isFocused: false,
  // i18n
  phrases: SingleDatePickerInputPhrases,
  isRTL: false
};

var SingleDatePickerInputController =
/*#__PURE__*/
function (_ref) {
  _inherits(SingleDatePickerInputController, _ref);

  _createClass(SingleDatePickerInputController, [{
    key: !React.PureComponent && "shouldComponentUpdate",
    value: function value(nextProps, nextState) {
      return shallowCompare(this, nextProps, nextState);
    }
  }]);

  function SingleDatePickerInputController(props) {
    var _this;

    _classCallCheck(this, SingleDatePickerInputController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SingleDatePickerInputController).call(this, props));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onClearFocus = _this.onClearFocus.bind(_assertThisInitialized(_this));
    _this.clearDate = _this.clearDate.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SingleDatePickerInputController, [{
    key: "onChange",
    value: function onChange(dateString) {
      var _this$props = this.props,
          isOutsideRange = _this$props.isOutsideRange,
          keepOpenOnDateSelect = _this$props.keepOpenOnDateSelect,
          onDateChange = _this$props.onDateChange,
          onFocusChange = _this$props.onFocusChange,
          onClose = _this$props.onClose;
      var newDate = toMomentObject(dateString, this.getDisplayFormat());
      var isValid = newDate && !isOutsideRange(newDate);

      if (isValid) {
        onDateChange(newDate);

        if (!keepOpenOnDateSelect) {
          onFocusChange({
            focused: false
          });
          onClose({
            date: newDate
          });
        }
      } else {
        onDateChange(null);
      }
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      var _this$props2 = this.props,
          onFocusChange = _this$props2.onFocusChange,
          disabled = _this$props2.disabled;

      if (!disabled) {
        onFocusChange({
          focused: true
        });
      }
    }
  }, {
    key: "onClearFocus",
    value: function onClearFocus() {
      var _this$props3 = this.props,
          focused = _this$props3.focused,
          onFocusChange = _this$props3.onFocusChange,
          onClose = _this$props3.onClose,
          date = _this$props3.date;
      if (!focused) return;
      onFocusChange({
        focused: false
      });
      onClose({
        date: date
      });
    }
  }, {
    key: "getDisplayFormat",
    value: function getDisplayFormat() {
      var displayFormat = this.props.displayFormat;
      return typeof displayFormat === 'string' ? displayFormat : displayFormat();
    }
  }, {
    key: "getDateString",
    value: function getDateString(date) {
      var displayFormat = this.getDisplayFormat();

      if (date && displayFormat) {
        return date && date.format(displayFormat);
      }

      return toLocalizedDateString(date);
    }
  }, {
    key: "clearDate",
    value: function clearDate() {
      var _this$props4 = this.props,
          onDateChange = _this$props4.onDateChange,
          reopenPickerOnClearDate = _this$props4.reopenPickerOnClearDate,
          onFocusChange = _this$props4.onFocusChange;
      onDateChange(null);

      if (reopenPickerOnClearDate) {
        onFocusChange({
          focused: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          children = _this$props5.children,
          id = _this$props5.id,
          placeholder = _this$props5.placeholder,
          ariaLabel = _this$props5.ariaLabel,
          disabled = _this$props5.disabled,
          focused = _this$props5.focused,
          isFocused = _this$props5.isFocused,
          required = _this$props5.required,
          readOnly = _this$props5.readOnly,
          openDirection = _this$props5.openDirection,
          showClearDate = _this$props5.showClearDate,
          showCaret = _this$props5.showCaret,
          showDefaultInputIcon = _this$props5.showDefaultInputIcon,
          inputIconPosition = _this$props5.inputIconPosition,
          customCloseIcon = _this$props5.customCloseIcon,
          customInputIcon = _this$props5.customInputIcon,
          date = _this$props5.date,
          phrases = _this$props5.phrases,
          onKeyDownArrowDown = _this$props5.onKeyDownArrowDown,
          onKeyDownQuestionMark = _this$props5.onKeyDownQuestionMark,
          screenReaderMessage = _this$props5.screenReaderMessage,
          isRTL = _this$props5.isRTL,
          noBorder = _this$props5.noBorder,
          block = _this$props5.block,
          small = _this$props5.small,
          regular = _this$props5.regular,
          verticalSpacing = _this$props5.verticalSpacing,
          onKeyDown = _this$props5.onKeyDown;
      var displayValue = this.getDateString(date);
      return React.createElement(SingleDatePickerInput, {
        id: id,
        placeholder: placeholder,
        ariaLabel: ariaLabel,
        focused: focused,
        isFocused: isFocused,
        disabled: disabled,
        required: required,
        readOnly: readOnly,
        openDirection: openDirection,
        showCaret: showCaret,
        onClearDate: this.clearDate,
        showClearDate: showClearDate,
        showDefaultInputIcon: showDefaultInputIcon,
        inputIconPosition: inputIconPosition,
        customCloseIcon: customCloseIcon,
        customInputIcon: customInputIcon,
        displayValue: displayValue,
        onChange: this.onChange,
        onFocus: this.onFocus,
        onKeyDown: onKeyDown,
        onKeyDownShiftTab: this.onClearFocus,
        onKeyDownArrowDown: onKeyDownArrowDown,
        onKeyDownQuestionMark: onKeyDownQuestionMark,
        screenReaderMessage: screenReaderMessage,
        phrases: phrases,
        isRTL: isRTL,
        noBorder: noBorder,
        block: block,
        small: small,
        regular: regular,
        verticalSpacing: verticalSpacing
      }, children);
    }
  }]);

  return SingleDatePickerInputController;
}(React.PureComponent || React.Component);

export { SingleDatePickerInputController as default };
SingleDatePickerInputController.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
SingleDatePickerInputController.defaultProps = defaultProps;