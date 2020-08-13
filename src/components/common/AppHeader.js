import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Header } from "react-native-elements";
import DefaultTheme from "../../themes/DefaultTheme";

const AppHeader = (props) => (
  <Header
    placement={props.placement}
    leftComponent={{
      icon: props.leftComponent?.icon,
      text: props.leftComponent?.text,
      type: props.leftComponent?.type,
      color: DefaultTheme.headerTextColor,
      size: 30,
      style: { color: DefaultTheme.headerTextColor },
      onPress: props.leftComponent?.onPress,
    }}
    centerComponent={{
      text: props.centerComponent?.text,
      style: { color: DefaultTheme.headerTextColor },
    }}
    rightComponent={{
      icon: props.rightComponent?.icon,
      color: DefaultTheme.headerTextColor,
      size: 30,
      onPress: props.rightComponent?.onPress,
      style: { color: DefaultTheme.headerTextColor },
    }}
    containerStyle={styles.containerStyle}
  />
);

const styles = StyleSheet.create({
  containerStyle: {
    color: "#3D6DCC",
    justifyContent: "space-around",
  },
});
export default AppHeader;
