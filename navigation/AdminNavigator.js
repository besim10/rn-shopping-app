import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserProductsScreen from "../screens/user/UserProductsScreen";
import Colors from "../constans/Colors";
import EditProductScreen from "../screens/user/EditProductScreen";
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
const adminStack = createNativeStackNavigator();
const AdminNavigator = () => (
  <adminStack.Navigator screenOptions={defaultNavOptions}>
    <adminStack.Screen name="UserProducts" component={UserProductsScreen} />
    <adminStack.Screen name="EditProduct" component={EditProductScreen} />
  </adminStack.Navigator>
);
export default AdminNavigator;
