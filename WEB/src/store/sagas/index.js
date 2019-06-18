import { all, takeLatest } from 'redux-saga/effects';
import { Types as PurchaseTypes } from '../ducks/purchase';
import { Types as SignTypes } from '../ducks/sign';
import { loadingPurchase, endingPurchase } from './purchase';
import { signIn } from './sign';

export default function* rootSaga() {
  yield all(
    [takeLatest(SignTypes.REQUEST_SIGN_IN, signIn)],
    [takeLatest(PurchaseTypes.REQUEST_LOAD_PURCHASE, loadingPurchase)],
    [takeLatest(PurchaseTypes.REQUEST_END_PURCHASE, endingPurchase)],
  );
}
