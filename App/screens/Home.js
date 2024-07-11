import { View, StyleSheet, StatusBar, Text, Image } from "react-native";
import colors from "../constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeLogo from "../components/HomeLogo";
import ConversionInput from "../components/ConversionInput";
import ImageButton from "../components/ImageButton";
// import { format } from "date-fns";
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: "center",
  },
  textHeader: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginVertical: 20,
  },
  text: {
    fontSize: 14,
    color: colors.white,
    textAlign: "center",
  },
});
const Home = () => {
  const insets = useSafeAreaInsets();
  const baseCurrency = "USD";
  const quoteCurrency = "ILS";
  const conversionRate = 3.689;
  const date = "2020-03-23";

  return (
    <View style={[{ paddingTop: insets.top }, styles.container]}>
      <StatusBar barStyle={"light-content"} backgroundColor={colors.blue} />
      <HomeLogo />
      <Text style={styles.textHeader}>Currency Converter</Text>
      <ConversionInput
        text={baseCurrency}
        value="123"
        onButtonPress={() => alert("todo!")}
        keyboardType="numeric"
        onChangeText={(text) => console.log("text", text)}
      />
      <ConversionInput
        text={quoteCurrency}
        value="123"
        onButtonPress={() => alert("todo!")}
        editable={false}
      />
      <Text style={styles.text}>
        {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${date}`}
      </Text>
      <ImageButton text={"Reverse Currency"} onPress={() => alert("todo!")} />
    </View>
  );
};

export default Home;
