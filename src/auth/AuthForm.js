import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';
import { Button, Text } from 'react-native-elements'
import { withFormik } from 'formik';

const AuthForm = (props) => {

  displayNameInput = (
    <View>
      <TextInput
        style={styles.formInput}
        onChangeText={text => props.setFieldValue('displayName', text)}
        placeholder='Display Name'
      />
      <Text style={styles.validationText}>{props.errors.displayName}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text h3 style={styles.header}>Coding with Curry</Text>
      {props.authMode === 'signup' ? displayNameInput : null}
      <TextInput
        style={styles.formInput}
        onChangeText={text => props.setFieldValue('email', text)}
        placeholder='email'
      />
      <Text style={styles.validationText}> {props.errors.email}</Text>
      <TextInput
        style={styles.formInput}
        secureTextEntry={true}
        onChangeText={text => props.setFieldValue('password', text)}
        placeholder='password'
      />
      <Text style={styles.validationText}> {props.errors.password}</Text>
      <Button
        onPress={() => props.handleSubmit()}
        buttonStyle={styles.button}
        title={props.authMode === 'login' ? 'Login' : 'Create Account'} />
      <Button
        backgroundColor='transparent'
        color='black'
        buttonStyle={styles.button}
        onPress={() => props.switchAuthMode()}
        title={props.authMode === 'login' ? 'Switch to Signup' : 'Switch to Login'} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 32
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  validationText: {
    marginTop: 8,
    marginBottom: 16,
    color: 'red',
    alignSelf: 'center'
  },
  formInput: {
    width: 300,
    height: 50,
    borderColor: '#B5B4BC',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8
  },
  button: {
    width: 200,
    marginBottom: 16
  }
});

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),
  validate: (values, props) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email Required';
    } else if (!values.email) {
      errors.email = 'Email Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Password Required';
    } else if (values.password.length < 10) {
      errors.password = 'Minimum length of password is 10 characters';
    }

    if (props.authMode === 'signup') {
      if (!values.displayName) {
        errors.displayName = 'Display Name Required'
      } else if (values.displayName.length < 5) {
        errors.displayName = 'Minimum length of display name is 5 characters';
      }
    }

    return errors;
  },
  handleSubmit: (values, { props }) => {
  },
})(AuthForm);