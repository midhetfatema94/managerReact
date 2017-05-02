import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {

    componentWillMount() {
        
        const config = {
            apiKey: 'AIzaSyAIMVwyJ_l8Ldjq34V9yFlW_AVzI1K6mdM',
            authDomain: 'managerreact-4884f.firebaseapp.com',
            databaseURL: 'https://managerreact-4884f.firebaseio.com',
            projectId: 'managerreact-4884f',
            storageBucket: 'managerreact-4884f.appspot.com',
            messagingSenderId: '11410660920'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;