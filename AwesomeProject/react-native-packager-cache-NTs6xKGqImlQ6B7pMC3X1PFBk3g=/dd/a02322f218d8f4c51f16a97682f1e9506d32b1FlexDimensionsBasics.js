Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = '/home/jana/projects/react-native/AwesomeProject/src/components/FlexDimensionsBasics.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var FlexDimensionsBasics = function (_Component) {
    babelHelpers.inherits(FlexDimensionsBasics, _Component);

    function FlexDimensionsBasics() {
        babelHelpers.classCallCheck(this, FlexDimensionsBasics);
        return babelHelpers.possibleConstructorReturn(this, (FlexDimensionsBasics.__proto__ || Object.getPrototypeOf(FlexDimensionsBasics)).apply(this, arguments));
    }

    babelHelpers.createClass(FlexDimensionsBasics, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactNative.View,
                { style: { flex: 1 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8
                    }
                },
                _react2.default.createElement(_reactNative.View, { style: { flex: 1, backgroundColor: 'powderblue' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 9
                    }
                }),
                _react2.default.createElement(_reactNative.View, { style: { flex: 2, backgroundColor: 'purple' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                }),
                _react2.default.createElement(_reactNative.View, { style: { flex: 3, backgroundColor: 'green' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                })
            );
        }
    }]);
    return FlexDimensionsBasics;
}(_react.Component);

exports.default = FlexDimensionsBasics;