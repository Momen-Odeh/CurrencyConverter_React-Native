import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Options from "../screens/Options";
import { SafeAreaProvider } from "react-native-safe-area-context";

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator
  // initialRouteName="Options"
  // screenOptions={{ headerShown: false }}
  >
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <MainStack.Screen name="Options" component={Options} />
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