import { all, takeLatest } from 'redux-saga/effects';
import { Types as SignTypes } from '../ducks/sign';
import { Types as PurchaseTypes } from '../ducks/purchase';
import { Types as ProductsTypes } from '../ducks/products';
import { signIn, newUser } from './sign';
import {
  requestHistory,
  requestAddress,
  requestSendPurchase
} from './purchase';
import { requestProducts, requestTypes, requestSizes } from './products';

export default function* rootSaga() {
  yield all([
    takeLatest(SignTypes.REQUEST_SIGN_IN, signIn),
    takeLatest(SignTypes.REQUEST_SIGN_UP, newUser),
    takeLatest(PurchaseTypes.REQUEST_HISTORY, requestHistory),
    takeLatest(PurchaseTypes.REQUEST_ADDRESS, requestAddress),
    takeLatest(PurchaseTypes.REQUEST_SEND_PURCHASE, requestSendPurchase),
    takeLatest(ProductsTypes.REQUEST_PRODUCTS, requestProducts),
    takeLatest(ProductsTypes.REQUEST_TYPES, requestTypes),
    takeLatest(ProductsTypes.REQUEST_SIZES, requestSizes)
  ]);
}
