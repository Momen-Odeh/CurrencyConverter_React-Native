import { StyleSheet, View, Keyboard, Dimensions } from "react-native";
import { useState, useEffect } from "react";

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const KeyboardSpacer = ({ onToggle }) => {
  const [keyboardSpace, setKeyboardSpace] = useState(0);

  useEffect(() => {
    const showListner = Keyboard.addListener("keyboardDidShow", (event) => {
      const screenHight = Dimensions.get("window").height;
      const endY = event.endCoordinates.screenY;
      setKeyboardSpace(screenHight - endY + 20);
      onToggle(true);
    });

    const hideListener = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardSpace(0);
      onToggle(false);
    });
    return () => {
      showListner.remove();
      hideListener.remove();
    };
  }, []);

  return <View style={[styles.container, { height: keyboardSpace }]} />;
};

export default KeyboardSpacer;
