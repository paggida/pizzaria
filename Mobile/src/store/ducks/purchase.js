/**
 * Action Types
 */
export const Types = {
  REQUEST_HISTORY: 'purchase/REQUEST_HISTORY',
  REQUEST_ADDRESS: 'purchase/REQUEST_ADDRESS',
  REQUEST_SEND_PURCHASE: 'purchase/REQUEST_SEND_PURCHASE',
  REQUEST_ADD_ITEM: 'purchase/REQUEST_ADD_ITEM',
  REQUEST_REMOVE_ITEM: 'purchase/REQUEST_REMOVE_ITEM',
  REQUEST_SELECT_PRODUCT: 'purchase/REQUEST_SELECT_PRODUCT',
  REQUEST_SELECT_TYPE: 'purchase/REQUEST_SELECT_TYPE',
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
  purchaseItem: {
    product_id: 0,
    type_id: 0,
    price: 0,
  },
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
        shoppingCart: [
          ...state.shoppingCart,
          {
            ...state.purchaseItem,
            id: state.shoppingCart.length + 1,
            size_id: action.payload.data.idSize,
            price: state.purchaseItem.price * action.payload.data.baseIndex,
          },
        ],
        purchaseItem: {
          product_id: 0,
          type_id: 0,
          price: 0,
        },
      };
    case Types.REQUEST_REMOVE_ITEM:
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(
          item => item.id !== action.payload.idItem,
        ),
      };
    case Types.REQUEST_SELECT_PRODUCT:
      return {
        ...state,
        purchaseItem: {
          id: 0,
          product_id: action.payload.idProduct,
          type_id: 0,
          size_id: 0,
          price: 0,
        },
      };
    case Types.REQUEST_SELECT_TYPE:
      return {
        ...state,
        purchaseItem: {
          ...state.purchaseItem,
          type_id: action.payload.data.idType,
          price: action.payload.data.baseValue,
        },
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
  requestHistory: idUser => ({
    type: Types.REQUEST_HISTORY,
    payload: { idUser },
  }),
  requestAddress: cep => ({ type: Types.REQUEST_ADDRESS, payload: { cep } }),
  requestSendPurchase: purchase => ({
    type: Types.REQUEST_SEND_PURCHASE,
    payload: { purchase },
  }),
  requestAddItem: data => ({
    type: Types.REQUEST_ADD_ITEM,
    payload: { data },
  }),
  requestRemoveItem: idItem => ({
    type: Types.REQUEST_REMOVE_ITEM,
    payload: { idItem },
  }),
  requestSelectProduct: idProduct => ({
    type: Types.REQUEST_SELECT_PRODUCT,
    payload: { idProduct },
  }),
  requestSelectType: data => ({
    type: Types.REQUEST_SELECT_TYPE,
    payload: { data },
  }),
  successAddress: address => ({
    type: Types.SUCCESS_ADDRESS,
    payload: { address },
  }),
  successHistory: history => ({
    type: Types.SUCCESS_HISTORY,
    payload: { history },
  }),
  successPurchase: () => ({ type: Types.SUCCESS_PURCHASE }),
  failureRequest: error => ({ type: Types.FAILURE_REQUEST, payload: { error } }),
};
