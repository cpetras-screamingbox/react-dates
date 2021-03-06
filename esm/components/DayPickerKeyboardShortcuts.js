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

import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import { DayPickerKeyboardShortcutsPhrases } from '../defaultPhrases';
import getPhrasePropTypes from '../utils/getPhrasePropTypes';
import KeyboardShortcutRow from './KeyboardShortcutRow';
import CloseButton from './CloseButton';
export var TOP_LEFT = 'top-left';
export var TOP_RIGHT = 'top-right';
export var BOTTOM_RIGHT = 'bottom-right';
var propTypes = process.env.NODE_ENV !== "production" ? forbidExtraProps(_objectSpread({}, withStylesPropTypes, {
  block: PropTypes.bool,
  // TODO: rename button location to be direction-agnostic
  buttonLocation: PropTypes.oneOf([TOP_LEFT, TOP_RIGHT, BOTTOM_RIGHT]),
  showKeyboardShortcutsPanel: PropTypes.bool,
  openKeyboardShortcutsPanel: PropTypes.func,
  closeKeyboardShortcutsPanel: PropTypes.func,
  phrases: PropTypes.shape(getPhrasePropTypes(DayPickerKeyboardShortcutsPhrases)),
  renderKeyboardShortcutsButton: PropTypes.func
})) : {};;
var defaultProps = {
  block: false,
  buttonLocation: BOTTOM_RIGHT,
  showKeyboardShortcutsPanel: false,
  openKeyboardShortcutsPanel: function openKeyboardShortcutsPanel() {},
  closeKeyboardShortcutsPanel: function closeKeyboardShortcutsPanel() {},
  phrases: DayPickerKeyboardShortcutsPhrases,
  renderKeyboardShortcutsButton: undefined
};

function getKeyboardShortcuts(phrases) {
  return [{
    unicode: '↵',
    label: phrases.enterKey,
    action: phrases.selectFocusedDate
  }, {
    unicode: '←/→',
    label: phrases.leftArrowRightArrow,
    action: phrases.moveFocusByOneDay
  }, {
    unicode: '↑/↓',
    label: phrases.upArrowDownArrow,
    action: phrases.moveFocusByOneWeek
  }, {
    unicode: 'PgUp/PgDn',
    label: phrases.pageUpPageDown,
    action: phrases.moveFocusByOneMonth
  }, {
    unicode: 'Home/End',
    label: phrases.homeEnd,
    action: phrases.moveFocustoStartAndEndOfWeek
  }, {
    unicode: 'Esc',
    label: phrases.escape,
    action: phrases.returnFocusToInput
  }, {
    unicode: '?',
    label: phrases.questionMark,
    action: phrases.openThisPanel
  }];
}

var DayPickerKeyboardShortcuts =
/*#__PURE__*/
function (_ref) {
  _inherits(DayPickerKeyboardShortcuts, _ref);

  _createClass(DayPickerKeyboardShortcuts, [{
    key: !React.PureComponent && "shouldComponentUpdate",
    value: function value(nextProps, nextState) {
      return shallowCompare(this, nextProps, nextState);
    }
  }]);

  function DayPickerKeyboardShortcuts() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DayPickerKeyboardShortcuts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DayPickerKeyboardShortcuts)).call.apply(_getPrototypeOf2, [this].concat(args)));
    var phrases = _this.props.phrases;
    _this.keyboardShortcuts = getKeyboardShortcuts(phrases);
    _this.onShowKeyboardShortcutsButtonClick = _this.onShowKeyboardShortcutsButtonClick.bind(_assertThisInitialized(_this));
    _this.setShowKeyboardShortcutsButtonRef = _this.setShowKeyboardShortcutsButtonRef.bind(_assertThisInitialized(_this));
    _this.setHideKeyboardShortcutsButtonRef = _this.setHideKeyboardShortcutsButtonRef.bind(_assertThisInitialized(_this));
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DayPickerKeyboardShortcuts, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var phrases = this.props.phrases;

      if (nextProps.phrases !== phrases) {
        this.keyboardShortcuts = getKeyboardShortcuts(nextProps.phrases);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.handleFocus();
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      e.stopPropagation();
      var closeKeyboardShortcutsPanel = this.props.closeKeyboardShortcutsPanel; // Because the close button is the only focusable element inside of the panel, this
      // amounts to a very basic focus trap. The user can exit the panel by "pressing" the
      // close button or hitting escape

      switch (e.key) {
        case 'Escape':
          closeKeyboardShortcutsPanel();
          break;
        // do nothing - this allows the up and down arrows continue their
        // default behavior of scrolling the content of the Keyboard Shortcuts Panel
        // which is needed when only a single month is shown for instance.

        case 'ArrowUp':
        case 'ArrowDown':
          break;
        // completely block the rest of the keys that have functionality outside of this panel

        case 'Tab':
        case 'Home':
        case 'End':
        case 'PageUp':
        case 'PageDown':
        case 'ArrowLeft':
        case 'ArrowRight':
          e.preventDefault();
          break;

        default:
          break;
      }
    }
  }, {
    key: "onShowKeyboardShortcutsButtonClick",
    value: function onShowKeyboardShortcutsButtonClick() {
      var _this2 = this;

      var openKeyboardShortcutsPanel = this.props.openKeyboardShortcutsPanel; // we want to return focus to this button after closing the keyboard shortcuts panel

      openKeyboardShortcutsPanel(function () {
        _this2.showKeyboardShortcutsButton.focus();
      });
    }
  }, {
    key: "setShowKeyboardShortcutsButtonRef",
    value: function setShowKeyboardShortcutsButtonRef(ref) {
      this.showKeyboardShortcutsButton = ref;
    }
  }, {
    key: "setHideKeyboardShortcutsButtonRef",
    value: function setHideKeyboardShortcutsButtonRef(ref) {
      this.hideKeyboardShortcutsButton = ref;
    }
  }, {
    key: "handleFocus",
    value: function handleFocus() {
      if (this.hideKeyboardShortcutsButton) {
        // automatically move focus into the dialog by moving
        // to the only interactive element, the hide button
        this.hideKeyboardShortcutsButton.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          block = _this$props.block,
          buttonLocation = _this$props.buttonLocation,
          showKeyboardShortcutsPanel = _this$props.showKeyboardShortcutsPanel,
          closeKeyboardShortcutsPanel = _this$props.closeKeyboardShortcutsPanel,
          styles = _this$props.styles,
          phrases = _this$props.phrases,
          renderKeyboardShortcutsButton = _this$props.renderKeyboardShortcutsButton;
      var toggleButtonText = showKeyboardShortcutsPanel ? phrases.hideKeyboardShortcutsPanel : phrases.showKeyboardShortcutsPanel;
      var bottomRight = buttonLocation === BOTTOM_RIGHT;
      var topRight = buttonLocation === TOP_RIGHT;
      var topLeft = buttonLocation === TOP_LEFT;
      return React.createElement("div", null, renderKeyboardShortcutsButton && renderKeyboardShortcutsButton({
        // passing in context-specific props
        ref: this.setShowKeyboardShortcutsButtonRef,
        onClick: this.onShowKeyboardShortcutsButtonClick,
        ariaLabel: toggleButtonText
      }), renderKeyboardShortcutsButton || React.createElement("button", _extends({
        ref: this.setShowKeyboardShortcutsButtonRef
      }, css(styles.DayPickerKeyboardShortcuts_buttonReset, styles.DayPickerKeyboardShortcuts_show, bottomRight && styles.DayPickerKeyboardShortcuts_show__bottomRight, topRight && styles.DayPickerKeyboardShortcuts_show__topRight, topLeft && styles.DayPickerKeyboardShortcuts_show__topLeft), {
        type: "button",
        "aria-label": toggleButtonText,
        onClick: this.onShowKeyboardShortcutsButtonClick,
        onMouseUp: function onMouseUp(e) {
          e.currentTarget.blur();
        }
      }), React.createElement("span", css(styles.DayPickerKeyboardShortcuts_showSpan, bottomRight && styles.DayPickerKeyboardShortcuts_showSpan__bottomRight, topRight && styles.DayPickerKeyboardShortcuts_showSpan__topRight, topLeft && styles.DayPickerKeyboardShortcuts_showSpan__topLeft), "?")), showKeyboardShortcutsPanel && React.createElement("div", _extends({}, css(styles.DayPickerKeyboardShortcuts_panel), {
        role: "dialog",
        "aria-labelledby": "DayPickerKeyboardShortcuts_title",
        "aria-describedby": "DayPickerKeyboardShortcuts_description"
      }), React.createElement("div", _extends({}, css(styles.DayPickerKeyboardShortcuts_title), {
        id: "DayPickerKeyboardShortcuts_title"
      }), phrases.keyboardShortcuts), React.createElement("button", _extends({
        ref: this.setHideKeyboardShortcutsButtonRef
      }, css(styles.DayPickerKeyboardShortcuts_buttonReset, styles.DayPickerKeyboardShortcuts_close), {
        type: "button",
        tabIndex: "0",
        "aria-label": phrases.hideKeyboardShortcutsPanel,
        onClick: closeKeyboardShortcutsPanel,
        onKeyDown: this.onKeyDown
      }), React.createElement(CloseButton, css(styles.DayPickerKeyboardShortcuts_closeSvg))), React.createElement("ul", _extends({}, css(styles.DayPickerKeyboardShortcuts_list), {
        id: "DayPickerKeyboardShortcuts_description"
      }), this.keyboardShortcuts.map(function (_ref2) {
        var unicode = _ref2.unicode,
            label = _ref2.label,
            action = _ref2.action;
        return React.createElement(KeyboardShortcutRow, {
          key: label,
          unicode: unicode,
          label: label,
          action: action,
          block: block
        });
      }))));
    }
  }]);

  return DayPickerKeyboardShortcuts;
}(React.PureComponent || React.Component);

DayPickerKeyboardShortcuts.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
DayPickerKeyboardShortcuts.defaultProps = defaultProps;
export default withStyles(function (_ref3) {
  var _ref3$reactDates = _ref3.reactDates,
      color = _ref3$reactDates.color,
      font = _ref3$reactDates.font,
      zIndex = _ref3$reactDates.zIndex;
  return {
    DayPickerKeyboardShortcuts_buttonReset: {
      background: 'none',
      border: 0,
      borderRadius: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      padding: 0,
      cursor: 'pointer',
      fontSize: font.size,
      ':active': {
        outline: 'none'
      }
    },
    DayPickerKeyboardShortcuts_show: {
      width: 33,
      height: 26,
      position: 'absolute',
      zIndex: zIndex + 2,
      '::before': {
        content: '""',
        display: 'block',
        position: 'absolute'
      }
    },
    DayPickerKeyboardShortcuts_show__bottomRight: {
      bottom: 0,
      right: 0,
      '::before': {
        borderTop: '26px solid transparent',
        borderRight: "33px solid ".concat(color.core.primary),
        bottom: 0,
        right: 0
      },
      ':hover::before': {
        borderRight: "33px solid ".concat(color.core.primary_dark)
      }
    },
    DayPickerKeyboardShortcuts_show__topRight: {
      top: 0,
      right: 0,
      '::before': {
        borderBottom: '26px solid transparent',
        borderRight: "33px solid ".concat(color.core.primary),
        top: 0,
        right: 0
      },
      ':hover::before': {
        borderRight: "33px solid ".concat(color.core.primary_dark)
      }
    },
    DayPickerKeyboardShortcuts_show__topLeft: {
      top: 0,
      left: 0,
      '::before': {
        borderBottom: '26px solid transparent',
        borderLeft: "33px solid ".concat(color.core.primary),
        top: 0,
        left: 0
      },
      ':hover::before': {
        borderLeft: "33px solid ".concat(color.core.primary_dark)
      }
    },
    DayPickerKeyboardShortcuts_showSpan: {
      color: color.core.white,
      position: 'absolute'
    },
    DayPickerKeyboardShortcuts_showSpan__bottomRight: {
      bottom: 0,
      right: 5
    },
    DayPickerKeyboardShortcuts_showSpan__topRight: {
      top: 1,
      right: 5
    },
    DayPickerKeyboardShortcuts_showSpan__topLeft: {
      top: 1,
      left: 5
    },
    DayPickerKeyboardShortcuts_panel: {
      overflow: 'auto',
      background: color.background,
      border: "1px solid ".concat(color.core.border),
      borderRadius: 2,
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: zIndex + 2,
      padding: 22,
      margin: 33,
      textAlign: 'left' // TODO: investigate use of text-align throughout the library

    },
    DayPickerKeyboardShortcuts_title: {
      fontSize: 16,
      fontWeight: 'bold',
      margin: 0
    },
    DayPickerKeyboardShortcuts_list: {
      listStyle: 'none',
      padding: 0,
      fontSize: font.size
    },
    DayPickerKeyboardShortcuts_close: {
      position: 'absolute',
      right: 22,
      top: 22,
      zIndex: zIndex + 2,
      ':active': {
        outline: 'none'
      }
    },
    DayPickerKeyboardShortcuts_closeSvg: {
      height: 15,
      width: 15,
      fill: color.core.grayLighter,
      ':hover': {
        fill: color.core.grayLight
      },
      ':focus': {
        fill: color.core.grayLight
      }
    }
  };
}, {
  pureComponent: typeof React.PureComponent !== 'undefined'
})(DayPickerKeyboardShortcuts);