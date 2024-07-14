import { StatusBar, View, FlatList } from "react-native";
import colors from "../constants/colors";
import currencies from "../data/currencies.json";
import RowItem from "../components/RowItem";
import RowSeparator from "../components/RowSeparator";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const CurrencyList = ({ navigation, route = {} }) => {
  const insets = useSafeAreaInsets();
  const params = route.params || {};
  return (
    <View style={{ backgroundColor: colors.white }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          const selected = params.activeCurrency === item;
          return (
            <RowItem
              text={item}
              onPress={() => {
                if (params.onChange) {
                  params.onChange(item);
                }
                navigation.pop();
              }}
              iconName={selected && "check"}
            />
          );
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
