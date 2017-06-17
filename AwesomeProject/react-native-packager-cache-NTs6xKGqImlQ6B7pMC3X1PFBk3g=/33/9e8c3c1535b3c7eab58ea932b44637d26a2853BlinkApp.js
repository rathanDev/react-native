Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = '/home/jana/projects/react-native/AwesomeProject/src/components/BlinkApp.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Blink = function (_Component) {
    babelHelpers.inherits(Blink, _Component);

    function Blink(props) {
        babelHelpers.classCallCheck(this, Blink);

        var _this = babelHelpers.possibleConstructorReturn(this, (Blink.__proto__ || Object.getPrototypeOf(Blink)).call(this, props));

        _this.state = {
            showText: true
        };

        setInterval(function () {
            _this.setState(function (previousState) {
                return { showText: !previousState.showText };
            });
        }, 1000);
        return _this;
    }

    babelHelpers.createClass(Blink, [{
        key: 'render',
        value: function render() {
            var display = this.state.showText ? this.props.text : ' ';
            return _react2.default.createElement(
                _reactNative.Text,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                },
                display
            );
        }
    }]);
    return Blink;
}(_react.Component);

var BlinkApp = function (_Component2) {
    babelHelpers.inherits(BlinkApp, _Component2);

    function BlinkApp() {
        babelHelpers.classCallCheck(this, BlinkApp);
        return babelHelpers.possibleConstructorReturn(this, (BlinkApp.__proto__ || Object.getPrototypeOf(BlinkApp)).apply(this, arguments));
    }

    babelHelpers.createClass(BlinkApp, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactNative.View,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    }
                },
                _react2.default.createElement(Blink, { text: 'Props', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                    }
                }),
                _react2.default.createElement(Blink, { text: 'Vs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                    }
                }),
                _react2.default.createElement(Blink, { text: 'State', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                    }
                })
            );
        }
    }]);
    return BlinkApp;
}(_react.Component);

exports.default = BlinkApp;