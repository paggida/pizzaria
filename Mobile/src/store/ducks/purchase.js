/**
 * Action Types
 */
export const Types = {
  REQUEST_HISTORY: 'purchase/REQUEST_HISTORY',
  REQUEST_ADDRESS: 'purchase/REQUEST_ADDRESS',
  REQUEST_SEND_PURCHASE: 'purchase/REQUEST_SEND_PURCHASE',
  REQUEST_ADD_ITEM: 'purchase/REQUEST_ADD_ITEM',
  REQUEST_REMOVE_ITEM: 'purchase/REQUEST_REMOVE_ITEM',
  SUCCESS_ADDRESS: 'purchase/SUCCESS_ADDRESS',
  SUCCESS_HISTORY: 'purchase/SUCCESS_HISTORY',
  SUCCESS_PURCHASE: 'purchase/SUCCESS_PURCHASE',
  FAILURE_REQUEST: 'purchase/FAILURE_REQUEST',
};
/**
 * Reducer
 */
const INITIAL_STATE = {
  loading: false,
  address: {},
  history: [],
  shoppingCart: [],
  error: null,
};
export default function purchase(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST_HISTORY:
    case Types.REQUEST_ADDRESS:
    case Types.REQUEST_SEND_PURCHASE:
      return { ...state, loading: true };
    case Types.REQUEST_ADD_ITEM:
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload.newItem],
      };
    case Types.REQUEST_REMOVE_ITEM:
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(item => item.id !== action.payload.idItem),
      };
    case Types.SUCCESS_HISTORY:
      return {
        ...state,
        loading: false,
        error: null,
        history: action.payload.history.filter(item => item.delivered),
      };
    case Types.SUCCESS_ADDRESS:
      return {
        ...state,
        loading: false,
        error: null,
        address: action.payload.address,
      };
    case Types.SUCCESS_PURCHASE:
      return {
        ...state,
        loading: false,
        error: null,
        shoppingCart: [],
      };
    case Types.FAILURE_REQUEST:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}
/**
 * Action creators
 */
export const Creators = {
  requestHistory: idUser => ({ type: Types.REQUEST_HISTORY, payload: { idUser } }),
  requestAddress: cep => ({ type: Types.REQUEST_ADDRESS, payload: { cep } }),
  requestSendPurchase: purchase => ({ type: Types.REQUEST_SEND_PURCHASE, payload: { purchase } }),
  requestAddItem: newItem => ({ type: Types.REQUEST_ADD_ITEM, payload: { newItem } }),
  requestRemoveItem: idItem => ({ type: Types.REQUEST_REMOVE_ITEM, payload: { idItem } }),
  successAddress: address => ({ type: Types.SUCCESS_ADDRESS, payload: { address } }),
  successHistory: history => ({ type: Types.SUCCESS_HISTORY, payload: { history } }),
  successPurchase: () => ({ type: Types.SUCCESS_PURCHASE }),
  failureRequest: error => ({ type: Types.FAILURE_REQUEST, payload: { error } }),
};
