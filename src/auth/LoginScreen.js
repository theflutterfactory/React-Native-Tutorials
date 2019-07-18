import React, { Component } from 'react';
import AuthForm from './AuthForm';

class LoginScreen extends Component {

  state = {
    authMode: 'login',
    user: null
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  switchAuthMode = () => {
    this.setState(prevState => ({
      authMode: prevState.authMode === 'login' ? 'signup' : 'login'
    }));
  }

  login = ({ email, password }) => {
  }

  signup = ({ email, password, displayName }) => {
  }

  render() {
    return (
      <AuthForm
        login={this.login}
        signup={this.signup}
        authMode={this.state.authMode}
        switchAuthMode={this.switchAuthMode}
      />
    );
  }
}


export default LoginScreen;