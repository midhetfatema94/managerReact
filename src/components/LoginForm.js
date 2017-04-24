import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';
import { connect } from 'react-redux';

class LoginForm extends Component {

    onChangeEmail(text) {
        this.props.emailChanged()
    }

    onChangePassword(text) {
        this.props.passwordChanged()
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email" 
                        placeholder="email@gmail.com"
                        onChangeText={this.onChangeEmail.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Password" 
                        isPassword 
                        placeholder="password"
                        onChangeText={this.onChangePassword.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};

export default connect(mapStateToProps, {emailChanged, passwordChanged})(LoginForm);