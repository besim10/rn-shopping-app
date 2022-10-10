import {
  StyleSheet,
  Text,
  Image,
  Button,
  ScrollView,
  View,
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Colors from "../../constans/Colors";
Colors;
import * as cartActions from "../../store/actions/cart";
const ProductDetailScreen = (props) => {
  const dispatch = useDispatch();
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
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="Add to Cart"
          onPress={() => {
            dispatch(cartActions.addToCart(selectedProduct));
          }}
        />
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "open-sans-bold",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
    fontFamily: "open-sans",
  },
  actions: {
    marginVertical: 10,
    alignItems: "center",
  },
});
