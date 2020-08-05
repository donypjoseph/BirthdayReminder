import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Header } from "react-native-elements";

const AppHeader = (props) => (
  <Header
    placement={props.placement}
    leftComponent={{
      icon: props.leftComponent?.icon,
      text: props.leftComponent?.text,
      type: props.leftComponent?.type,
      color: "#fff",
      size: 30,
      style: { color: "#fff" },
      onPress: props.leftComponent?.onPress,
    }}
    centerComponent={{
      text: props.centerComponent?.text,
      style: { color: "#fff" },
    }}
    rightComponent={{
      icon: props.rightComponent?.icon,
      color: "#fff",
      size: 30,
      onPress: props.rightComponent?.onPress,
      style: { color: "#fff" },
    }}
    containerStyle={{
      color: "#3D6DCC",
      justifyContent: "space-around",
    }}
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
