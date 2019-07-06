import React from 'react';
import { connect } from 'react-redux';
import {
 Text, View, StatusBar, Image, TouchableOpacity 
} from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { colors } from '~/styles';
import NewUser from '~/components/NewUser';

const AppBackgroundImg = require('~/assets/img/appBackground.png');

const SignUp = ({ navigation, logged, error }) => {
  if (logged) navigation.navigate('Products');
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.black} barStyle="light-content" />
      <Image style={styles.background} source={AppBackgroundImg} />
      <LinearGradient
        style={styles.background}
        colors={[colors.transparent, colors.black]}
        locations={[0, 0.97]}
      />
      <View style={styles.containerForm}>
        <View style={styles.form}>
          <NewUser
            sucessSave={() => {
              navigation.navigate('SignIn');
            }}
          />
          <TouchableOpacity
            disabled={!!error}
            style={[styles.buttonSignUp]}
            onPress={() => {
              navigation.navigate('SignIn');
            }}
          >
            <Text style={styles.buttonText}>Já tenho login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

SignUp.propTypes = {
  logged: PropTypes.bool.isRequired,
  error: PropTypes.string,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

SignUp.defaultProps = {
  error: null,
};

const mapStateToProps = state => ({
  logged: state.sign.logged,
  error: state.sign.error,
});
export default connect(mapStateToProps)(SignUp);
