import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    marginRight: 10,
    height: 20,
    width: 20,
  },
  text: {
    fontSize: 16,
    color: colors.white,
  },
});

const ImageButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image
        source={require("../assets/images/reverse.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ImageButton;
