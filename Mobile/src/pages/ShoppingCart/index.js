import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Image, StatusBar, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { colors } from '~/styles';
import HeaderBack from '~/components/HeaderBack';
import MistakeBox from '~/components/MistakeBox';
import ItemPurchase from '~/components/ItemPurchase';
import FooterActions from '~/components/FooterActions';

const HeaderBackgroundImg = require('~/assets/img/headerBackground.png');

const ShoppingCart = ({ shoppingCart, sumPrice }) => (
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
        <FooterActions sumPrice={sumPrice} />
      </Fragment>
    ) : (
      <MistakeBox message="Carrinho vazio" />
    )}
  </Fragment>
);

ShoppingCart.propTypes = {
  shoppingCart: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  sumPrice: PropTypes.string.isRequired,
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
