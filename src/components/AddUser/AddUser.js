import React, { useState, useRef } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import { Button } from "react-native-elements";
import { Formik } from "formik";

import DefaultTheme from "../../themes/DefaultTheme";

const AddUser = () => {
  return (
    <Formik
      initialValues={{ name: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleSubmit, values }) => (
        <Card title="ADD NEW ENTRY">
          <View style={styles.container}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("name")}
              value={values.name}
            />
            <Text style={styles.label}>Date of Birth</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("dob")}
              value={values.dob}
            />
            <View style={styles.button}>
              <Button type="solid" onPress={handleSubmit} title="Submit" />
            </View>
          </View>
        </Card>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "#0e101c",
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    height: 40,
  },
  buttonInner: {
    color: DefaultTheme.buttonTextColor,
  },
  container: {
    justifyContent: "center",
    paddingTop: 10,
    padding: 8,
    backgroundColor: "white",
  },
  input: {
    backgroundColor: DefaultTheme.inputColor,
    borderColor: "red",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});

export default AddUser;
