import React from 'react';

import { Container } from './styles/wrapper'
import { Title, ContentText } from './styles/text'
import { CustomImage } from './styles/image'
import { RoundedButton } from './styles/buttons'

export default Home = ({ navigation }) =>
  <Container >
    <CustomImage
      source={require('./assets/cheetah.png')}
    />
    <Title>Cheetah Coding</Title>
    <RoundedButton
      title='Open Webview'
      onPress={() => navigation.navigate('Playground')} />
  </Container>