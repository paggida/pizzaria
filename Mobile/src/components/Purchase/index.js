import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const Purchase = ({ purchase, fromNow, formatFullValue }) => (
  <View style={styles.container}>
    <Text style={styles.purchase}>{`Pedido #${purchase}`}</Text>
    <Text style={styles.fromNow}>{fromNow}</Text>
    <Text style={styles.formatFullValue}>{`R$${formatFullValue}`}</Text>
  </View>
);

Purchase.propTypes = {
  purchase: PropTypes.string.isRequired,
  fromNow: PropTypes.string.isRequired,
  formatFullValue: PropTypes.string.isRequired
};

export default Purchase;
