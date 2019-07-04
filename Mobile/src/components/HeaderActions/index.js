import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './styles';

const HeaderActions = ({ title, navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={[styles.buttonHistory]}
      onPress={() => {
        navigation.navigate('History');
      }}
    >
      <Icons name="history" size={26} style={styles.icon} />
    </TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity
      style={[styles.buttonShoppingCart]}
      onPress={() => {
        navigation.navigate('ShoppingCart');
      }}
    >
      <Icons name="shopping-cart" size={18} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

HeaderActions.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default HeaderActions;
