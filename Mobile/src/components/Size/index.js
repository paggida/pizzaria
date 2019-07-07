import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
 Text, View, Image, TouchableOpacity 
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { Creators as PurchaseActions } from '~/store/ducks/purchase';
import styles from './styles';

const Size = ({
  item: {
    id,
    empty,
    description,
    baseIndex,
    file: { url },
  },
  purchaseItem: { price },
  navigation,
  targetPage,
  requestAddItem,
}) => (empty ? (
    <View style={[styles.container, styles.hidden]} />
  ) : (
    <TouchableOpacity
      style={[styles.container, styles.show]}
      onPress={() => {
        requestAddItem({ idSize: id, description, baseIndex });
        navigation.navigate(targetPage);
      }}
    >
      <Image style={styles.image} source={{ uri: url }} />
      <Text style={styles.description}>{`${description}`}</Text>
      <Text style={styles.price}>{`R$${(price * baseIndex).toFixed(2)}`}</Text>
    </TouchableOpacity>
  ));

Size.propTypes = {
  requestAddItem: PropTypes.func.isRequired,
  targetPage: PropTypes.string.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number,
    empty: PropTypes.bool,
    description: PropTypes.string,
    baseIndex: PropTypes.number,
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
  purchaseItem: PropTypes.shape({
    price: PropTypes.number,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  purchaseItem: state.purchase.purchaseItem,
});
const mapDispachToProps = dispatch => bindActionCreators(PurchaseActions, dispatch);
export default withNavigation(
  connect(
    mapStateToProps,
    mapDispachToProps,
  )(Size),
);
