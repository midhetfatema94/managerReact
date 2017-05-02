Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loginUser = exports.passwordChanged = exports.emailChanged = undefined;

var _types = require('./types');

var _firebase = require('firebase');

var _firebase2 = babelHelpers.interopRequireDefault(_firebase);

var emailChanged = exports.emailChanged = function emailChanged(_ref) {
    var text = _ref.text;

    return {
        type: _types.EMAIL_CHANGED,
        payload: text
    };
};

var passwordChanged = exports.passwordChanged = function passwordChanged(_ref2) {
    var text = _ref2.text;

    return {
        type: _types.PASSWORD_CHANGED,
        payload: text
    };
};

var loginUser = exports.loginUser = function loginUser(_ref3) {
    var email = _ref3.email,
        password = _ref3.password;

    return function (dispatch) {
        dispatch({ type: _types.LOGIN_USER });
        _firebase2.default.auth().signInWithEmailAndPassword(email, password).then(function (user) {
            return loginUserSuccess(dispatch, user);
        }).catch(function () {
            _firebase2.default.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
                return loginUserSuccess(dispatch, user);
            }).catch(function () {
                return loginUserFail(dispatch);
            });
        });
    };
};

var loginUserSuccess = function loginUserSuccess(dispatch, user) {
    dispatch({
        type: _types.LOGIN_USER_SUCCESS,
        payload: user
    });
};

var loginUserFail = function loginUserFail(dispatch) {
    dispatch({ type: _types.LOGIN_USER_FAIL });
};