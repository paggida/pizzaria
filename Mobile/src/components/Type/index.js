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

const Type = ({
  item: {
    id,
    empty,
    description,
    baseValue,
    file: { url },
  },
  navigation,
  targetPage,
  requestSelectType,
}) => (empty ? (
    <View style={[styles.container, styles.hidden]} />
  ) : (
    <TouchableOpacity
      style={[styles.container, styles.show]}
      onPress={() => {
        requestSelectType({ idType: id, baseValue });
        navigation.navigate(targetPage);
      }}
    >
      <Image style={styles.image} source={{ uri: url }} />
      <Text style={styles.description}>{`${description}`}</Text>
    </TouchableOpacity>
  ));

Type.propTypes = {
  requestSelectType: PropTypes.func.isRequired,
  targetPage: PropTypes.string.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number,
    empty: PropTypes.bool,
    description: PropTypes.string,
    baseValue: PropTypes.number,
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
  )(Type),
);
