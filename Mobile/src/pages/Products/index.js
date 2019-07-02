import React, { Fragment } from 'react';
import { Text, StatusBar, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
//import styles from './styles';
import { colors } from '~/styles';

const Products = ({ navigation }) => (
  <Fragment>
    <StatusBar backgroundColor={colors.black} barStyle="light-content" />
    <Text>Tela dos Produtos</Text>
    <TouchableOpacity onPress={()=>{navigation.navigate('SignIn')}}>
      <Text>Sair</Text>
    </TouchableOpacity>
  </Fragment>
);

Products.propTypes={
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
}

export default Products;
