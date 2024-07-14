import { StatusBar, View, FlatList } from "react-native";
import colors from "../constants/colors";
import currencies from "../data/currencies.json";
import RowItem from "../components/RowItem";
import RowSeparator from "../components/RowSeparator";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useContext } from "react";
import { ConversionContext } from "../util/ConversionContext";
const CurrencyList = ({ navigation, route = {} }) => {
  const insets = useSafeAreaInsets();
  const params = route.params || {};
  const { setBaseCurrency, setQuoteCurrency, baseCurrency, quoteCurrency } =
    useContext(ConversionContext);
  return (
    <View style={{ backgroundColor: colors.white }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          // const selected = params.activeCurrency === item;
          let selected = false;
          if (params.isBaseCurrency && item === baseCurrency) {
            selected = true;
          } else if (!params.isBaseCurrency && item === quoteCurrency) {
            selected = true;
          }
          return (
            <RowItem
              text={item}
              onPress={() => {
                if (params.isBaseCurrency) {
                  setBaseCurrency(item);
                } else {
                  setQuoteCurrency(item);
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
