import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Formik } from "formik";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import uuid from "react-native-uuid";

import AppHeader from "../components/common/AppHeader";
import AddUser from "../components/AddUser/AddUser";
import { addUser } from "../../src/store/actions/UserActions";
import appStyles from "../themes/styles/AppStyles";

const AddUserScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(addUser({ name: values.name, dob: values.dob, id: uuid.v4() }));
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView style={appStyles.container}>
      <ScrollView style={appStyles.scrollView}>
        <Formik
          initialValues={{ name: "", dob: moment().format("YYYY-MM-DD") }}
          onSubmit={handleSubmit}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddUserScreen;

export const AddUserScreenHeader = (navigation) => {
  return (
    <AppHeader
      leftComponent={{
        icon: "arrow-left",
        type: "feather",
        onPress: () => navigation.goBack(),
      }}
      centerComponent={{ text: "Birthdays" }}
    />
  );
};
