import React from 'react';
import {
  View,
  Button
} from 'react-native';

const FirstComponent = (props) => {
  return (
    <View>
      <Button
        title='Go to Second Component'
        onPress={() => props.navigation.navigate('SecondComponent')} />
    </View>
  );
};

export default FirstComponent;