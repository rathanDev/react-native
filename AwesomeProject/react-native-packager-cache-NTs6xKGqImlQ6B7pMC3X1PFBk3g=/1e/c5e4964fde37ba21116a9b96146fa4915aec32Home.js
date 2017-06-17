Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/jana/projects/react-native/AwesomeProject/src/components/Home.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Home = function (_Component) {
    babelHelpers.inherits(Home, _Component);

    function Home() {
        babelHelpers.classCallCheck(this, Home);

        var _this = babelHelpers.possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

        _this.state = {
            myState: "This is my state at Home"
        };
        return _this;
    }

    babelHelpers.createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactNative.View,
                { style: styles.container, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    }
                },
                _react2.default.createElement(
                    _reactNative.Text,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 28
                        }
                    },
                    'Open up App.js to start working on your app!'
                ),
                _react2.default.createElement(
                    _reactNative.Text,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                        }
                    },
                    'Changes you make will automatically reload.'
                ),
                _react2.default.createElement(
                    _reactNative.Text,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 30
                        }
                    },
                    'Shake your phone to open the developer menu.'
                ),
                _react2.default.createElement(
                    _reactNative.Text,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 31
                        }
                    },
                    'Change Change'
                ),
                _react2.default.createElement(
                    _reactNative.Text,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 32
                        }
                    },
                    'Another change'
                )
            );
        }
    }]);
    return Home;
}(_react.Component);

exports.default = Home;