import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'

const LoginForm = () => {

  return (
    <View style={styles.container}>
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
        <Text style={{ fontSize: 22, color: '#5fc9f8' }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
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
    fontSize: 18,
    color: 'red',
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16
  },
  input: {
    fontSize: 24,
    borderWidth: 1,
    padding: 12,
    marginBottom: 16,
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
  }
});

export default LoginForm;
