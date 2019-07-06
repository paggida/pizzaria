import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image, StatusBar, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { Creators as ProductsActions } from '~/store/ducks/products';
import styles from './styles';
import { colors } from '~/styles';
import HeaderActions from '~/components/HeaderActions';
import MistakeBox from '~/components/MistakeBox';
import Product from '~/components/Product';

class Products extends Component {
  static propTypes = {
    navigation: PropTypes.shape().isRequired,
    requestProducts: PropTypes.func.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        preparation: PropTypes.number,
        file_id: PropTypes.number,
      }),
    ).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  };

  static defaultProps = {
    error: '',
  };

  componentDidMount() {
    const { requestProducts } = this.props;
    requestProducts();
  }

  render() {
    const {
      navigation,
      requestProducts,
      products,
      loading,
      error,
    } = this.props;
    return (
      <Fragment>
        <StatusBar backgroundColor={colors.black} barStyle="light-content" />
        <Image
          style={styles.background}
          source={require('~/assets/img/headerBackground.png')}
        />
        <HeaderActions title="Pizzaria Don Juan" navigation={navigation} />
        {!products.length || error ? (
          <MistakeBox message="Estamos temporariamente indisponíveis." />
        ) : (
          <FlatList
            data={products}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Product item={item} navigation={navigation} />
            )}
            onRefresh={requestProducts}
            refreshing={loading}
          />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.products.loading,
  products: state.products.products,
  error: state.products.error,
});
const mapDispachToProps = dispatch => bindActionCreators(ProductsActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispachToProps,
)(Products);
