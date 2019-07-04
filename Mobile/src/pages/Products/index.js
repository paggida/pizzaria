import React, { Fragment } from 'react';
import { Image, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import style from './styles';
import { colors } from '~/styles';
import HeaderActions from '~/components/HeaderActions';

const Products = ({ navigation }) => (
  <Fragment>
    <StatusBar backgroundColor={colors.black} barStyle="light-content" />
    <Image style={style.background} source={require('~/assets/img/headerBackground.png')} />
    <HeaderActions title="Pizzaria Don Juan" navigation={navigation} />
  </Fragment>
);

Products.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

export default Products;
