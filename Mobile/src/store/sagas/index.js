import { all, takeLatest } from 'redux-saga/effects';
import { Types as SignTypes } from '../ducks/sign';
import { Types as PurchaseTypes } from '../ducks/purchase';
import { signIn, newUser } from './sign';
import { requestHistory, requestAddress, requestSendPurchase } from './purchase';

export default function* rootSaga() {
  yield all([
    takeLatest(SignTypes.REQUEST_SIGN_IN, signIn),
    takeLatest(SignTypes.REQUEST_SIGN_UP, newUser),
    takeLatest(PurchaseTypes.REQUEST_HISTORY, requestHistory),
    takeLatest(PurchaseTypes.REQUEST_ADDRESS, requestAddress),
    takeLatest(PurchaseTypes.REQUEST_SEND_PURCHASE, requestSendPurchase),
  ]);
}
