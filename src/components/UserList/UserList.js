import React, { useState } from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import { Icon } from "react-native-elements";
import { Card, Button } from "react-native-elements";

import DefaultTheme from "../../themes/DefaultTheme";
import ModalBox from "../common/ModalBox";

const UserList = (props) => {
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState(null);

  const deleteItem = (item) => {
    setVisible(true);
    setId(item.id);
  };
  return (
    <View>
      {props.item?.user?.length > 0 && (
        <View>
          {props.item?.user.map((item, i) => (
            <View>
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
                title={item.name}
                subtitle={item.dob}
                rightIcon={
                  <Button
                    type="clear"
                    onPress={deleteItem.bind(this, item)}
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
              <ModalBox
                visible={visible}
                id={id}
                handleSubmit={props.handleSubmit}
                toggleOverlay={() => setVisible(false)}
              />
            </View>
          ))}
        </View>
      )}
      <View>
        {props.item?.user?.length === 0 && (
          <Card>
            <Button
              type="solid"
              onPress={props.addUser}
              title="ADD NEW ENTRY"
            />
          </Card>
        )}
      </View>
    </View>
  );
};

export default UserList;
