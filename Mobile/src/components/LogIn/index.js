import React, { Component } from 'react';
import { Text, Image, View, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class LogIn extends Component {
  state = {
    email: '',
    password: '',
  };

  static propTypes={
    sucessLogIn: PropTypes.func.isRequired,
  }

  handleFormSubmit = () => {
    const { sucessLogIn } = this.props
    sucessLogIn()
  };

  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.container}>
        <Image  style={styles.logo} source={require('~/assets/img/logo.png')}/>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(email)=>this.setState({ email })}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Seu E-mail"
          placeholderTextColor={styles.placeholder.color}
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(password)=>this.setState({ password })}
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
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default LogIn;
