import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image, StatusBar, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { Creators as PurchaseActions } from '~/store/ducks/purchase';
import styles from './styles';
import { colors } from '~/styles';
import HeaderBack from '~/components/HeaderBack';
import MistakeBox from '~/components/MistakeBox';
import Purchase from '~/components/Purchase';

const HeaderBackgroundImg = require('~/assets/img/headerBackground.png');

class History extends Component {
  static propTypes = {
    idUser: PropTypes.number.isRequired,
    navigation: PropTypes.shape().isRequired,
    requestHistory: PropTypes.func.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        fromNow: PropTypes.string,
        formatFullValue: PropTypes.string,
      }),
    ).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  };

  static defaultProps = {
    error: '',
  };

  componentDidMount() {
    const { requestHistory, idUser } = this.props;
    requestHistory(idUser);
  }

  render() {
    const {
      navigation,
      requestHistory,
      idUser,
      history,
      loading,
      error,
    } = this.props;
    return (
      <Fragment>
        <StatusBar backgroundColor={colors.black} barStyle="light-content" />
        <Image style={styles.background} source={HeaderBackgroundImg} />
        <HeaderBack
          title="Meus Pedidos"
          backPage="Products"
          navigation={navigation}
        />
        {!history.length || error ? (
          <MistakeBox error={error} message="Histórico vazio" />
        ) : (
          <FlatList
            data={history}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <Purchase item={item} />}
            onRefresh={() => {
              requestHistory(idUser);
            }}
            refreshing={loading}
          />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  idUser: state.sign.session.id,
  loading: state.purchase.loading,
  history: state.purchase.history,
  error: state.purchase.error,
});
const mapDispachToProps = dispatch => bindActionCreators(PurchaseActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispachToProps,
)(History);
