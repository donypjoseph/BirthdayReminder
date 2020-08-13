import React from "react";
import { Text, View } from "react-native";
import AppHeader from "../components/common/AppHeader";
import AddUser from "../components/AddUser/AddUser";
const AddUserScreen = ({ params }) => (
  <View>
    <AddUser />
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
