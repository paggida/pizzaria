import { all, takeLatest } from 'redux-saga/effects';
// import { Types as PurchaseTypes } from '../ducks/purchase';
import { Types as SignTypes } from '../ducks/sign';
// import { loadingPurchase, endingPurchase } from './purchase';
import { signIn, newUser } from './sign';

export default function* rootSaga() {
  yield all([
    takeLatest(SignTypes.REQUEST_SIGN_IN, signIn),
    takeLatest(SignTypes.REQUEST_SIGN_UP, newUser),
  ]);
}
