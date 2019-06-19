/**
 * Action Types
 */
export const Types = {
  REQUEST_LOAD_PURCHASE: 'purchase/REQUEST_LOAD_PURCHASE',
  REQUEST_END_PURCHASE: 'purchase/REQUEST_END_PURCHASE',
  LOADING_PURCHASE: 'purchase/LOADING_PURCHASE',
  ENDING_PURCHASE: 'purchase/ENDING_PURCHASE',
  FAILURE_PURCHASE: 'purchase/FAILURE_PURCHASE',
};
/**
 * Reducer
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};
export default function purchase(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST_LOAD_PURCHASE:
    case Types.REQUEST_END_PURCHASE:
      return { ...state, loading: true };
    case Types.LOADING_PURCHASE:
      return { ...state, loading: false, data: action.payload.data };
    case Types.ENDING_PURCHASE:
      return {
        ...state,
        loading: false,
        data: state.data.filter(item => item.id !== action.payload.id),
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
  requestEndingPurchase: () => ({ type: Types.REQUEST_END_PURCHASE }),
  loadingPurchase: data => ({ type: Types.LOADING_PURCHASE, payload: { data } }),
  endingPurchase: id => ({ type: Types.ENDING_PURCHASE, payload: { id } }),
  failurePurchase: error => ({ type: Types.FAILURE_PURCHASE, payload: { error } }),
};
