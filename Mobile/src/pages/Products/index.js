import React, { Fragment } from "react";
import { Text, Image, StatusBar, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import style from "./styles";
import { colors } from "~/styles";
import HeaderActions from "~/components/HeaderActions";

const Products = ({ navigation }) => (
  <Fragment>
    <StatusBar backgroundColor={colors.black} barStyle="light-content" />
    <Image
      style={style.background}
      source={require("~/assets/img/headerBackground.png")}
    />
    <HeaderActions title="Pizzaria Don Juan" />
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("SignIn");
      }}
    >
      <Text>Sair</Text>
    </TouchableOpacity>
  </Fragment>
);

Products.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};

export default Products;
