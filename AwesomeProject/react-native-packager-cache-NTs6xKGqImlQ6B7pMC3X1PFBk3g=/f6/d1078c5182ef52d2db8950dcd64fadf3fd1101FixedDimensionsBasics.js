Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = '/home/jana/projects/react-native/AwesomeProject/src/components/FixedDimensionsBasics.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var FixedDimensionsBasics = function (_Component) {
    babelHelpers.inherits(FixedDimensionsBasics, _Component);

    function FixedDimensionsBasics() {
        babelHelpers.classCallCheck(this, FixedDimensionsBasics);
        return babelHelpers.possibleConstructorReturn(this, (FixedDimensionsBasics.__proto__ || Object.getPrototypeOf(FixedDimensionsBasics)).apply(this, arguments));
    }

    babelHelpers.createClass(FixedDimensionsBasics, [{
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
                _react2.default.createElement(_reactNative.View, { style: { width: 50, height: 50, backgroundColor: 'powderblue' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                }),
                _react2.default.createElement(_reactNative.View, { style: { width: 100, height: 100, backgroundColor: 'purple' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                }),
                _react2.default.createElement(_reactNative.View, { style: { width: 150, height: 150, backgroundColor: 'green' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                    }
                })
            );
        }
    }]);
    return FixedDimensionsBasics;
}(_react.Component);

exports.default = FixedDimensionsBasics;