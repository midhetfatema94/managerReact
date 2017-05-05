import React, { Component } from 'react';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import _ from 'lodash';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {

    state = { showModal: false };

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

    onAccept() {
        const { uid } = this.props.employee;
        this.props.employeeDelete({ uid });
    }

    onDecline() {
        this.setState({ showModal: false });
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
                    <Button 
                    onPress={() => {this.setState({ showModal: !this.state.showModal })}}
                    >
                        Delete
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}

export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);