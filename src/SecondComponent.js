import React from 'react';
import {
  View,
  Button
} from 'react-native';

const SecondComponent = (props) => {
  return (
    <View>
      <Button
        title='Go to Third Component'
        onPress={() => props.navigation.navigate('ThirdComponent')} />
    </View>
  );
}

export default SecondComponent;