Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.alignEnum = exports.meetOrSliceTypes = undefined;

exports.default = function (props) {
    var viewBox = props.viewBox,
        preserveAspectRatio = props.preserveAspectRatio;


    if (!viewBox) {
        return null;
    }

    var params = viewBox.trim().split(spacesRegExp);

    if (params.length === 4 && params.every(function (param) {
        return !isNaN(+params);
    })) {
        console.warn('Invalid `viewBox` prop:' + viewBox);
        return null;
    }

    var modes = preserveAspectRatio ? preserveAspectRatio.trim().split(spacesRegExp) : [];

    var meetOrSlice = meetOrSliceTypes[modes[1]] || 0;
    var align = alignEnum[modes[0]] || 'xMidYMid';

    return {
        minX: +params[0],
        minY: +params[1],
        vbWidth: +params[2],
        vbHeight: +params[3],
        align: align,
        meetOrSlice: meetOrSlice
    };
};

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = babelHelpers.interopRequireDefault(_createReactNativeComponentClass);

var _attributes = require('../attributes');

var meetOrSliceTypes = {
    meet: 0,
    slice: 1,
    none: 2
};

var alignEnum = ['xMinYMin', 'xMidYMin', 'xMaxYMin', 'xMinYMid', 'xMidYMid', 'xMaxYMid', 'xMinYMax', 'xMidYMax', 'xMaxYMax', 'none'].reduce(function (prev, name) {
    prev[name] = name;
    return prev;
}, {});

var spacesRegExp = /\s+/;

exports.meetOrSliceTypes = meetOrSliceTypes;
exports.alignEnum = alignEnum;