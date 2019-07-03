import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome";
import PropTypes from "prop-types";
import styles from "./styles";

const handleHistory = () => {
  console.log("History");
};

const handleShoppingCart = () => {
  console.log("ShoppingCart");
};

const HeaderActions = ({ title }) => (
  <View style={styles.container}>
    <TouchableOpacity style={[styles.buttonHistory]} onPress={handleHistory}>
      <Icons name="history" size={26} style={styles.icon} />
    </TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity
      style={[styles.buttonShoppingCart]}
      onPress={handleShoppingCart}
    >
      <Icons name="shopping-cart" size={18} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

export default HeaderActions;
