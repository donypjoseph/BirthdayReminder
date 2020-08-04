import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import AppHeader from "../components/common/AppHeader";

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: ({ navigation }) => {
            return <AppHeader {...navigation} />;
          },
        }}
      />
    </HomeStack.Navigator>
  );
};
