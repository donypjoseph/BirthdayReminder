import { StyleSheet } from "react-native";
import DefaultTheme from "../DefaultTheme";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 10,
    backgroundColor: DefaultTheme.backgroundColor,
  },
  scrollView: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  headerContainer: {
    color: DefaultTheme.headerBackgroundColor,
    justifyContent: "space-around",
  },
  label: {
    color: DefaultTheme.labelColor,
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    height: 40,
  },
  input: {
    backgroundColor: DefaultTheme.inputColor,
    borderColor: "red",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
