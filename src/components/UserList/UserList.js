import React, { useState } from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import { Icon } from "react-native-elements";
import { Card, Button, Overlay } from "react-native-elements";
import { useDispatch } from "react-redux";

import DefaultTheme from "../../themes/DefaultTheme";
import { removeUser } from "../../store/actions/UserActions";
import ModalBox from "../common/ModalBox";

const UserList = (props) => {
  const [visible, setVisible] = useState(false);
  return (
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
              rightIcon={
                <Button
                  type="clear"
                  onPress={() => setVisible(true)}
                  icon={
                    <Icon
                      name="trash"
                      type="evilicon"
                      color={DefaultTheme.iconColor}
                      size={35}
                    />
                  }
                />
              }
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
      <ModalBox visible={visible} toggleOverlay={() => setVisible(false)} />
    </View>
  );
};

export default UserList;
