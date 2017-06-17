Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/jana/projects/react-native/AwesomeProject/src/components/Home.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _BlinkApp = require('./BlinkApp');

var _BlinkApp2 = babelHelpers.interopRequireDefault(_BlinkApp);

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
            return _react2.default.createElement(_BlinkApp2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            });
        }
    }]);
    return Home;
}(_react.Component);

exports.default = Home;