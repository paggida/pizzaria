import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Creators as SignActions } from '../../store/ducks/sign';
import Header from '../../components/Header';
import PurchasesList from '../../components/PurchasesList';

class Home extends Component {
  static propTypes = {
    requestNameUser: PropTypes.func.isRequired,
    nameUser: PropTypes.string,
  };

  static defaultProps = {
    nameUser: '',
  };

  componentDidMount() {
    const { requestNameUser, nameUser } = this.props;
    // No caso de refresh, recupera o login
    if (sessionStorage.getItem('tknPizza')) {
      if (!nameUser) requestNameUser();
    }
  }

  render() {
    return !sessionStorage.getItem('tknPizza') ? (
      <Redirect to="/" />
    ) : (
      <Fragment>
        <Header />
        <PurchasesList />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  nameUser: state.sign.nameUser,
});
const mapDispachToProps = dispatch => bindActionCreators(SignActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispachToProps,
)(Home);
