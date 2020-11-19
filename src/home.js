import React from 'react';

import { Container } from './styles/wrapper'
import { Title, ContentText } from './styles/text'
import { CustomImage } from './styles/image'
import { RoundedButton } from './styles/buttons'

const source = Platform.OS === 'ios' ? 'Futura' : 'serif';

export default Home = ({ navigation }) =>
  <Container >
    <CustomImage
      source={require('./assets/cheetah.png')}
    />
    <Title fontFamily={source}>Cheetah Coding</Title>
    <RoundedButton
      title='Open Webview'
      onPress={() => navigation.navigate('Playground')} />
  </Container>