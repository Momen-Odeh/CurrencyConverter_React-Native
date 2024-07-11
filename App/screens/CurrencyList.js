import { StatusBar, View, FlatList } from "react-native";
import colors from "../constants/colors";
import currencies from "../data/currencies.json";
import RowItem from "../components/RowItem";
import RowSeparator from "../components/RowSeparator";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const CurrencyList = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ backgroundColor: colors.white }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          return <RowItem text={item} onPress={() => navigation.pop()} />;
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <RowSeparator />}
        ListFooterComponent={() => (
          <View style={{ paddingBottom: insets.bottom }} />
        )}
      />
    </View>
  );
};

export default CurrencyList;
