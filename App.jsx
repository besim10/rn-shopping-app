import * as React from "react";
import { Button, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from "./navigation/ShopNavigator";
import { legacy_createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import productsReducer from "./store/reducers/products";
const rootReducer = combineReducers({
  products: productsReducer,
});
const store = legacy_createStore(rootReducer);

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ShopNavigator />
      </NavigationContainer>
    </Provider>
  );
}
