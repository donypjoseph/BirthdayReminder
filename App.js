import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import AppNavigator from "./src/navigation/AppNavigator";
import { store, persistor } from "./src/store/store";

const App = () => {
  return (
    <Provider store={store}>
      {(console.disableYellowBox = true)}
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator></AppNavigator>
      </PersistGate>
    </Provider>
  );
};

export default App;
