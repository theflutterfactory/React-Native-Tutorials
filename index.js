import React from 'react';
import { AppRegistry } from 'react-native';
import { RecoilRoot } from 'recoil';
import App from './App';
import { name as appName } from './app.json'

const RecoilTutorial = () =>
  <RecoilRoot>
    <App />
  </RecoilRoot>

AppRegistry.registerComponent(appName, () => RecoilTutorial);
