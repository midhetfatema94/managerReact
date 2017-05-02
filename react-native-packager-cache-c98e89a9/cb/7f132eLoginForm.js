Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _common = require('./common');

var _reactNative = require('react-native');

var _actions = require('../actions');

var _reactRedux = require('react-redux');

var LoginForm = function (_Component) {
    babelHelpers.inherits(LoginForm, _Component);

    function LoginForm() {
        babelHelpers.classCallCheck(this, LoginForm);
        return babelHelpers.possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).apply(this, arguments));
    }

    babelHelpers.createClass(LoginForm, [{
        key: 'onChangeEmail',
        value: function onChangeEmail(text) {
            this.props.emailChanged({ text: text });
        }
    }, {
        key: 'onChangePassword',
        value: function onChangePassword(text) {
            this.props.passwordChanged({ text: text });
        }
    }, {
        key: 'onButtonPress',
        value: function onButtonPress() {
            var _props = this.props,
                email = _props.email,
                password = _props.password;

            this.props.loginUser({ email: email, password: password });
        }
    }, {
        key: 'renderButton',
        value: function renderButton() {
            if (this.props.loading) {
                return _react2.default.createElement(_common.Spinner, { size: 'large' });
            }
            return _react2.default.createElement(
                _common.Button,
                { onPress: this.onButtonPress.bind(this) },
                'Login'
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _common.Card,
                null,
                _react2.default.createElement(
                    _common.CardSection,
                    null,
                    _react2.default.createElement(_common.Input, {
                        label: 'Email',
                        placeholder: 'email@gmail.com',
                        onChangeText: this.onChangeEmail.bind(this),
                        value: this.props.email
                    })
                ),
                _react2.default.createElement(
                    _common.CardSection,
                    null,
                    _react2.default.createElement(_common.Input, {
                        label: 'Password',
                        isPassword: true,
                        placeholder: 'password',
                        onChangeText: this.onChangePassword.bind(this),
                        value: this.props.password
                    })
                ),
                _react2.default.createElement(
                    _reactNative.Text,
                    { style: styles.errorTextStyle },
                    this.props.error
                ),
                _react2.default.createElement(
                    _common.CardSection,
                    null,
                    this.renderButton()
                )
            );
        }
    }]);
    return LoginForm;
}(_react.Component);

var styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

var mapStateToProps = function mapStateToProps(_ref) {
    var auth = _ref.auth;
    var email = auth.email,
        password = auth.password,
        error = auth.error,
        loading = auth.loading;

    return { email: email, password: password, error: error, loading: loading };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
    emailChanged: _actions.emailChanged,
    passwordChanged: _actions.passwordChanged,
    loginUser: _actions.loginUser
})(LoginForm);