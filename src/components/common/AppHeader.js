import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Header } from "react-native-elements";

const AppHeader = () => (
  <Header
    placement="left"
    leftComponent={{
      icon: "birthday-cake",
      type: "font-awesome",
      color: "#fff",
    }}
    centerComponent={{ text: "Birthdays", style: { color: "#fff" } }}
    rightComponent={{ icon: "add", color: "#fff" }}
  />
);

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    height: 80,
    backgroundColor: "red",
    paddingTop: 0,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  leftSectionContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  middleSectionContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
  },
  rightSectionContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
});
export default AppHeader;
