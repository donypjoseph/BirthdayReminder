import React from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import { Icon } from "react-native-elements";
import { Card, Button } from "react-native-elements";

import DefaultTheme from "../../themes/DefaultTheme";

const UserList = (props) => (
  <View>
    {props.item?.user.length > 0 && (
      <View>
        {props.item?.user.map((l, i) => (
          <ListItem
            key={i}
            leftIcon={
              <Icon
                name="user"
                type="evilicon"
                color={DefaultTheme.iconColor}
                size={40}
              />
            }
            title={l.name}
            subtitle={l.dob}
            bottomDivider
          />
        ))}
      </View>
    )}
    <View>
      {props.item?.user.length === 0 && (
        <Card>
          <Button
            type="solid"
            onPress={props.handleSubmit}
            title="ADD NEW ENTRY"
          />
        </Card>
      )}
    </View>
  </View>
);

export default UserList;
