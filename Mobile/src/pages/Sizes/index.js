import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image, StatusBar, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { Creators as ProductsActions } from '~/store/ducks/products';
import styles from './styles';
import { colors } from '~/styles';
import HeaderBack from '~/components/HeaderBack';
import Size from '~/components/Size';

const HeaderBackgroundImg = require('~/assets/img/headerBackground.png');

class Sizes extends Component {
  static propTypes = {
    requestSizes: PropTypes.func.isRequired,
    sizes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    loading: PropTypes.bool.isRequired,
    purchaseItem: PropTypes.shape({
      idProduct: PropTypes.number,
      type_id: PropTypes.number,
    }).isRequired,
  };

  componentDidMount() {
    const {
      requestSizes,
      purchaseItem: { idProduct, type_id: idType },
    } = this.props;
    requestSizes({ idProduct, idType });
  }

  createRows = (data, columns) => {
    const rows = Math.floor(data.length / columns);
    let lastRowElements = data.length - rows * columns;

    while (lastRowElements !== 0) {
      data.push({
        id: lastRowElements + data.length,
        file: { url: '' },
        empty: true,
      });
      lastRowElements -= 1;
    }
    return data;
  };

  render() {
    const { requestSizes, sizes, loading } = this.props;
    return (
      <Fragment>
        <StatusBar backgroundColor={colors.black} barStyle={colors.barStyle} />
        <Image style={styles.background} source={HeaderBackgroundImg} />
        <HeaderBack title="Selecione um tamanho" backPage="Types" />
        <FlatList
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          data={this.createRows(sizes, 2)}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Size item={item} targetPage="Products" />}
          onRefresh={requestSizes}
          refreshing={loading}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.products.loading,
  sizes: state.products.sizes,
  error: state.products.error,
  purchaseItem: state.purchase.purchaseItem,
});
const mapDispachToProps = dispatch => bindActionCreators(ProductsActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispachToProps,
)(Sizes);
