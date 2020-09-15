import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import DropdownAlert from "react-native-dropdownalert";

import AppNavigator from "./src/navigation/AppNavigator";
import { store, persistor } from "./src/store/store";
import { AlertUtil } from "./src/util/AlertUtil";

const App = () => {
  return (
    <Provider store={store}>
      {(console.disableYellowBox = true)}
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator></AppNavigator>
        <DropdownAlert
          defaultContainer={{
            padding: 8,
            paddingTop: StatusBar.currentHeight,
            flexDirection: "row",
          }}
          ref={(ref) => AlertUtil.setDropDown(ref)}
          onClose={() => AlertUtil.invokeOnClose()}
          closeInterval={1000}
        />
      </PersistGate>
    </Provider>
  );
};

export default App;
