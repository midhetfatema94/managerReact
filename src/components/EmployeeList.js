import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { employeeFetch } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';
import ListItem from './ListItem';

class EmployeeList extends Component {

    componentWillMount() {
        this.props.employeeFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2 
        });

        this.myDataSource = ds.cloneWithRows(employees);
    }

    renderEachRow(employee) {
        console.log('showing render row');
        return <ListItem employee={employee} />;
    }

    render() {
        console.log('employee list props', this.props.employees);
        return (
            <ListView
                enableEmptySections
                dataSource={this.myDataSource}
                renderRow={this.renderEachRow}
            />
        );
    }
}

const mapStateToProps = state => {
    
    const employees = _.map(state.employees, (val, uid) => {
        return {...val, uid};
    });
    return { employees };
}

export default connect(mapStateToProps, {employeeFetch})(EmployeeList);