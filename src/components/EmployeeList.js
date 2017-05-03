import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { employeeFetch } from '../actions';
import { connect } from 'react-redux';

class EmployeeList extends Component {
    
    render() {
        this.props.employeeFetch();
        return (
            <View>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
            </View>
        );
    }
}

const mapStateToProps = () => {

}

export default connect(null, {employeeFetch})(EmployeeList);