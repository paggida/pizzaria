import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome";
import PropTypes from "prop-types";
import styles from "./styles";

const HeaderBack = ({ title, backPage, navigation, price }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={[styles.buttonHistory]}
      onPress={() => {
        navigation.navigate(backPage);
      }}
    >
      <Icons name="chevron-left" size={16} style={styles.icon} />
    </TouchableOpacity>
    <View style={styles.containerTitle}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{price}</Text>
    </View>
  </View>
);

HeaderBack.propTypes = {
  price: PropTypes.string,
  title: PropTypes.string.isRequired,
  backPage: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};

HeaderBack.defaultProps = {
  price: ""
};

export default HeaderBack;
