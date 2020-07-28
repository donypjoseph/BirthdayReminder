import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeNavigator } from "./HomeNavigator";

const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);

export default AppNavigator;
