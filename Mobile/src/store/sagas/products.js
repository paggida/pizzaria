import { call, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
import { Creators as ProductsActions } from '../ducks/products';

export function* requestProducts() {
  try {
    const tkn = yield AsyncStorage.getItem('@Storage_tkn');
    const authorization = tkn
      ? { headers: { Authorization: `bearer ${tkn}` } }
      : {};

    const { data } = yield call(api.get, '/products', authorization);
    yield put(ProductsActions.successProducts(data));
  } catch (err) {
    yield put(
      ProductsActions.failureRequest('Ops... Infelizmente tivemos um problema!'),
    );
  }
}
export function* requestTypes({ payload: { idProduct } }) {
  try {
    const tkn = yield AsyncStorage.getItem('@Storage_tkn');
    const authorization = tkn
      ? { headers: { Authorization: `bearer ${tkn}` } }
      : {};

    const { data } = yield call(
      api.get,
      `/products/${idProduct}/types`,
      authorization,
    );
    yield put(ProductsActions.successTypes(data));
  } catch (err) {
    yield put(
      ProductsActions.failureRequest('Ops... Infelizmente tivemos um problema!'),
    );
  }
}
export function* requestSizes({
  payload: {
    data: { idProduct, idType },
  },
}) {
  try {
    const tkn = yield AsyncStorage.getItem('@Storage_tkn');
    const authorization = tkn
      ? { headers: { Authorization: `bearer ${tkn}` } }
      : {};

    const { data } = yield call(
      api.get,
      `/products/${idProduct}/types/${idType}/sizes`,
      authorization,
    );
    yield put(ProductsActions.successSizes(data));
  } catch (err) {
    yield put(
      ProductsActions.failureRequest('Ops... Infelizmente tivemos um problema!'),
    );
  }
}
