import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as PurchaseActions } from '../ducks/purchase';

export function* loadingPurchase() {
  try {
    const tkn = sessionStorage.getItem('tknPizza')
      ? { headers: { Authorization: `bearer ${sessionStorage.getItem('tknPizza')}` } }
      : {};
    const {
      data: { admin },
    } = yield call(api.get, '/users', tkn);
    if (admin) {
      const { data } = yield call(api.get, '/purchases', tkn);
      yield put(PurchaseActions.loadingPurchase(data));
    } else {
      sessionStorage.removeItem('tknPizza');
    }
  } catch (err) {
    yield put(PurchaseActions.loadingPurchaseFailure('Erro no acesso da API!'));
  }
}

export function* endingPurchase({ payload: { id } }) {
  try {
    const tkn = sessionStorage.getItem('tknPizza')
      ? { headers: { Authorization: `bearer ${sessionStorage.getItem('tknPizza')}` } }
      : {};
    const request = yield call(api.put, `/purchases/${id}`, { delivered: true }, tkn);

    if (request.status === 200) {
      yield put(PurchaseActions.requestLoadingPurchase());
    }
  } catch (err) {
    yield put(PurchaseActions.addDevsFailure('Erro no acesso da API!'));
  }
}
