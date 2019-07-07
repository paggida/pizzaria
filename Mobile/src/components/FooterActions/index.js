import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icons from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './styles';

const FooterActions = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.cartPlus}
      onPress={() => {
        navigation.navigate('Products');
      }}
    >
      <Icons name="cart-plus" size={16} style={styles.icon} />
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.navigate('Purchase');
      }}
    >
      <Text style={[styles.text, styles.bold]}>REALIZAR PEDIDO</Text>
      <Icons
        style={[styles.text, styles.buttonIcon]}
        name="chevron-right"
        size={14}
      />
    </TouchableOpacity>
  </View>
);

FooterActions.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(FooterActions);
