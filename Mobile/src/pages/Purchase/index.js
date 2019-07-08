import React, { Fragment } from 'react';
import { Image, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { colors } from '~/styles';
import HeaderBack from '~/components/HeaderBack';
import FormPurchase from '~/components/FormPurchase';

const HeaderBackgroundImg = require('~/assets/img/headerBackground.png');

const Purchase = ({ navigation }) => (
  <Fragment>
    <StatusBar backgroundColor={colors.black} barStyle={colors.barStyle} />
    <Image style={styles.background} source={HeaderBackgroundImg} />
    <HeaderBack
      title="Realizar pedido"
      backPage="ShoppingCart"
      price={`R$${navigation.getParam('sumPrice', '0,00')}`}
    />
    <FormPurchase />
  </Fragment>
);

Purchase.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

export default Purchase;
