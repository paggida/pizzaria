import React from 'react';
import { Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
//import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { colors } from '~/styles';
import LogIn from '~/components/LogIn'

const SignIn = ({ navigation }) => (
  <View style={styles.container}>
    <StatusBar backgroundColor={colors.black} barStyle="light-content" />
    <Image  style={styles.background} source={require('~/assets/img/background.png')}/>
    {/*<LinearGradient style={styles.background} colors={[colors.transparent, colors.black]} locations={[0,0.97]}/>*/}
    <View style={styles.containerForm}>
      <View style={styles.form}>
        <LogIn sucessLogIn={()=>{navigation.navigate('Products')}}/>
        <TouchableOpacity style={[styles.buttonSignUp]} onPress={()=>{navigation.navigate('SignUp')}}>
          <Text style={styles.buttonText}>Criar conta gratuita</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

SignIn.propTypes={
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
}

export default SignIn;
