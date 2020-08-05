import React from "react";
import { View, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import { Icon } from "react-native-elements";
import AppHeader from "../components/common/AppHeader";

const list = [
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
];
const HomeScreen = () => (
  <View>
    {list.map((l, i) => (
      <ListItem
        key={i}
        leftIcon={
          <Icon name="user" type="evilicon" color="#517fa4" size={40} />
        }
        // leftAvatar={{ source: { uri: l.avatar_url } }}
        title={l.name}
        subtitle={l.subtitle}
        bottomDivider
      />
    ))}
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

export const HomeScreenHeader = (navigation) => {
  return (
    <AppHeader
      leftComponent={{
        icon: "birthday-cake",
        type: "font-awesome",
      }}
      centerComponent={{ text: "Birthdays" }}
      rightComponent={{
        icon: "add",
        onPress: () => navigation.navigate("AddUser"),
      }}
    />
  );
};
