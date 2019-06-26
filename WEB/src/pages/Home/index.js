import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Creators as SignActions } from '../../store/ducks/sign';
import { Creators as PurchaseActions } from '../../store/ducks/purchase';
import Header from '../../components/Header';
// import { Temp } from './styles';

class Home extends Component {
  static propTypes = {
    requestLoadingPurchase: PropTypes.func.isRequired,
    requestNameUser: PropTypes.func.isRequired,
    nameUser: PropTypes.string,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        description: PropTypes.string,
        formatFullValue: PropTypes.string,
      }),
    ).isRequired,
  };

  static defaultProps = {
    nameUser: '',
  };

  componentDidMount() {
    const { requestLoadingPurchase, requestNameUser, nameUser } = this.props;

    // Bloqueia acessos direto a página
    if (sessionStorage.getItem('tknPizza')) {
      // No caso de refresh, recupera o login
      if (!nameUser) requestNameUser();
      requestLoadingPurchase();
    }
  }

  render() {
    const { data } = this.props;
    return !sessionStorage.getItem('tknPizza') ? (
      <Redirect to="/" />
    ) : (
      <Fragment>
        <Header />
        {data.map(purchase => (
          <p key={purchase.id}>
            {`${purchase.id}-${purchase.description}-R$${purchase.formatFullValue}`}
          </p>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  error: state.purchase.error,
  data: state.purchase.data,
  nameUser: state.sign.nameUser,
});
const mapDispachToProps = dispatch => bindActionCreators({ ...PurchaseActions, ...SignActions }, dispatch);
export default connect(
  mapStateToProps,
  mapDispachToProps,
)(Home);
