import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as SignActions } from '../../store/ducks/sign';
import { Creators as PurchaseActions } from '../../store/ducks/purchase';
import {
  Container, Title, Admin, AdminData, AdminAction,
} from './styles';
import logo from '../../assets/img/logo.png';
import 'font-awesome/css/font-awesome.css';

class Header extends Component {
  state = {
    logOut: false,
  };

  static propTypes = {
    deliveredPurchase: PropTypes.func.isRequired,
    requestSignOut: PropTypes.func.isRequired,
    delivered: PropTypes.bool.isRequired,
    nameUser: PropTypes.string.isRequired,
  };

  handleteste = () => {
    this.setState({ logOut: true });
    setTimeout(() => {
      this.setState({ logOut: false });
    }, 3000);
  };

  render() {
    const {
      delivered, deliveredPurchase, requestSignOut, nameUser,
    } = this.props;
    const { logOut } = this.state;

    return (
      <Container>
        <Title>
          <div>
            <img src={logo} alt="Pizzaria Don Juan" />
            <h1>Pizzaria Don Juan</h1>
          </div>
        </Title>
        <Admin>
          <div className="adminContainer">
            <AdminData logOut={logOut}>
              <strong>{nameUser}</strong>
              {logOut ? (
                <button type="button" onClick={requestSignOut}>
                  <i className="fa fa-warning" />
                  {' '}
Clique para confirmar
                </button>
              ) : (
                <button type="button" onClick={this.handleteste}>
                  Sair do App
                </button>
              )}
            </AdminData>
            <AdminAction>
              <button
                type="button"
                title={delivered ? 'Visualizar pedidos pendentes' : 'Visualizar pedidos entregues'}
                onClick={() => {
                  deliveredPurchase(!delivered);
                }}
              >
                {delivered ? (
                  <i className="fa fa-edit fa-lg" />
                ) : (
                  <i className="fa fa-history fa-lg" />
                )}
              </button>
            </AdminAction>
          </div>
        </Admin>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  delivered: state.purchase.delivered,
  nameUser: state.sign.nameUser,
});
const mapDispachToProps = dispatch => bindActionCreators({ ...PurchaseActions, ...SignActions }, dispatch);
export default connect(
  mapStateToProps,
  mapDispachToProps,
)(Header);
