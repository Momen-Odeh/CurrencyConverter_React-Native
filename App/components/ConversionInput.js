import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    borderRadius: 5,
  },
  containerDisabled: {
    backgroundColor: colors.offWhite,
  },
  button: {
    padding: 15,
    borderRightColor: colors.border,
    borderRightWidth: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.blue,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: colors.textLight,
  },
});

const containerStyle = [styles.container];

const ConversionInput = ({ text, onButtonPress, ...props }) => {
  if (props.editable === false) {
    containerStyle.push(styles.containerDisabled);
  }
  return (
    <View style={containerStyle}>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} {...props}></TextInput>
    </View>
  );
};

export default ConversionInput;
