import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import colors from "../constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeLogo from "../components/HomeLogo";
import ConversionInput from "../components/ConversionInput";
import ImageButton from "../components/ImageButton";
import KeyboardSpacer from "../components/KeyboardSpacer";
import { Entypo } from "@expo/vector-icons";
const screen = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
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
  content: {
    paddingTop: screen.height * 0.2,
  },
  header: {
    alignItems: "flex-end",
    marginHorizontal: 20,
  },
});
const Home = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const baseCurrency = "USD";
  const quoteCurrency = "ILS";
  const conversionRate = 3.689;
  const date = "2020-03-23";

  const [scrollEnabled, setScrollEnabled] = useState(false);

  return (
    <View style={[{ paddingTop: insets.top }, styles.container]}>
      <ScrollView scrollEnabled={scrollEnabled}>
        <StatusBar barStyle={"light-content"} backgroundColor={colors.blue} />

        <TouchableOpacity
          onPress={() => navigation.push("Options")}
          style={styles.header}
        >
          <Entypo name="cog" size={32} color={colors.white} />
        </TouchableOpacity>

        <View style={styles.content}>
          <HomeLogo />
          <Text style={styles.textHeader}>Currency Converter</Text>
          <ConversionInput
            text={baseCurrency}
            value="123"
            onButtonPress={() =>
              navigation.push("CurrencyList", {
                title: "Base Currency",
                activeCurrency: baseCurrency,
              })
            }
            keyboardType="numeric"
            onChangeText={(text) => console.log("text", text)}
          />
          <ConversionInput
            text={quoteCurrency}
            value="123"
            onButtonPress={() =>
              navigation.push("CurrencyList", {
                title: "Quote Currency",
                activeCurrency: quoteCurrency,
              })
            }
            editable={false}
          />
          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${date}`}
          </Text>
          <ImageButton
            text={"Reverse Currency"}
            onPress={() => alert("todo!")}
          />
          <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
