import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as PurchaseActions } from '../../store/ducks/purchase';
import {
  Container, Thead, PurchaseItens, Item,
} from './styles';
import 'font-awesome/css/font-awesome.css';

const Purchase = ({
  id,
  name,
  fromNow,
  formatFullValue,
  description,
  requestEndingPurchase,
  loading,
  delivered,
  types,
  sizes,
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
      {types.map((type, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Item key={`${type.id}${i}`}>
          <img src={`${process.env.REACT_APP_API_URL}/files/${type.id}`} alt={type.description} />
          <div>
            <p className="type">{type.description}</p>
            <p className="size">{`Tamanho: ${sizes[i].description}`}</p>
          </div>
        </Item>
      ))}
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
  types: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      file_id: PropTypes.number,
      description: PropTypes.string,
    }),
  ).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
    }),
  ).isRequired,
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
