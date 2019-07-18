import firebase from 'react-native-firebase';


export function login({ email, password }) {
}

export function signup({ email, password, displayName }) {
}

export function addFood(food, addComplete) {
  firebase.firestore()
    .collection('Foods')
    .add({
      name: food.name,
      color: food.color,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then((snapshot) => snapshot.get()
    ).then((foodData) => addComplete(foodData.data()))
    .catch((error) => console.log(error));
}

export async function getFoods(foodsRetreived) {

  var foodList = [];

  var snapshot = await firebase.firestore()
    .collection('Foods')
    .orderBy('createdAt')
    .get()

  snapshot.forEach((doc) => {
    foodList.push(doc.data());
  });

  console.log(foodList);

  foodsRetreived(foodList);
}