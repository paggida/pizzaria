import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Purchase = ({ item: { id, fromNow, formatFullValue } }) => (
  <View style={styles.container}>
    <Text style={styles.purchase}>{`Pedido #${id}`}</Text>
    <Text style={styles.fromNow}>{fromNow}</Text>
    <Text style={styles.formatFullValue}>{`R$${formatFullValue}`}</Text>
  </View>
);

Purchase.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    fromNow: PropTypes.string,
    formatFullValue: PropTypes.string
  }).isRequired
};

export default Purchase;
