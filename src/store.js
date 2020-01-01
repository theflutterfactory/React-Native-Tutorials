import { createStore, combineReducers } from 'redux';
import foodReducer from './reducers/foodReducer';

const rootReducer = combineReducers({
  foodReducer: foodReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;