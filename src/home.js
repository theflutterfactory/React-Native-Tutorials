import React from 'react';

import { Container } from './styles/wrapper'
import { Title, ContentText } from './styles/text'
import { CustomImage } from './styles/image'
import { RoundedButton } from './styles/buttons'

export default Home = ({ navigation }) =>
  <Container >
    <CustomImage
      source={require('./assets/cc_logo.png')}
    />
    <Title>Cheetah Coding</Title>
    <ContentText>
      This is the master branch. As you can you, there's not much here.
      This branch uses Styled Components. Styled Components is a very useful tool to add to your toolbox.
      If you're not familiar with that library, checkout the Styled Components video on the channel.
    </ContentText>
    <RoundedButton
      title='LOGIN'
      onPress={() => navigation.navigate('Playground')} />
  </Container>