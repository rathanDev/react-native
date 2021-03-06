Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _props = require('../lib/props');

var _default = (_temp = _class = function (_Component) {
    babelHelpers.inherits(_default, _Component);

    function _default() {
        babelHelpers.classCallCheck(this, _default);
        return babelHelpers.possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    babelHelpers.createClass(_default, [{
        key: 'render',
        value: function render() {
            return null;
        }
    }]);
    return _default;
}(_react.Component), _class.displayName = 'Stop', _class.propTypes = {
    stopColor: _react.PropTypes.string,
    stopOpacity: _props.numberProp
}, _class.defaultProps = {
    stopColor: '#000',
    stopOpacity: 1
}, _temp);

exports.default = _default;