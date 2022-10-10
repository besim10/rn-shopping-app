import * as React from "react";
import { Button, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import ShopNavigator from "./navigation/ShopNavigator";
import * as SplashScreen from "expo-splash-screen";
import ordersReducer from "./store/reducers/orders";
import { DrawerNavigator } from "./navigation/DrawerNavigator";
import { legacy_createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import productsReducer from "./store/reducers/products";
import { useState, useEffect, useCallback } from "react";
import cartReducer from "./store/reducers/cart";
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});
const store = legacy_createStore(rootReducer);

const Drawer = createDrawerNavigator();
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
          "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
        });

        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <Provider store={store}>
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <NavigationContainer>
          {/* <ShopNavigator />
           */}
          <DrawerNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
