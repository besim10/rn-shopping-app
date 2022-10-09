import {
  StyleSheet,
  Text,
  Image,
  Button,
  ScrollView,
  View,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const ProductDetailScreen = (props) => {
  const { productId, productTitle } = props.route?.params;

  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );
  useEffect(() => {
    props.navigation.setOptions({
      title: productTitle,
    });
  }, [props.navigation]);
  return (
    <View>
      <Text>{selectedProduct.title}</Text>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({});
