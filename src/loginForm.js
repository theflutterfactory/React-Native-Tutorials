import React from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native'

const LoginForm = () => {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.image}
        source={require('./assets/logo.png')}
      />
      <Text style={styles.title}>React Hook Form</Text>
      <TextInput
        placeholder='Name'
        style={styles.input}
        onChangeText={() => { }}
      />
      <TextInput
        placeholder='Email'
        style={styles.input}
        onChangeText={() => { }}
      />
      <TouchableOpacity
        onPress={() => { }}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 36,
    marginBottom: 30,
    marginTop: 16,
    color: 'white'
  },
  error: {
    fontSize: 16,
    color: 'red',
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 36,
    marginRight: 36
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    padding: 12,
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  image: {
    width: 120,
    height: 120,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 100,
  },
  button: {
    fontSize: 20,
    color: 'white',
    width: 120,
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: '#c01c00',
    padding: 8,
    textAlign: 'center'
  }
});

export default LoginForm;
