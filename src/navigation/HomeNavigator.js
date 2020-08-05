import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen, { HomeScreenHeader } from "../screens/HomeScreen";
import AddUserScreen, { AddUserScreenHeader } from "../screens/AddUserScreen";

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: ({ navigation }) => {
            return <HomeScreenHeader {...navigation} />;
          },
        }}
      />
      <HomeStack.Screen
        name="AddUser"
        component={AddUserScreen}
        options={{
          header: ({ navigation }) => {
            return <AddUserScreenHeader {...navigation} />;
          },
        }}
      />
    </HomeStack.Navigator>
  );
};
