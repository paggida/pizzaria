import React, { Fragment } from 'react';
import { Image, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { colors } from '~/styles';
import HeaderActions from '~/components/HeaderActions';

const Products = ({ navigation }) => (
  <Fragment>
    <StatusBar backgroundColor={colors.black} barStyle="light-content" />
    <Image style={styles.background} source={require('~/assets/img/headerBackground.png')} />
    <HeaderActions title="Pizzaria Don Juan" navigation={navigation} />
  </Fragment>
);

Products.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

export default Products;
