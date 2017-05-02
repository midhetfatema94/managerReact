Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Header = undefined;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Header = function Header(props) {
    var textStyle = styles.textStyle,
        viewStyle = styles.viewStyle;

    return _react2.default.createElement(
        _reactNative.View,
        { style: viewStyle },
        _react2.default.createElement(
            _reactNative.Text,
            { style: textStyle },
            props.headerText
        )
    );
};

var styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 60,
        paddingBottom: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};
exports.Header = Header;