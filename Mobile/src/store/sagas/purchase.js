import { call, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
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
export function* requestAddress() {
  /* try {
    const tkn = yield AsyncStorage.getItem('@Storage_tkn');
    const authorization = tkn ? { headers: { Authorization: `bearer ${tkn}` } } : {};

    const { data: user } = yield call(api.post, '/users', newUser, authorization);
    yield put(SignActions.successSignIn(user));
  } catch (err) {
    // 401 - Usuário ou token existente
    // 400 - Campos em formato inválido
    if (err.message.indexOf('code 401') !== -1 || err.message.indexOf('code 400') !== -1) {
      yield put(SignActions.failureSignIn('Dados incorretos!'));
    } else {
      yield put(SignActions.failureSignIn('Erro no acesso da API!'));
    }
  } */
}
export function* requestSendPurchase() {
  /* try {
    const tkn = yield AsyncStorage.getItem('@Storage_tkn');
    const authorization = tkn ? { headers: { Authorization: `bearer ${tkn}` } } : {};

    const { data: user } = yield call(api.post, '/users', newUser, authorization);
    yield put(SignActions.successSignIn(user));
  } catch (err) {
    // 401 - Usuário ou token existente
    // 400 - Campos em formato inválido
    if (err.message.indexOf('code 401') !== -1 || err.message.indexOf('code 400') !== -1) {
      yield put(SignActions.failureSignIn('Dados incorretos!'));
    } else {
      yield put(SignActions.failureSignIn('Erro no acesso da API!'));
    }
  } */
}
