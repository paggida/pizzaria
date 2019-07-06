import React, { Fragment } from 'react';
import {
 Text, Image, StatusBar, TouchableOpacity 
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { colors } from '~/styles';
import HeaderBack from '~/components/HeaderBack';

const HeaderBackgroundImg = require('~/assets/img/headerBackground.png');

const Purchase = ({ navigation }) => (
  <Fragment>
    <StatusBar backgroundColor={colors.black} barStyle="light-content" />
    <Image style={styles.background} source={HeaderBackgroundImg} />
    <HeaderBack
      title="Realizar pedido"
      backPage="ShoppingCart"
      price="R$55,00"
    />
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Products');
      }}
    >
      <Text>{'FINALIZAR >'}</Text>
    </TouchableOpacity>
  </Fragment>
);

Purchase.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Purchase;
