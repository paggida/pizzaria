import React, { Fragment } from 'react';
import {
  Text, Image, StatusBar, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import style from './styles';
import { colors } from '~/styles';
import HeaderBack from '~/components/HeaderBack';

const Purchase = ({ navigation }) => (
  <Fragment>
    <StatusBar backgroundColor={colors.black} barStyle="light-content" />
    <Image style={style.background} source={require('~/assets/img/headerBackground.png')} />
    <HeaderBack
      title="Realizar pedido"
      backPage="ShoppingCart"
      price="R$55,00"
      navigation={navigation}
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
