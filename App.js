/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { StyleSheet, View, Text } from "react-native";

const App = () => {
  return (
    <View style={styles.body}>
      <Text>React Native Project</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "red",
  },
});

export default App;
