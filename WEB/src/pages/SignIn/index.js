import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Creators as SignActions } from '../../store/ducks/sign';
// import { Container, Repository } from './styles';

class SignIn extends Component {
  state = {
    email: 'admin@gmail.com',
    password: '123123',
  };

  static propTypes = {
    requestSignIn: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  render() {
    const { email, password } = this.state;
    const { requestSignIn, loading } = this.props;

    if (sessionStorage.getItem('tknPizza')) {
      return <Redirect to="/Home" />;
    }

    return (
      <Fragment>
        <h1>SignIn</h1>
        <form>
          <input
            type="text"
            placeholder="Seu e-mail"
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Senha secreta"
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button
            type="button"
            disabled={!(email && password)}
            onClick={() => {
              requestSignIn(this.state);
            }}
          >
            {loading ? <i className="fa fa-spinner fa-pulse" /> : 'Entrar'}
          </button>
        </form>
      </Fragment>
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
)(SignIn);
