import React from 'react';
import {
  StyleSheet,
  FlatList
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements'
import { useFoodList } from './hooks/useFoodList';

const FoodList = () => {

  const foodHook = useFoodList();

  return (
    <FlatList style={styles.listContainer}
      data={foodHook.foodList}
      keyExtractor={(item, index) => item.key.toString()}
      renderItem={
        (data) =>
          <ListItem
            title={data.item.name}
            bottomDivider
            rightIcon={<Icon
              name='delete'
              size={36}
              onPress={() => foodHook.deleteFood(data.item.key)} />
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