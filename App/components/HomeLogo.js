import { View, Image, StyleSheet, Dimensions } from "react-native";

const screens = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoBackground: {
    width: screens.width * 0.45,
    height: screens.width * 0.45,
  },
  logo: {
    position: "absolute",
    width: screens.width * 0.25,
    height: screens.width * 0.25,
  },
});

const HomeLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/background.png")}
        style={styles.logoBackground}
        resizeMode="contain"
      />
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export default HomeLogo;
