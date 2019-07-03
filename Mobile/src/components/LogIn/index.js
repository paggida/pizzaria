import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Creators as SignActions } from "~/store/ducks/sign";
import styles from "./styles";

class LogIn extends Component {
  state = {
    email: "",
    password: ""
  };

  static propTypes = {
    requestSignIn: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  };

  handleFormSubmit = () => {
    const { email, password } = this.state;
    const { requestSignIn, loading } = this.props;
    requestSignIn({ email, password });
  };

  render() {
    const { email, password } = this.state;
    const { loading } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("~/assets/img/logo.png")} />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={email => this.setState({ email })}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Seu e-mail"
          placeholderTextColor={styles.placeholder.color}
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={password => this.setState({ password })}
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Senha secreta"
          placeholderTextColor={styles.placeholder.color}
        />
        <View style={styles.containerSignIn}>
          <TouchableOpacity
            style={[styles.buttonSignIn]}
            onPress={this.handleFormSubmit}
          >
            {loading ? (
              <ActivityIndicator size="small" color={styles.icon.color} />
            ) : (
              <Text style={styles.buttonText}>Entrar</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.sign.loading
});
const mapDispachToProps = dispatch => bindActionCreators(SignActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispachToProps
)(LogIn);
