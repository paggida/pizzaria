import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './styles';

const Product = ({
  item: {
    name,
    description,
    preparation,
    file: { url }
  },
  navigation
}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => {
      console.tron.log(`Vc clicou! ${name}`);
      //navigation.navigate('ShoppingCart');
    }}
  >
    <View style={styles.containerRow}>
      <Image style={styles.image} source={{ uri: url }} />
      <View style={styles.containerInfo}>
        <Text style={styles.name}>{`${name}`}</Text>
        <Text style={styles.description}>{`${description}`}</Text>
        <View style={styles.containerRow}>
          <Icons style={styles.icon} name="clock-o" size={18} />
          <Text style={styles.preparation}>{`${preparation} mins`}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

Product.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    preparation: PropTypes.number,
    file: PropTypes.shape({
      url: PropTypes.string
    })
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};

export default Product;
