import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
 Text, View, Image, TouchableOpacity 
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { Creators as PurchaseActions } from '~/store/ducks/purchase';
import styles from './styles';

const ItemPurchase = ({
  item: {
 id, typeDescription, sizeDescription, price, typeFile 
},
  requestRemoveItem,
}) => (
  <View style={styles.container}>
    <View style={styles.containerRow}>
      <Image style={styles.image} source={{ uri: typeFile }} />
      <View style={[styles.containerInfo, styles.containerRow]}>
        <View style={styles.containerData}>
          <Text style={styles.description}>{`${typeDescription}`}</Text>
          <Text style={styles.size}>{`Tamanho: ${sizeDescription}`}</Text>
          <Text style={styles.price}>{`R$${price}`}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            requestRemoveItem(id);
          }}
        >
          <Icons style={styles.icon} name="trash" size={18} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

ItemPurchase.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    typeDescription: PropTypes.string,
    sizeDescription: PropTypes.string,
    price: PropTypes.string,
    typeFile: PropTypes.string,
  }).isRequired,
  requestRemoveItem: PropTypes.func.isRequired,
};

const mapDispachToProps = dispatch => bindActionCreators(PurchaseActions, dispatch);
export default connect(
  null,
  mapDispachToProps,
)(ItemPurchase);
