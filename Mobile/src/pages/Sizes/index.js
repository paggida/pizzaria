import React, { Fragment } from 'react';
import {
 Text, Image, StatusBar, TouchableOpacity 
} from 'react-native';
import PropTypes from 'prop-types';
import Icons from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { colors } from '~/styles';
import HeaderBack from '~/components/HeaderBack';

const HeaderBackgroundImg = require('~/assets/img/headerBackground.png');

const Sizes = ({ navigation }) => (
  <Fragment>
    <StatusBar backgroundColor={colors.black} barStyle={colors.barStyle} />
    <Image style={styles.background} source={HeaderBackgroundImg} />
    <HeaderBack title="Selecione um tamanho" backPage="Types" />
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Products');
      }}
    >
      <Icons name="cart-plus" size={16} style={styles.icon} />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Purchase');
      }}
    >
      <Text>{'REALIZAR PEDIDO >'}</Text>
    </TouchableOpacity>
  </Fragment>
);

Sizes.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Sizes;
