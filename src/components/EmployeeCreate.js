import React, { Component } from 'react';
// import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    
    createNewEmployee() {
        const { name, phone, shift } = this.props
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday'});
    }
    
    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.createNewEmployee.bind(this)}>
                        Save
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);