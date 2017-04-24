import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

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
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;