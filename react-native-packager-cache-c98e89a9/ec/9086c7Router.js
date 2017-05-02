var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNativeRouterFlux = require('react-native-router-flux');

var _LoginForm = require('./components/LoginForm');

var _LoginForm2 = babelHelpers.interopRequireDefault(_LoginForm);

var RouterComponent = function RouterComponent() {
    return _react2.default.createElement(
        _reactNativeRouterFlux.Router,
        null,
        _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'login', component: _LoginForm2.default, title: 'Please Login' })
    );
};