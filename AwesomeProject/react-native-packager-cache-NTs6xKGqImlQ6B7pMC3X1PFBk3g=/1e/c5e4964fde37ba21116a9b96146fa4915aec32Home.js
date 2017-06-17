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
        var _ref;

        var _temp, _this, _ret;

        babelHelpers.classCallCheck(this, Home);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            myState: "This is my state at Home"
        }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }

    babelHelpers.createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactNative.View,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                    }
                },
                _react2.default.createElement(
                    _reactNative.Text,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 13
                        }
                    },
                    this.state.myState
                )
            );
        }
    }]);
    return Home;
}(_react.Component);

exports.default = Home;