import { StatusBar, View } from "react-native";
import colors from "../constants/colors";

const CurrencyList = () => {
  return (
    <View>
      <StatusBar barStyle={"dark-content"} backgroundColor={colors.white} />
    </View>
  );
};

export default CurrencyList;
