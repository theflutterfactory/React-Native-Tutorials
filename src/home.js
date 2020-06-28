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
    <Title>Coding with Curry</Title>
    <ContentText>
      Styled Component is a very useful tool to add to your toolbox
    </ContentText>
    <ContentText>
      {
        `- Creating components with their owned contained style\n- Passing Props\n-Theming Components`
      }
    </ContentText>
    <RoundedButton
      title='LOGIN'
      onPress={() => navigation.navigate('Playground')} />
  </Container>