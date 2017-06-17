Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = '/home/jana/projects/react-native/AwesomeProject/src/components/Bananas.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Bananas = function (_Component) {
    babelHelpers.inherits(Bananas, _Component);

    function Bananas() {
        babelHelpers.classCallCheck(this, Bananas);
        return babelHelpers.possibleConstructorReturn(this, (Bananas.__proto__ || Object.getPrototypeOf(Bananas)).apply(this, arguments));
    }

    babelHelpers.createClass(Bananas, [{
        key: 'render',
        value: function render() {
            var pic = {
                uri: 'https://s-media-cache-ak0.pinimg.com/736x/87/23/f1/8723f1556cbf71b71bda839e71322a65.jpg'
            };
            return _react2.default.createElement(_reactNative.Image, { source: pic, style: { width: 193, height: 110 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            });
        }
    }]);
    return Bananas;
}(_react.Component);

exports.default = Bananas;