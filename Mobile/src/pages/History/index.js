import React, { Fragment } from "react";
import { Text, Image, StatusBar, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import style from "./styles";
import { colors } from "~/styles";
import HeaderBack from "~/components/HeaderBack";
import Purchase from "~/components/Purchase";

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
    <Purchase purchase="1" fromNow="Ontem às 17h" formatFullValue="42,00" />
    <Purchase purchase="2" fromNow="Há 1 semana" formatFullValue="142,00" />
    <Purchase purchase="3" fromNow="Há 2 anos" formatFullValue="78,00" />
  </Fragment>
);

History.propTypes = {
  navigation: PropTypes.shape().isRequired
};

export default History;
