import { StyleSheet, Text, View, FlatList } from "react-native";
import { useEffect } from "react";
import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
const ProductsOverviewScreen = (props) => {
  useEffect(() => {
    props.navigation.setOptions({
      title: "All Products",
    });
  }, [props.navigation]);
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {
            props.navigation.navigate("ProductDetail", {
              productId: itemData.item.id,
              productTitle: itemData.item.title,
            });
          }}
          onAddToCart={() => {}}
        />
      )}
    />
  );
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
