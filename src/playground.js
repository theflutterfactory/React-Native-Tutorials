import React from 'react';
import { Title } from './styles/text'
import { Container } from './styles/wrapper'
import { RoundedInput } from './styles/input'
import { RoundedButton } from './styles/buttons'

export default Playground = () =>
  <Container>
    <Title>Login</Title>
    <RoundedInput placeholder='Username' />
    <RoundedInput password placeholder='Password' />
    <RoundedButton
      title='SUBMIT'
      width={'80%'}
    />
  </Container>