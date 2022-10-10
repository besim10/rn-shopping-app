import { createDrawerNavigator } from "@react-navigation/drawer";
import ProductsNavigator from "./ShopNavigator";
import OrdersStack from "./OrdersNavigator";
import { View, Button, Platform } from "react-native";
const Drawer = createDrawerNavigator();
import Colors from "../constans/Colors";
import { Ionicons } from "@expo/vector-icons";
import AdminNavigator from "./AdminNavigator";
export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: Colors.primary,
      }}
    >
      <Drawer.Screen
        name="Products"
        component={ProductsNavigator}
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
              size={23}
              color={drawerConfig.color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-list" : "ios-list"}
              size={23}
              color={drawerConfig.color}
            />
          ),
        }}
        component={OrdersStack}
      />
      <Drawer.Screen
        name="Admin"
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-create" : "ios-create"}
              size={23}
              color={drawerConfig.color}
            />
          ),
        }}
        component={AdminNavigator}
      />
    </Drawer.Navigator>
  );
};
