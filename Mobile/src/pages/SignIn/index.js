import React from "react";
import { connect } from "react-redux";
import { Text, View, StatusBar, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import LinearGradient from "react-native-linear-gradient";
import style from "./styles";
import { colors } from "~/styles";
import LogIn from "~/components/LogIn";

const SignIn = ({ navigation, logged }) => {
  if (logged) navigation.navigate("Products");
  return (
    <View style={style.container}>
      <StatusBar backgroundColor={colors.black} barStyle="light-content" />
      <Image
        style={style.background}
        source={require("~/assets/img/appBackground.png")}
      />
      <LinearGradient
        style={style.background}
        colors={[colors.transparent, colors.black]}
        locations={[0, 0.97]}
      />
      <View style={style.containerForm}>
        <View style={style.form}>
          <LogIn />
          <TouchableOpacity
            style={[style.buttonSignUp]}
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <Text style={style.buttonText}>Criar conta gratuita</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

SignIn.propTypes = {
  logged: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};

const mapStateToProps = state => ({
  logged: state.sign.logged
});
export default connect(mapStateToProps)(SignIn);
