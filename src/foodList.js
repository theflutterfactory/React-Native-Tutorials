import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements'

class FoodList extends Component {

  static navigationOptions = {
    title: 'Food List',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'green',
    },
  };

  render() {
    console.log(this.props.navigation.getParam('deleteFood'));
    return (
      <FlatList style={styles.listContainer}
        data={this.props.navigation.getParam('foodList')}
        keyExtractor={(item, index) => item.key.toString()}
        renderItem={
          (data) =>
            <ListItem
              title={data.item.name}
              bottomDivider
              rightIcon={<Icon
                name='delete'
                size={36}
                onPress={
                  () => this.props.navigation.getParam('deleteFood')(data.item.key)} />
              }
            />
        }
      />
    );
  }
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'grey',
    padding: 16
  },
  listText: {
    fontSize: 30
  },
});

export default FoodList;