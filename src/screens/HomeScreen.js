import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import { useDispatch } from "react-redux";

import AppHeader from "../components/common/AppHeader";
import appStyles from "../themes/styles/AppStyles";
import UserList from "../components/UserList/UserList";
import { removeUser } from "../store/actions/UserActions";
import { AlertUtil } from "../util/AlertUtil";

const HomeScreen = () => {
  const userList = useSelector((state) => state.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSubmit = (id) => {
    dispatch(removeUser(id));
    AlertUtil.show("success", "Success", "User Deleted!!");
  };

  const addUser = () => {
    navigation.navigate("AddUser");
  };

  return (
    <SafeAreaView style={appStyles.container}>
      <ScrollView style={appStyles.scrollView}>
        <UserList
          item={userList}
          addUser={addUser}
          handleSubmit={handleSubmit}
        />
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
