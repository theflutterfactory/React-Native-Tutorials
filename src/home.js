import React from 'react';

import { Container } from './styles/wrapper'
import { Title } from './styles/text'
import { CheetahButton, ButtonContainer } from './styles/buttons'
import { FlatList, Dimensions } from 'react-native'
import { ListItem } from './components/listItem';
import { ListDivider } from './styles/listItem';

export default Home = ({ navigation }) =>
  <Container >
    <Title>Cheetah Coding</Title>
    <ButtonContainer>
      <CheetahButton
        width={Dimensions.get('window').width / 3}
        title='BUTTON 1'
        onPress={() => navigation.navigate('Playground')} />
      <CheetahButton
        width={Dimensions.get('window').width / 3}
        title='BUTTON 2'
        onPress={() => navigation.navigate('Playground')} />
    </ButtonContainer>
    <FlatList
      ItemSeparatorComponent={() => <ListDivider />}
      data={[
        { key: 'Dart' },
        { key: 'JavaScript' },
        { key: 'PHP' },
        { key: 'C++' },
        { key: 'C' },
        { key: 'Java' },
        { key: 'Ruby' },
        { key: 'Pearl' },
        { key: 'Lisp' },
        { key: 'C#' },
      ]}
      renderItem={({ item }) => <ListItem name={item.key} />}
    />
  </Container>