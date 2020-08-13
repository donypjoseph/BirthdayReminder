import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Card } from "react-native-elements";
import DefaultTheme from "../../themes/DefaultTheme";
import { Button } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";

const AddUser = ({ params }) => {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  return (
    <Card title="ADD NEW ENTRY">
      <View style={styles.container}>
        <Text style={styles.label}>Name</Text>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="Name"
        />
        <Text style={styles.label}>Last name</Text>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="lastName"
        />
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
        />
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
