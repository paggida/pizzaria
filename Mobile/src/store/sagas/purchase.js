import { call, put, select } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
import apiZipCode from '../../services/apiZipCode';
import { Creators as PurchaseActions } from '../ducks/purchase';

export function* requestHistory({ payload: { idUser } }) {
  try {
    const tkn = yield AsyncStorage.getItem('@Storage_tkn');
    const authorization = tkn
      ? { headers: { Authorization: `bearer ${tkn}` } }
      : {};

    const { data } = yield call(api.get, `/purchases/${idUser}`, authorization);
    yield put(PurchaseActions.successHistory(data));
  } catch (err) {
    yield put(
      PurchaseActions.failureRequest('Ops... Infelizmente tivemos um problema!'),
    );
  }
}
export function* requestAddress({ payload: { cep } }) {
  try {
    const {
      data: { bairro, logradouro },
    } = yield call(apiZipCode.get, cep);
    yield put(
      PurchaseActions.successAddress({ district: bairro, street: logradouro }),
    );
  } catch (err) {
    yield put(
      PurchaseActions.failureRequest('Ops... Infelizmente tivemos um problema!'),
    );
  }
}
export function* requestSendPurchase({ payload: { purchase } }) {
  try {
    const tkn = yield AsyncStorage.getItem('@Storage_tkn');
    const authorization = tkn
      ? { headers: { Authorization: `bearer ${tkn}` } }
      : {};

    const shoppingCart = yield select(state => state.purchase.shoppingCart);
    const newPurchase = {
      ...purchase,
      fullValue: Number(purchase.fullValue),
      number: Number(purchase.number),
      purchaseItems: shoppingCart.map(item => ({
        type_id: item.type_id,
        size_id: item.size_id,
        price: Number(item.price),
      })),
    };

    console.tron.log(newPurchase);
    yield call(api.post, '/purchases', newPurchase, authorization);
    yield put(PurchaseActions.successPurchase());
  } catch (err) {
    yield put(
      PurchaseActions.failureRequest('Ops... Infelizmente tivemos um problema!'),
    );
  }
}
