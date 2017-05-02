import React, { Component } from 'react';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { Text } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { connect } from 'react-redux';

class LoginForm extends Component {

    onChangeEmail(text) {
        this.props.emailChanged({text});
    }

    onChangePassword(text) {
        this.props.passwordChanged({text});
    }

    onButtonPress() {
        const {email, password} = this.props;
        this.props.loginUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size='large' />
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
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
                
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
};

export default connect(mapStateToProps, {
    emailChanged, 
    passwordChanged, 
    loginUser
})(LoginForm);