Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = '/home/jana/projects/react-native/AwesomeProject/App.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Home = require('./src/components/Home');

var _Home2 = babelHelpers.interopRequireDefault(_Home);

var App = function (_Component) {
    babelHelpers.inherits(App, _Component);

    function App() {
        babelHelpers.classCallCheck(this, App);
        return babelHelpers.possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    babelHelpers.createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactNative.View,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 9
                    }
                },
                _react2.default.createElement(_Home2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                })
            );
        }
    }]);
    return App;
}(_react.Component);

exports.default = App;


var styles = _reactNative.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});