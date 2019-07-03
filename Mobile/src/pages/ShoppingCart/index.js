import React, { Fragment } from "react";
import { Text, Image, StatusBar, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import style from "./styles";
import { colors } from "~/styles";
import HeaderBack from "~/components/HeaderBack";
import Icons from "react-native-vector-icons/FontAwesome";

const ShoppingCart = ({ navigation }) => (
  <Fragment>
    <StatusBar backgroundColor={colors.black} barStyle="light-content" />
    <Image
      style={style.background}
      source={require("~/assets/img/headerBackground.png")}
    />
    <HeaderBack
      title="Carrinho"
      backPage={"Products"}
      price="R$55,00"
      navigation={navigation}
    />
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Products");
      }}
    >
      <Icons name="cart-plus" size={16} style={style.icon} />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Purchase");
      }}
    >
      <Text>{"REALIZAR PEDIDO >"}</Text>
    </TouchableOpacity>
  </Fragment>
);

ShoppingCart.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};

export default ShoppingCart;
