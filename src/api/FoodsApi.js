import firebase from 'react-native-firebase';


export function login({ email, password }) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((value) => console.log(value))
}

export function signup({ email, password, displayName }) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userInfo) => {
      console.log(userInfo)
      userInfo.user.updateProfile({ displayName: displayName.trim() })
        .then(() => { })
    })
}

export function subscribeToAuthChanges(authStateChanged) {
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
    authStateChanged(user);
  })
}

export function signout(onSignedOut) {
  firebase.auth().signOut()
    .then(() => {
      onSignedOut();
    })
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