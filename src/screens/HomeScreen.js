import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";

import AppHeader from "../components/common/AppHeader";
import appStyles from "../themes/styles/AppStyles";
import UserList from "../components/UserList/UserList";

const HomeScreen = () => {
  const userList = useSelector((state) => state.user);
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate("AddUser");
  };
  return (
    <SafeAreaView style={appStyles.container}>
      <ScrollView style={appStyles.scrollView}>
        <UserList item={userList} handleSubmit={handleSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

export const HomeScreenHeader = (navigation) => {
  return (
    <AppHeader
      leftComponent={{
        icon: "birthday-cake",
        type: "font-awesome",
      }}
      centerComponent={{ text: "Birthdays" }}
      rightComponent={{
        icon: "add",
        onPress: () => navigation.navigate("AddUser"),
      }}
    />
  );
};
