import "react-native-gesture-handler";
import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import AppNavigator from "./src/navigation/AppNavigator";
import userReducer from "./src/store/reducers/UserReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator></AppNavigator>
    </Provider>
  );
};

export default App;
