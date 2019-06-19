import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Creators as SignActions } from '../../store/ducks/sign';
import { Container } from './styles';
import logo from '../../assets/img/logo.png';
import ButtonSign from '../ButtonSign';
import InputText from '../InputText';

class Login extends Component {
  state = {
    email: '',
    password: '',
    emptyEmail: false,
    emptyPassword: false,
  };

  static propTypes = {
    requestSignIn: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    zIndex: PropTypes.number,
  };

  static defaultProps = {
    zIndex: 0,
  };

  render() {
    const {
      email, password, emptyEmail, emptyPassword,
    } = this.state;
    const { requestSignIn, loading, zIndex } = this.props;

    if (sessionStorage.getItem('tknPizza')) {
      return <Redirect to="/Home" />;
    }
    return (
      <Container zIndex={zIndex}>
        <img src={logo} alt="Pizzaria Don Juan" />
        <InputText
          placeholder="Seu e-mail"
          error={emptyEmail}
          value={email}
          onChange={e => this.setState({ email: e.target.value, error: false })}
        />
        <InputText
          placeholder="Senha secreta"
          error={emptyPassword}
          value={password}
          onChange={e => this.setState({ password: e.target.value, error: false })}
        />
        <ButtonSign
          type="button"
          onClick={() => {
            if (email && password) {
              requestSignIn(this.state);
            } else {
              this.setState({ emptyEmail: !email, emptyPassword: !password });
            }
          }}
          loading={loading}
          value="Entrar"
        />
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.sign.loading,
});
const mapDispachToProps = dispatch => bindActionCreators(SignActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispachToProps,
)(Login);
