import React from 'react';
import {
  StyleSheet,
  FlatList
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';
import { deleteFood } from './actions/food';

const FoodList = () => {

  const dispatch = useDispatch();

  const deleteCurrent = (key) => dispatch(deleteFood(key))

  const foods = useSelector(state => state.foodReducer.foodList)

  return (
    <FlatList style={styles.listContainer}
      data={foods}
      keyExtractor={(item, index) => item.key.toString()}
      renderItem={
        (data) =>
          <ListItem
            title={data.item.name}
            bottomDivider
            rightIcon={<Icon
              name='delete'
              size={36}
              onPress={() => deleteCurrent(data.item.key)} />
            }
          />
      }
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#212121',
    padding: 16
  },
  listText: {
    fontSize: 30
  },
});

export default FoodList;