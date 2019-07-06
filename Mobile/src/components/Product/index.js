import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
 Text, View, Image, TouchableOpacity 
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icons from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { Creators as PurchaseActions } from '~/store/ducks/purchase';
import styles from './styles';

const Product = ({
  item: {
    id,
    name,
    description,
    preparation,
    file: { url },
  },
  navigation,
  targetPage,
  requestSelectProduct,
}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => {
      requestSelectProduct(id);
      navigation.navigate(targetPage);
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
  requestSelectProduct: PropTypes.func.isRequired,
  targetPage: PropTypes.string.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    preparation: PropTypes.number,
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

const mapDispachToProps = dispatch => bindActionCreators(PurchaseActions, dispatch);
export default withNavigation(
  connect(
    null,
    mapDispachToProps,
  )(Product),
);
