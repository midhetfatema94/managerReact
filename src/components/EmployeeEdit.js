import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave } from '../actions';
import _ from 'lodash';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value })
        });
    }
    
    editEmployeeChanges() {

        const { name, phone, shift, uid } = this.props;
        console.log('edit employee changes', name, phone, shift);
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    deleteEmployee() {

    }

    textSchedule() {
        const { phone, shift } = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    render() {
        return(
            <Card>
                <EmployeeForm {...this.props} />
                
                <CardSection>
                    <Button onPress={this.editEmployeeChanges.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                
                <CardSection>
                    <Button onPress={this.textSchedule.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.deleteEmployee.bind(this)}>
                        Delete
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}

export default connect(mapStateToProps, {employeeUpdate, employeeSave})(EmployeeEdit);