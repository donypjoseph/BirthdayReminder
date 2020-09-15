import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Overlay, Icon, ButtonGroup } from "react-native-elements";
import DefaultTheme from "../../themes/DefaultTheme";

const ModalBox = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const buttons = ["Delete", "cancel"];

  const deleteItem = (selectedIndex, id) => {
    setSelectedIndex(selectedIndex);
    if (selectedIndex === 1) {
      props.toggleOverlay();
    } else {
      props.handleSubmit(id);
      props.toggleOverlay();
    }
  };
  return (
    <View style={styles.container}>
      <Overlay
        overlayStyle={styles.overlay}
        isVisible={props.visible}
        onBackdropPress={props.toggleOverlay}
      >
        <View style={styles.divider} />
        <Icon
          name="trash"
          type="evilicon"
          color={DefaultTheme.iconColor}
          size={70}
        />
        <View style={styles.divider} />
        <Text style={styles.titleStyle}>Are You Sure?</Text>
        <View style={styles.divider} />
        <Text style={styles.subTitleStyle}>This entry will be deleted.</Text>
        <View style={styles.buttonContainer}>
          <ButtonGroup
            onPress={(index) => deleteItem(index, props.id)}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ height: 50 }}
          />
        </View>
      </Overlay>
    </View>
  );
};

export default ModalBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DefaultTheme.backgroundColor,
  },
  overlay: {
    width: 300,
    height: 300,
    alignItems: "center",
  },
  divider: {
    paddingTop: 20,
  },
  titleStyle: {
    fontSize: DefaultTheme.fontsizeTitle,
  },
  subTitleStyle: {
    fontSize: DefaultTheme.fontsizeSubTitle,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
  button: {
    borderColor: "darkblue",
    borderWidth: 1,
    borderRadius: 0,
  },
});
