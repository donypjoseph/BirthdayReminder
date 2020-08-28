import React, { useState, useRef } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-elements";
import { Button } from "react-native-elements";
import { Formik } from "formik";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import DefaultTheme from "../../themes/DefaultTheme";

export const AddUser = (props) => {
  const { handleChange, handleSubmit, values, setFieldValue } = props;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setFieldValue("myDate", moment(date).format("YYYY-MM-DD"));
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Card title="ADD NEW ENTRY">
        <View style={styles.container}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("name")}
            value={values.name}
          />
          <Text style={styles.label}>Date of Birth</Text>
          <TouchableOpacity style={styles.input} onPress={showDatePicker}>
            <TextInput
              pointerEvents="none"
              value={moment(values.myDate).format("YYYY-MM-DD")}
            />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            date={moment(values.myDate).toDate()}
          />
          <View style={styles.button}>
            <Button type="solid" onPress={handleSubmit} title="Submit" />
          </View>
        </View>
      </Card>
    </View>
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
