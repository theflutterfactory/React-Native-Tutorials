import React, { useState, useEffect } from 'react';

const FoodContext = React.createContext();

const FoodProvider = (props) => {

  const [name, setName] = useState('Tacos');
  const [calories, setCalories] = useState('80');

  setFoodFromUrl = async () => {
    const result = await fetch('https://api.openbrewerydb.org/breweries/5494')
    const brewery = await result.json()
    console.log(brewery.name);
  }

  useEffect(() => {
    console.log("useEffect called");
    setFoodFromUrl();
  })

  return (
    <FoodContext.Provider
      value={{
        name,
        calories,
        setName,
        setCalories
      }}
    >
      {props.children}
    </FoodContext.Provider>
  )
}

export { FoodProvider, FoodContext };
