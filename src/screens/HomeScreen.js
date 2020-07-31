import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => (
  <View>
    <Text>Hello</Text>
  </View>
);

const styles = StyleSheet.create({
  TextStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingRight: 15,
    paddingLeft: 15,
  },
});
export default HomeScreen;
