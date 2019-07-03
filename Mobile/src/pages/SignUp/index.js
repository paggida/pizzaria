import React, { Fragment } from "react";
import { Text, StatusBar, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { colors } from "~/styles";

const SignUp = ({ navigation }) => (
  <Fragment>
    <StatusBar backgroundColor={colors.black} barStyle="light-content" />
    <Text>Tela de SignUp</Text>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("SignIn");
      }}
    >
      <Text>Já tenho login</Text>
    </TouchableOpacity>
  </Fragment>
);

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};

export default SignUp;
