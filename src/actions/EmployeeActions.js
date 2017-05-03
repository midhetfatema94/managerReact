import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_FETCH_SUCCESS
} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    console.log(name, phone, shift);
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(() => {
            Actions.employeeList({ type: 'reset' })
            dispatch({ type: EMPLOYEE_CREATE })
        });
    };
}

export const employeeFetch = () => {
    return(dispatch) => {
        const { currentUser } = firebase.auth();
        firebase.database.ref(`/users/${currentUser.uid}/employees`)
         .on('value', snapshot => {
            dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() })
         });
    };
}