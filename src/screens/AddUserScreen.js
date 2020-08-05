import React from "react";
import { Text, View } from "react-native";
import AppHeader from "../components/common/AppHeader";

const AddUserScreen = ({ params }) => (
  <View>
    <Text>componentName</Text>
  </View>
);

export default AddUserScreen;

export const AddUserScreenHeader = (navigation) => {
  return (
    <AppHeader
      leftComponent={{
        text: "Cancel",
        onPress: () => navigation.goBack(),
      }}
      centerComponent={{ text: "Birthdays" }}
    />
  );
};
