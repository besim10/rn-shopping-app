import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import Colors from "../constans/Colors";
const Stack = createNativeStackNavigator();
const ProductsNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    }}
  >
    <Stack.Screen name="ProductsOverview" component={ProductsOverviewScreen} />
    <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
  </Stack.Navigator>
);

export default ProductsNavigator;
