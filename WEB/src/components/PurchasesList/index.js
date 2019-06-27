import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as PurchaseActions } from '../../store/ducks/purchase';
import {
  Container, Thead, Tbody, Empty,
} from './styles';
import 'font-awesome/css/font-awesome.css';
import Purchase from '../Purchase';
import logo from '../../assets/img/logoGray.png';

class PurchasesList extends Component {
  static propTypes = {
    requestLoadingPurchase: PropTypes.func.isRequired,
    delivered: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        description: PropTypes.string,
        formatFullValue: PropTypes.string,
      }),
    ).isRequired,
  };

  componentDidMount() {
    const { requestLoadingPurchase } = this.props;
    // Bloqueia acessos direto a página
    if (sessionStorage.getItem('tknPizza')) {
      requestLoadingPurchase();
    }
  }

  render() {
    const {
      data, loading, delivered, requestLoadingPurchase,
    } = this.props;

    const dataFilter = data.filter(purchase => purchase.delivered === delivered);

    return (
      <Container>
        <Thead>
          <h2>{!delivered ? 'Últimos pedidos' : 'Histórico de entregas'}</h2>
          <button type="button" disabled={loading} onClick={requestLoadingPurchase}>
            {loading ? (
              <i className="fa fa-clock-o fa-lg" />
            ) : (
              <i className="fa fa-refresh fa-lg" />
            )}
          </button>
        </Thead>
        <Tbody>
          {dataFilter.length ? (
            dataFilter.map(purchase => (
              <Purchase
                key={purchase.id}
                id={purchase.id}
                name={purchase.user.name}
                fromNow={purchase.fromNow}
                formatFullValue={purchase.formatFullValue}
                description={purchase.description}
                types={purchase.type}
                sizes={purchase.size}
              />
            ))
          ) : (
            <Empty>
              <img src={logo} alt="Pizzaria Don Juan" />
              <p>Nenhum registro encontrado</p>
            </Empty>
          )}
        </Tbody>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  delivered: state.purchase.delivered,
  data: state.purchase.data,
  loading: state.purchase.loading,
});
const mapDispachToProps = dispatch => bindActionCreators(PurchaseActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispachToProps,
)(PurchasesList);
