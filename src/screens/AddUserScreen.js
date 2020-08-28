import React from "react";
import { Text, View } from "react-native";
import { Formik } from "formik";
import moment from "moment";

import AppHeader from "../components/common/AppHeader";
import AddUser from "../components/AddUser/AddUser";

const AddUserScreen = ({ params }) => (
  <View>
    <Formik
      initialValues={{ name: "", myDate: moment().format("YYYY-MM-DD") }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleSubmit, values, setFieldValue }) => (
        <AddUser
          values={values}
          setFieldValue={setFieldValue}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      )}
    </Formik>
  </View>
);

export default AddUserScreen;

export const AddUserScreenHeader = (navigation) => {
  return (
    <AppHeader
      leftComponent={{
        text: "Cancel",
        onPress: () => navigation.goBack(),
      }}
      centerComponent={{ text: "Birthdays" }}
    />
  );
};
