import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  Image,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Icons from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { colors } from '~/styles';
import HeaderBack from '~/components/HeaderBack';
import MistakeBox from '~/components/MistakeBox';
import ItemPurchase from '~/components/ItemPurchase';

const HeaderBackgroundImg = require('~/assets/img/headerBackground.png');

const ShoppingCart = ({ shoppingCart, sumPrice, navigation }) => (
  <Fragment>
    <StatusBar backgroundColor={colors.black} barStyle={colors.barStyle} />
    <Image style={styles.background} source={HeaderBackgroundImg} />
    <HeaderBack title="Carrinho" backPage="Products" price={`R$${sumPrice}`} />
    {shoppingCart.length ? (
      <Fragment>
        <FlatList
          data={shoppingCart}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <ItemPurchase item={item} />}
        />
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
    ) : (
      <MistakeBox message="Carrinho vazio" />
    )}
  </Fragment>
);

ShoppingCart.propTypes = {
  shoppingCart: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  sumPrice: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

/**
 * Realiza e trata o preço total para apresentação
 */
const fullPricePurchase = (shoppingCart) => {
  if (shoppingCart.length > 1) {
    return shoppingCart
      .reduce(
        (sum, next) => (Number(sum.price) ? Number(sum.price) : sum) + Number(next.price),
      )
      .toFixed(2);
  }
  if (shoppingCart.length) {
    return shoppingCart[0].price ? shoppingCart[0].price : '0,00';
  }
  return '0,00';
};

const mapStateToProps = state => ({
  shoppingCart: state.purchase.shoppingCart,
  sumPrice: fullPricePurchase(state.purchase.shoppingCart),
});
export default connect(mapStateToProps)(ShoppingCart);
