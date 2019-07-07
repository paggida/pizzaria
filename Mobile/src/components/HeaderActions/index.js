import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icons from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './styles';

const HeaderActions = ({ title, navigation, shoppingCart }) => (
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
      <View style={shoppingCart.length ? styles.newPurchase : styles.hidden} />
      <Icons name="shopping-cart" size={18} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

HeaderActions.propTypes = {
  title: PropTypes.string.isRequired,
  shoppingCart: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  shoppingCart: state.purchase.shoppingCart,
});
export default withNavigation(connect(mapStateToProps)(HeaderActions));
