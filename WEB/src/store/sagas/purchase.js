import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as PurchaseActions } from '../ducks/purchase';

export function* loadingPurchase() {
  try {
    const data = yield call(api.get, '/purchases');
    yield put(PurchaseActions.loadingPurchase(data));
  } catch (err) {
    yield put(PurchaseActions.loadingPurchaseFailure('Erro no acesso da API!'));
  }
}

export function* endingPurchase({ payload: { id } }) {
  try {
    const request = yield call(api.del, `/purchases/${id}`);

    if (request.status === 204) {
      yield put(PurchaseActions.endingPurchase(id));
    }
  } catch (err) {
    yield put(PurchaseActions.addDevsFailure('Erro no acesso da API!'));
  }
}
