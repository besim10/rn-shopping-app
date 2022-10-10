import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrdersScreen from "../screens/shop/OrdersScreen";
import Colors from "../constans/Colors";
const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};
const OrdersNavigator = createNativeStackNavigator();
const OrdersStack = () => (
  <OrdersNavigator.Navigator screenOptions={defaultNavOptions}>
    <OrdersNavigator.Screen name="OrdersStack" component={OrdersScreen} />
  </OrdersNavigator.Navigator>
);
export default OrdersStack;
