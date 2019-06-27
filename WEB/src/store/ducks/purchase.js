/**
 * Action Types
 */
export const Types = {
  REQUEST_LOAD_PURCHASE: 'purchase/REQUEST_LOAD_PURCHASE',
  REQUEST_END_PURCHASE: 'purchase/REQUEST_END_PURCHASE',
  LOADING_PURCHASE: 'purchase/LOADING_PURCHASE',
  DELIVERED_PURCHASE: 'purchase/DELIVERED_PURCHASE',
  FAILURE_PURCHASE: 'purchase/FAILURE_PURCHASE',
};
/**
 * Reducer
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  delivered: false,
  error: null,
};
export default function purchase(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST_LOAD_PURCHASE:
    case Types.REQUEST_END_PURCHASE:
      return { ...state, loading: true };
    case Types.LOADING_PURCHASE:
      return { ...state, loading: false, data: action.payload.data };
    case Types.DELIVERED_PURCHASE:
      return {
        ...state,
        delivered: action.payload.delivered,
      };
    case Types.FAILURE_PURCHASE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}
/**
 * Action creators
 */
export const Creators = {
  requestLoadingPurchase: () => ({ type: Types.REQUEST_LOAD_PURCHASE }),
  requestEndingPurchase: id => ({ type: Types.REQUEST_END_PURCHASE, payload: { id } }),
  loadingPurchase: data => ({ type: Types.LOADING_PURCHASE, payload: { data } }),
  deliveredPurchase: delivered => ({ type: Types.DELIVERED_PURCHASE, payload: { delivered } }),
  failurePurchase: error => ({ type: Types.FAILURE_PURCHASE, payload: { error } }),
};
