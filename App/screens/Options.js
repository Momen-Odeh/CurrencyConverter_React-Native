import { useSafeAreaInsets } from "react-native-safe-area-context";
import RowItem from "../components/RowItem";
import RowSeparator from "../components/RowSeparator";
import { ScrollView, View, Alert, Linking, StatusBar } from "react-native";
import colors from "../constants/colors";

const Options = () => {
  const insets = useSafeAreaInsets();
  const options = [
    {
      text: "Theams",
      iconName: "chevron-right",
      onPress: () => alert("to do"),
    },
    {
      text: "React Native Basics",
      iconName: "chevron-right",
      onPress: () =>
        openURL(
          "https://learn.reactnativeschool.com/p/react-native-basics-build-a-currency-converter"
        ),
    },
    {
      text: "React Native By Example",
      iconName: "chevron-right",
      onPress: () => openURL("https://reactnativebyexample.com"),
    },
  ];
  const openURL = (url) => {
    Linking.openURL(url).catch(() =>
      Alert.alert("Sorry, somthing wrong!", "Please try again later")
    );
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingTop: insets.top,
      }}
    >
      {/* safe area */}
      <StatusBar barStyle={"dark-content"} backgroundColor={colors.white} />
      {options.map((item, index) => (
        <View key={index}>
          <RowItem
            text={item.text}
            iconName={item.iconName}
            onPress={item.onPress}
          />
          <RowSeparator />
        </View>
      ))}
    </ScrollView>
  );
};
export default Options;
