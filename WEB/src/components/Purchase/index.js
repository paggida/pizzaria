import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as PurchaseActions } from '../../store/ducks/purchase';
import {
  Container, Thead, PurchaseItens, Item,
} from './styles';
import 'font-awesome/css/font-awesome.css';
import pizza from '../../assets/img/pizza.png';
import refri from '../../assets/img/cocaLata.jpg';

const Purchase = ({
  id,
  name,
  fromNow,
  formatFullValue,
  description,
  requestEndingPurchase,
  loading,
  delivered,
}) => (
  <Container>
    <Thead>
      <p>
        Pedido
        <b>{` #${id}`}</b>
        {` - ${name}`}
      </p>
      {!delivered && (
        <button
          type="button"
          disabled={loading}
          onClick={() => {
            requestEndingPurchase(id);
          }}
        >
          {loading ? <i className="fa fa-clock-o fa-lg" /> : <i className="fa fa-check fa-lg" />}
        </button>
      )}
    </Thead>
    <small>{`${fromNow}`}</small>
    <strong>{`R$${formatFullValue}`}</strong>
    <PurchaseItens>
      <Item>
        <img src={pizza} alt="pizza" />
        <div>
          <p className="type">Pizza Frango com catupiry</p>
          <p className="size">Tamanho: Média</p>
        </div>
      </Item>
      <Item>
        <img src={refri} alt="refri" />
        <div>
          <p className="type">Coca Cola</p>
          <p className="size">Lata 300ml</p>
        </div>
      </Item>
    </PurchaseItens>
    <p className="description">
      <b>Observações: </b>
      {description}
    </p>
  </Container>
);

Purchase.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  fromNow: PropTypes.string.isRequired,
  formatFullValue: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  requestEndingPurchase: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  delivered: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loading: state.purchase.loading,
  delivered: state.purchase.delivered,
});
const mapDispachToProps = dispatch => bindActionCreators(PurchaseActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispachToProps,
)(Purchase);
