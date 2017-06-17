Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = '/home/jana/projects/react-native/AwesomeProject/src/components/LotsOfGreetings.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Greeting = function (_Component) {
    babelHelpers.inherits(Greeting, _Component);

    function Greeting() {
        babelHelpers.classCallCheck(this, Greeting);
        return babelHelpers.possibleConstructorReturn(this, (Greeting.__proto__ || Object.getPrototypeOf(Greeting)).apply(this, arguments));
    }

    babelHelpers.createClass(Greeting, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactNative.Text,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 9
                    }
                },
                this.props.name
            );
        }
    }]);
    return Greeting;
}(_react.Component);

var LotsOfGreetings = function (_Component2) {
    babelHelpers.inherits(LotsOfGreetings, _Component2);

    function LotsOfGreetings() {
        babelHelpers.classCallCheck(this, LotsOfGreetings);
        return babelHelpers.possibleConstructorReturn(this, (LotsOfGreetings.__proto__ || Object.getPrototypeOf(LotsOfGreetings)).apply(this, arguments));
    }

    babelHelpers.createClass(LotsOfGreetings, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactNative.View,
                { style: { alignItems: 'center' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    }
                },
                _react2.default.createElement(Greeting, { name: 'configuration', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                }),
                _react2.default.createElement(Greeting, { name: 'beanSource', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                })
            );
        }
    }]);
    return LotsOfGreetings;
}(_react.Component);

exports.default = LotsOfGreetings;