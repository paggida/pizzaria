import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Alert from 'react-native-awesome-alerts';
import PropTypes from 'prop-types';
import { Creators as SignActions } from '~/store/ducks/sign';
import styles from './styles';

const LogoImg = require('~/assets/img/logo.png');

class LogIn extends Component {
  state = {
    email: '',
    password: '',
  };

  static propTypes = {
    requestSignIn: PropTypes.func.isRequired,
    cleanError: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  };

  static defaultProps = {
    error: '',
  };

  handleFormSubmit = () => {
    const { email, password } = this.state;
    const { requestSignIn } = this.props;
    requestSignIn({ email: email.trim(), password });
  };

  render() {
    const { email, password } = this.state;
    const { loading, error, cleanError } = this.props;
    const emptyForm = !!(!email || !password);

    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={LogoImg} />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={emailChange => this.setState({ email: emailChange })}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Seu e-mail"
          placeholderTextColor={styles.placeholder.color}
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={passwordChange => this.setState({ password: passwordChange })
          }
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Senha secreta"
          placeholderTextColor={styles.placeholder.color}
        />
        <View style={styles.containerSignIn}>
          <TouchableOpacity
            disabled={emptyForm}
            style={
              emptyForm ? styles.buttonSignInDisabled : styles.buttonSignIn
            }
            onPress={this.handleFormSubmit}
          >
            {loading ? (
              <ActivityIndicator size="small" color={styles.icon.color} />
            ) : (
              <Text
                style={
                  emptyForm ? styles.buttonTextDisabled : styles.buttonText
                }
              >
                Entrar
              </Text>
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
          confirmButtonColor={styles.buttonSignIn.backgroundColor}
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
)(LogIn);
