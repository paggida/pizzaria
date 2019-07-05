import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Text, Image, View, TextInput, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import Alert from 'react-native-awesome-alerts';
import { Creators as SignActions } from '~/store/ducks/sign';
import styles from './styles';

class NewUser extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirmed: '',
  };

  static propTypes = {
    requestSignUp: PropTypes.func.isRequired,
    cleanError: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  };

  static defaultProps = {
    error: '',
  };

  handleFormSubmit = () => {
    const { requestSignUp } = this.props;
    const {
      name, email, password, passwordConfirmed,
    } = this.state;

    requestSignUp({
      name,
      email,
      password,
      password_confirmation: passwordConfirmed,
    });
  };

  render() {
    const {
      name, email, password, passwordConfirmed,
    } = this.state;
    const { loading, error, cleanError } = this.props;
    const emptyForm = !!(!name || !email || !password || !passwordConfirmed);

    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('~/assets/img/logo.png')} />
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
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Senha secreta"
          placeholderTextColor={styles.placeholder.color}
        />
        <TextInput
          style={styles.input}
          value={passwordConfirmed}
          onChangeText={passwordConfirmed => this.setState({ passwordConfirmed })}
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Confirme a senha"
          placeholderTextColor={styles.placeholder.color}
        />
        <View style={styles.containerNewUser}>
          <TouchableOpacity
            disabled={emptyForm}
            style={emptyForm ? styles.buttonNewUserDisabled : styles.buttonNewUser}
            onPress={this.handleFormSubmit}
          >
            {loading ? (
              <ActivityIndicator size="small" color={styles.icon.color} />
            ) : (
              <Text style={emptyForm ? styles.buttonTextDisabled : styles.buttonText}>Criar conta</Text>
            )}
          </TouchableOpacity>
        </View>
        <Alert
          show={!!error}
          showProgress={false}
          title="Ops..."
          message={error}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showConfirmButton
          confirmText="OK"
          confirmButtonColor={styles.buttonNewUser.backgroundColor}
          onConfirmPressed={cleanError}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.sign.loading,
  error: state.sign.error,
});
const mapDispachToProps = dispatch => bindActionCreators(SignActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispachToProps,
)(NewUser);
