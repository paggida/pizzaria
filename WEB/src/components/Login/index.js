import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Creators as SignActions } from '../../store/ducks/sign';
import { Container } from './styles';
import logo from '../../assets/img/logo.png';
import ButtonSign from '../ButtonSign';
import Input from '../Input';

class Login extends Component {
  static propTypes = {
    requestSignIn: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    zIndex: PropTypes.number,
  };

  static defaultProps = {
    zIndex: 0,
  };

  state = {
    email: '',
    password: '',
    emptyEmail: false,
    emptyPassword: false,
  };

  handleSendForm = () => {
    const { email, password } = this.state;
    const { requestSignIn } = this.props;
    if (email && password) {
      requestSignIn(this.state);
    } else {
      toast.warn('Por favor, preencha o e-mail e senha para acesso');
    }
  };

  render() {
    const { email, password } = this.state;
    const { loading, zIndex } = this.props;

    if (sessionStorage.getItem('tknPizza')) {
      return <Redirect to="/Home" />;
    }
    return (
      <Container zIndex={zIndex}>
        <img src={logo} alt="Pizzaria Don Juan" />
        <Input
          type="text"
          placeholder="Seu e-mail"
          value={email}
          onChange={e => this.setState({ email: e.target.value, emptyEmail: false })}
        />
        <Input
          type="password"
          placeholder="Senha secreta"
          value={password}
          onChange={e => this.setState({ password: e.target.value, emptyPassword: false })}
          enterFunc={this.handleSendForm}
        />
        <ButtonSign type="button" onClick={this.handleSendForm} loading={loading} value="Entrar" />
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
