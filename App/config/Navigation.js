import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "../screens/Home";
import Options from "../screens/Options";
import CurrencyList from "../screens/CurrencyList";

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator
  // initialRouteName="CurrencyList"
  // screenOptions={{ headerShown: false }}
  >
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <MainStack.Screen name="Options" component={Options} />
    <MainStack.Screen
      name="CurrencyList"
      component={CurrencyList}
      options={({ route }) => ({ title: route.params.title })}
    />
  </MainStack.Navigator>
);
const Navigation = () => (
  <NavigationContainer>
    <SafeAreaProvider>
      <MainStackScreen />
    </SafeAreaProvider>
  </NavigationContainer>
);

export default Navigation;
