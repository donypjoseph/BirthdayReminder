import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Card, Button } from "react-native-elements";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import appStyles from "../../themes/styles/AppStyles";

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
    setFieldValue("dob", moment(date).format("YYYY-MM-DD"));
    hideDatePicker();
  };

  return (
    <Card title="ADD NEW ENTRY">
      <Text style={appStyles.label}>Name</Text>
      <TextInput
        style={appStyles.input}
        onChangeText={handleChange("name")}
        value={values.name}
      />
      <Text style={appStyles.label}>Date of Birth</Text>
      <TouchableOpacity style={appStyles.input} onPress={showDatePicker}>
        <TextInput
          pointerEvents="none"
          value={moment(values.dob).format("YYYY-MM-DD")}
        />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={moment(values.dob).toDate()}
      />
      <View style={appStyles.button}>
        <Button type="solid" onPress={handleSubmit} title="Submit" />
      </View>
    </Card>
  );
};

export default AddUser;
