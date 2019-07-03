import React, { Component } from "react";
import { Text, Image, View, TextInput, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

class LogIn extends Component {
  state = {
    nome: "",
    email: "",
    password: "",
    passwordConfirmed: ""
  };

  static propTypes = {
    sucessSave: PropTypes.func.isRequired
  };

  handleFormSubmit = () => {
    const { sucessSave } = this.props;
    sucessSave();
  };

  render() {
    const { nome, email, password, passwordConfirmed } = this.state;
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("~/assets/img/logo.png")} />
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={nome => this.setState({ nome })}
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
            <Text style={styles.buttonText}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LogIn;
