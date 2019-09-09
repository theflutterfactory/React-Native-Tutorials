import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button
} from 'react-native';
import { Divider } from 'react-native-elements';

class FoodDetailScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    console.log(navigation);
    return {
      title: 'Food Details',
      headerRight: (
        <Button
          onPress={() => { navigation.navigate('FoodForm', { food: navigation.getParam('food') }) }}
          title="Edit"
        />
      )
    }
  };

  render() {
    const food = this.props.navigation.getParam('food');

    console.log(food);
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{food.name}</Text>
        <Text style={styles.categoryText}>Category: {food.category}</Text>

        <Text style={styles.ingredientText}>Ingredients</Text>
        {
          food.subIngredients === undefined || food.subIngredients.length == 0 ?
            <Text>None</Text> : <FlatList
              data={food.subIngredients}
              contentContainerStyle={styles.listContainer}
              ItemSeparatorComponent={() =>
                <Divider style={{ backgroundColor: 'black' }} />}
              scrollEnabled={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) =>
                <Text style={styles.ingredientItemText}>{item}</Text>
              }
            />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 32,
    margin: 32
  },
  categoryText: {
    fontSize: 20,
    marginBottom: 32
  },
  ingredientText: {
    fontStyle: 'italic',
    fontSize: 18,
    marginBottom: 32
  },
  ingredientItemText: {
    fontSize: 16,
    alignSelf: 'center',
    marginBottom: 16,
    marginTop: 16
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  listContainer: {
    borderWidth: 0.5,
    width: 200,
    borderColor: 'grey'
  }
});

export default FoodDetailScreen;