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

class NewUser extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConfirmed: ""
  };

  static propTypes = {
    requestNewUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  };

  handleFormSubmit = () => {
    const { requestNewUser } = this.props;
    const { name, email, password, passwordConfirmed } = this.state;
    requestNewUser({
      name,
      email,
      password,
      password_confirmation: passwordConfirmed
    });
  };

  render() {
    const { name, email, password, passwordConfirmed } = this.state;
    const { loading } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("~/assets/img/logo.png")} />
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={name => this.setState({ name })}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome completo"
          placeholderTextColor={styles.placeholder.color}
        />
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
        <TextInput
          style={styles.input}
          value={passwordConfirmed}
          onChangeText={passwordConfirmed =>
            this.setState({ passwordConfirmed })
          }
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Confirme a senha"
          placeholderTextColor={styles.placeholder.color}
        />
        <View style={styles.containerNewUser}>
          <TouchableOpacity
            style={[styles.buttonNewUser]}
            onPress={this.handleFormSubmit}
          >
            {loading ? (
              <ActivityIndicator size="small" color={styles.icon.color} />
            ) : (
              <Text style={styles.buttonText}>Criar conta</Text>
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
)(NewUser);
