import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import Alert from 'react-native-awesome-alerts';
import { Creators as PurchaseActions } from '~/store/ducks/purchase';
import styles from './styles';
import Icons from 'react-native-vector-icons/FontAwesome';

class FormPurchase extends Component {
  state = {
    description: '',
    zipCode: '',
    number: '',
  };

  static propTypes = {
    shoppingCartItems: PropTypes.number.isRequired,
    requestSendPurchase: PropTypes.func.isRequired,
    requestAddress: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    address: PropTypes.shape({
      district: PropTypes.string,
      street: PropTypes.string,
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      getParam: PropTypes.func,
    }).isRequired,
  };

  handleFormSubmit = () => {
    const { requestSendPurchase, address } = this.props;
    const { description, zipCode, number } = this.state;

    requestSendPurchase({
      description,
      zipCode,
      street: address.street,
      number,
      district: address.district,
      fullValue: 0.0,
    });
  };

  handleZipCodeCompleted = () => {
    const { zipCode } = this.state;
    return zipCode.length === 8;
  };

  render() {
    const { description, zipCode, number } = this.state;
    const {
      loading,
      navigation,
      shoppingCartItems,
      requestAddress,
      requestSendPurchase,
      address,
    } = this.props;
    const emptyForm = !!(
      !zipCode
      || !address.street
      || !number
      || !address.district
    );

    return (
      <Fragment>
        <View style={styles.container}>
          <TextInput
            style={[
              styles.inputEnabled,
              styles.input,
              styles.description,
              styles.defaultMargin,
            ]}
            value={description}
            onChangeText={descriptionChange => this.setState({ description: descriptionChange })
            }
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Alguma observação?"
            placeholderTextColor={styles.placeholder.color}
          />
          <TextInput
            style={[styles.inputEnabled, styles.input, styles.defaultMargin]}
            value={zipCode}
            maxLength={8}
            onChangeText={(zipCodeChange) => {
              if (zipCodeChange.length === 8) {
                requestAddress(zipCodeChange);
              }
              this.setState({ zipCode: zipCodeChange });
            }}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Qual seu CEP?"
            placeholderTextColor={styles.placeholder.color}
          />
          <View style={styles.address}>
            <TextInput
              style={[styles.inputDisabled, styles.input, styles.street]}
              editable={false}
              value={address.street}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Rua"
              placeholderTextColor={styles.placeholder.color}
            />
            <TextInput
              style={
                this.handleZipCodeCompleted()
                  ? [styles.inputEnabled, styles.input, styles.number]
                  : [styles.inputDisabled, styles.input, styles.number]
              }
              editable={this.handleZipCodeCompleted()}
              value={number}
              onChangeText={numberChange => this.setState({ number: numberChange })
              }
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Nº"
              placeholderTextColor={styles.placeholder.color}
            />
          </View>
          <TextInput
            style={[styles.inputDisabled, styles.input, styles.defaultMargin]}
            editable={false}
            value={address.district}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Bairro"
            placeholderTextColor={styles.placeholder.color}
          />
          <View style={styles.containerAction}>
            <TouchableOpacity
              disabled={emptyForm || !this.handleZipCodeCompleted()}
              style={
                emptyForm || loading
                  ? [styles.buttonDisabled, styles.button]
                  : [styles.buttonEnabled, styles.button]
              }
              onPress={() => {
                requestSendPurchase({
                  description,
                  fullValue: navigation.getParam('sumPrice', '0,00'),
                  zipCode,
                  street: address.street,
                  number,
                  district: address.district,
                });
              }}
            >
              {loading ? (
                <ActivityIndicator
                  size="small"
                  color={styles.textEnabled.color}
                />
              ) : (
                <Fragment>
                  <Text
                    style={
                      emptyForm || loading
                        ? [styles.text, styles.textDisabled, styles.bold]
                        : [styles.text, styles.textEnabled, styles.bold]
                    }
                  >
                    FINALIZAR
                  </Text>
                  <Icons
                    style={
                      emptyForm || loading
                        ? [styles.text, styles.textDisabled, styles.buttonIcon]
                        : [styles.text, styles.textEnabled, styles.buttonIcon]
                    }
                    name="chevron-right"
                    size={14}
                  />
                </Fragment>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <Alert
          show={!shoppingCartItems}
          showProgress={false}
          title="Pedido enviado!"
          message="Em breve estaremos em sua porta."
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showConfirmButton
          confirmText="OK"
          confirmButtonColor={styles.buttonEnabled.backgroundColor}
          onConfirmPressed={() => {
            navigation.navigate('Products');
          }}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  shoppingCartItems: state.purchase.shoppingCart.length,
  loading: state.purchase.loading,
  address: state.purchase.address,
});
const mapDispachToProps = dispatch => bindActionCreators(PurchaseActions, dispatch);
export default withNavigation(
  connect(
    mapStateToProps,
    mapDispachToProps,
  )(FormPurchase),
);
