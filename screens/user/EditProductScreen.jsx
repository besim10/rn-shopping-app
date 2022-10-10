import {
  StyleSheet,
  ScrollView,
  Platform,
  TextInput,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/CostumHeaderButton";
import * as productsActions from "../../store/actions/products";
import { useDispatch, useSelector } from "react-redux";
const EditProductScreen = (props) => {
  const dispatch = useDispatch();
  const prodId = props.route?.params?.productId;
  const editedProduct = useSelector((state) =>
    state.products.userProducts.find((prod) => prod.id === prodId)
  );

  const [title, setTitle] = useState(editedProduct ? editedProduct.title : "");
  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct.imageUrl : ""
  );
  const [description, setDescription] = useState(
    editedProduct ? editedProduct.description : ""
  );
  const [price, setPrice] = useState("");

  const submitHandler = () => {
    if (editedProduct) {
      dispatch(
        productsActions.updateProduct(prodId, title, description, imageUrl)
      );
    } else {
      dispatch(
        productsActions.createProduct(title, description, imageUrl, +price)
      );
    }
    props.navigation.goBack();
  };
  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: props.route?.params?.productId
        ? "Edit Product"
        : "Add Product",
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Save"
            iconName={
              Platform.OS === "android" ? "md-cehckmark" : "ios-checkmark"
            }
            onPress={submitHandler}
          />
        </HeaderButtons>
      ),
    });
  }, [props.navigation, submitHandler]);

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            value={title}
            onChangeText={(text) => setTitle(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
            style={styles.input}
          />
        </View>
        {editedProduct ? null : (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              value={price}
              onChangeText={(text) => setPrice(text)}
              style={styles.input}
            />
          </View>
        )}
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            value={description}
            onChangeText={(text) => setDescription(text)}
            style={styles.input}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProductScreen;

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {
    width: "100%",
  },
  label: {
    fontFamily: "open-sans-bold",
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
