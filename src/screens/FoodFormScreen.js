import React, { Component } from 'react';
import FoodForm from '../ui/FoodForm';
export default class FoodFormScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    console.log(navigation);
    return {
      title: 'New Food'
    }
  };

  state = {
    foodName: null,
    category: null,
    currentSubIngredient: null,
    subIngredients: []
  }

  setFoodName = (text) => {
    this.setState(prevState => ({
      foodName: prevState.foodName = text
    }))
  }

  setCategory = (text) => {
    this.setState(prevState => ({
      category: prevState.category = text
    }))
  }

  setCurrentSubIngredient = (text) => {
    this.setState(prevState => ({
      currentSubIngredient: prevState.currentSubIngredient = text
    }));
  }

  submitSubIngredients = () => {
    let ingredient = this.state.currentSubIngredient;

    if (ingredient && ingredient.length > 2) {
      this.setState(prevState => ({
        subIngredients: [...prevState.subIngredients, ingredient],
      }))
    }
  }

  render() {
    return (
      <FoodForm
        setFoodName={this.setFoodName}
        setCategory={this.setCategory}
        setSubIngredients={this.setCurrentSubIngredient}
        submitSubIngredients={this.submitSubIngredients}
        ingredientArray={this.state.subIngredients}
        onFoodAdded={this.props.navigation.state.params}
      />
    );
  }
}