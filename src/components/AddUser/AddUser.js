import React, { useState, useRef } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Card } from "react-native-elements";
import DefaultTheme from "../../themes/DefaultTheme";
import { Button } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

const AddUser = () => {
  const { control, handleSubmit, errors } = useForm();
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const firstNameRef = useRef();
  const data = moment(date).format("DD/MMM/YYYY");
  const onSubmit = (data) => {
    console.log(data);
  };
  const onFocus = (show) => {
    setShow(!show);
  };
  console.log("errors", errors);
  return (
    <Card title="ADD NEW ENTRY">
      <View style={styles.container}>
        <Text style={styles.label}>Name</Text>
        <Controller
          control={control}
          name="firstName"
          rules={{ required: "This is required" }}
          onFocus={() => {
            firstNameRef.current.focus();
          }}
          render={({ onChange, value }) => (
            <TextInput
              style={styles.input}
              onChangeText={(value) => onChange(value)}
              value={value}
              ref={firstNameRef}
            />
          )}
        />
        {errors.firstName && <Text>This is required.</Text>}
        <Text style={styles.label}>Date of Birth</Text>
        <Controller
          control={control}
          render={({ onChange, value }) => (
            <TextInput
              style={styles.input}
              onChangeText={(value) => onChange(value)}
              onFocus={() => onFocus(show)}
              value={data}
              rules={{ required: "This is required" }}
            />
          )}
          name="lastName"
        />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            is24Hour={true}
            display="default"
            onChange={(event, value) => setDate(value)}
          />
        )}
        <View style={styles.button}>
          <Button
            type="solid"
            title="Submit"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </Card>
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
