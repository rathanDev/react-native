Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/jana/projects/react-native/AwesomeProject/src/components/MapViewExample.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

exports.default = MapViewExample = function MapViewExample(props) {
    return _react2.default.createElement(_reactNative.MapView, {
        style: styles.map,
        showsUserLocation: false,
        followUserLocation: false,
        zoomEnabled: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    });
};

var styles = _reactNative.StyleSheet.create({
    map: {
        height: 400,
        marginTop: 80
    }
});