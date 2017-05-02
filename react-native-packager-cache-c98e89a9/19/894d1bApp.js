Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reducers = require('./reducers');

var _reducers2 = babelHelpers.interopRequireDefault(_reducers);

var _firebase = require('firebase');

var _firebase2 = babelHelpers.interopRequireDefault(_firebase);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = babelHelpers.interopRequireDefault(_reduxThunk);

var _Router = require('./Router');

var _Router2 = babelHelpers.interopRequireDefault(_Router);

var App = function (_Component) {
    babelHelpers.inherits(App, _Component);

    function App() {
        babelHelpers.classCallCheck(this, App);
        return babelHelpers.possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    babelHelpers.createClass(App, [{
        key: 'componentWillMount',
        value: function componentWillMount() {

            var config = {
                apiKey: 'AIzaSyAIMVwyJ_l8Ldjq34V9yFlW_AVzI1K6mdM',
                authDomain: 'managerreact-4884f.firebaseapp.com',
                databaseURL: 'https://managerreact-4884f.firebaseio.com',
                projectId: 'managerreact-4884f',
                storageBucket: 'managerreact-4884f.appspot.com',
                messagingSenderId: '11410660920'
            };
            _firebase2.default.initializeApp(config);
        }
    }, {
        key: 'render',
        value: function render() {
            var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));

            return _react2.default.createElement(
                _reactRedux.Provider,
                { store: store },
                _react2.default.createElement(_Router2.default, null)
            );
        }
    }]);
    return App;
}(_react.Component);

exports.default = App;