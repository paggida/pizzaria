import React, { Fragment } from "react";
import { Text, Image, StatusBar, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import style from "./styles";
import { colors } from "~/styles";
import HeaderBack from "~/components/HeaderBack";

const History = ({ navigation }) => (
  <Fragment>
    <StatusBar backgroundColor={colors.black} barStyle="light-content" />
    <Image
      style={style.background}
      source={require("~/assets/img/headerBackground.png")}
    />
    <HeaderBack
      title="Meus Pedidos"
      backPage={"Products"}
      navigation={navigation}
    />
  </Fragment>
);

History.propTypes = {
  navigation: PropTypes.shape().isRequired
};

export default History;
