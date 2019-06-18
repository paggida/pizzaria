import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PurchaseActions } from '../../store/ducks/purchase';
// import PropTypes from 'prop-types';
// import { Temp } from './styles';

class Home extends Component {
  state = {
    showAddBox: false,
  };

  /* static propTypes = {
    requestSignIn: propTypes.func.isRequired,
    loading: propTypes.bool.isRequired,
    error: propTypes.string,
  }; */

  render() {
    // const { requestSignIn, loading, error } = this.props;
    const { showAddBox } = this.state;
    return (
      <Fragment>
        <h1>Home</h1>
        <h1>{showAddBox}</h1>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.sign.loading,
  error: state.sign.error,
});
const mapDispachToProps = dispatch => bindActionCreators(PurchaseActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispachToProps,
)(Home);
