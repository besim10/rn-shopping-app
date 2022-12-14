import { FlatList, Text, Platform } from "react-native";
import { useSelector } from "react-redux";
import React from "react";
import { useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/CostumHeaderButton";
import OrderItem from "../../components/shop/OrderItem";
const OrdersScreen = (props) => {
  const orders = useSelector((state) => state.orders.orders);

  useEffect(() => {
    props.navigation.setOptions({
      title: "Your Orders",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
            onPress={() => {
              props.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [props.navigation]);
  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <OrderItem
          amount={itemData.item.totalAmount}
          date={itemData.item.readableDate}
          items={itemData.item.items}
        />
      )}
    />
  );
};

export default OrdersScreen;
