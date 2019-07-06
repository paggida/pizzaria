import React from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const LogoGrayImg = require('~/assets/img/logoGray.png');

const MistakeBox = ({ error, message }) => (
  <View style={styles.containerRow}>
    <View style={styles.container}>
      <Image style={styles.logo} source={LogoGrayImg} />
      {error ? (
        <Text style={styles.text}>{error}</Text>
      ) : (
        <Text style={styles.text}>{message}</Text>
      )}
    </View>
  </View>
);

MistakeBox.propTypes = {
  error: PropTypes.string,
  message: PropTypes.string,
};

MistakeBox.defaultProps = {
  message: 'Ops... Houve um erro inexperado!',
  error: '',
};

export default MistakeBox;
