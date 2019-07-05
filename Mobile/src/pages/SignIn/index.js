import React from 'react';
import { connect } from 'react-redux';
import {
  Text, View, StatusBar, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { colors } from '~/styles';
import LogIn from '~/components/LogIn';

const SignIn = ({ navigation, logged, error }) => {
  if (logged) navigation.navigate('Products');
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.black} barStyle="light-content" />
      <Image style={styles.background} source={require('~/assets/img/appBackground.png')} />
      <LinearGradient
        style={styles.background}
        colors={[colors.transparent, colors.black]}
        locations={[0, 0.97]}
      />
      <View style={styles.containerForm}>
        <View style={styles.form}>
          <LogIn />
          <TouchableOpacity
            disabled={!!error}
            style={[styles.buttonSignUp]}
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          >
            <Text style={styles.buttonText}>Criar conta gratuita</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

SignIn.propTypes = {
  logged: PropTypes.bool.isRequired,
  error: PropTypes.string,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  logged: state.sign.logged,
  error: state.sign.error,
});
export default connect(mapStateToProps)(SignIn);
