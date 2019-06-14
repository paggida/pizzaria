import { all, takeLatest } from 'redux-saga/effects';
import { Types as PurchaseTypes } from '../ducks/purchase';
import { loadingPurchase, endingPurchase } from './purchase';

export default function* rootSaga() {
  yield all(
    [takeLatest(PurchaseTypes.REQUEST_LOAD_PURCHASE, loadingPurchase)],
    [takeLatest(PurchaseTypes.REQUEST_END_PURCHASE, endingPurchase)],
  );
}
