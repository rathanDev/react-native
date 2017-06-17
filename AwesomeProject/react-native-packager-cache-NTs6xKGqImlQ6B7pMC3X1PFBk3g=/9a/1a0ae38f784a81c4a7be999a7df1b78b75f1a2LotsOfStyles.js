Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = '/home/jana/projects/react-native/AwesomeProject/src/components/LotsOfStyles.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _default = function (_Component) {
    babelHelpers.inherits(_default, _Component);

    function _default() {
        babelHelpers.classCallCheck(this, _default);
        return babelHelpers.possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    babelHelpers.createClass(_default, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactNative.View,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 7
                    }
                },
                _react2.default.createElement(
                    _reactNative.Text,
                    { style: styles.red, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 8
                        }
                    },
                    'just red'
                ),
                _react2.default.createElement(
                    _reactNative.Text,
                    { style: styles.bigBlue, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 9
                        }
                    },
                    'Blu...ue'
                ),
                _react2.default.createElement(
                    _reactNative.Text,
                    { style: [styles.bigBlue, styles.red], __source: {
                            fileName: _jsxFileName,
                            lineNumber: 11
                        }
                    },
                    'blue, then red'
                ),
                _react2.default.createElement(
                    _reactNative.Text,
                    { style: [styles.red, styles.bigBlue], __source: {
                            fileName: _jsxFileName,
                            lineNumber: 12
                        }
                    },
                    'red, then blue'
                )
            );
        }
    }]);
    return _default;
}(_react.Component);

exports.default = _default;


var styles = _reactNative.StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    },
    red: {
        color: 'red'
    }
});