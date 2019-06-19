import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Creators as PurchaseActions } from '../../store/ducks/purchase';
// import { Temp } from './styles';

class Home extends Component {
  static propTypes = {
    requestLoadingPurchase: PropTypes.func.isRequired,
    // loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        description: PropTypes.string,
        formatFullValue: PropTypes.string,
      }),
    ).isRequired,
  };

  static defaultProps = {
    error: null,
  };

  componentDidMount() {
    const { requestLoadingPurchase } = this.props;
    requestLoadingPurchase();
  }

  render() {
    const { data, error } = this.props;

    if (!sessionStorage.getItem('tknPizza')) {
      return <Redirect to="/" />;
    }
    return (
      <Fragment>
        <h1>Home</h1>
        {error && <h1>{error}</h1>}
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
  // loading: state.purchase.loading,
  error: state.purchase.error,
  data: state.purchase.data,
});
const mapDispachToProps = dispatch => bindActionCreators(PurchaseActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispachToProps,
)(Home);
