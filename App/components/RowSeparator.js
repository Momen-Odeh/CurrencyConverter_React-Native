import colors from "../constants/colors";
import { View, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  seprator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

const RowSeparator = () => {
  return <View style={styles.seprator} />;
};

export default RowSeparator;
