import React from 'react';
import {
  View
} from 'react-native';

import SecondComponent from './SecondComponent';

const FirstComponent = () => {
  return (
    <View>
      <SecondComponent />
    </View>
  );
};

export default FirstComponent;