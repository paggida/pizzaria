/**
 * Action Types
 */
export const Types = {
  REQUEST_PRODUCTS: 'sign/REQUEST_PRODUCTS',
  REQUEST_TYPES: 'sign/REQUEST_TYPES',
  REQUEST_SIZES: 'sign/REQUEST_SIZES',
  SUCCESS_PRODUCTS: 'sign/SUCCESS_PRODUCTS',
  SUCCESS_TYPES: 'sign/SUCCESS_TYPES',
  SUCCESS_SIZES: 'sign/SUCCESS_SIZES',
  FAILURE_REQUEST: 'sign/FAILURE_REQUEST',
};
/**
 * Reducer
 */
const INITIAL_STATE = {
  loading: false,
  products: [],
  types: [],
  sizes: [],
  error: null,
};
export default function sign(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST_PRODUCTS:
    case Types.REQUEST_TYPES:
    case Types.REQUEST_SIZES:
      return { ...state, loading: true };
    case Types.SUCCESS_PRODUCTS:
      return { ...state, loading: false, products: action.payload.products };
    case Types.SUCCESS_TYPES:
      return { ...state, loading: false, types: action.payload.types };
    case Types.SUCCESS_SIZES:
      return { ...state, loading: false, sizes: action.payload.sizes };
    case Types.FAILURE_REQUEST:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
/**
 * Action creators
 */
export const Creators = {
  requestProducts: () => ({ type: Types.REQUEST_PRODUCTS }),
  requestTypes: idProduct => ({ type: Types.REQUEST_TYPES, payload: { idProduct } }),
  requestSizes: data => ({ type: Types.REQUEST_SIZES, payload: { data } }),
  successProducts: products => ({ type: Types.SUCCESS_PRODUCTS, payload: { products } }),
  successTypes: types => ({ type: Types.SUCCESS_TYPES, payload: { types } }),
  successSizes: sizes => ({ type: Types.SUCCESS_SIZES, payload: { sizes } }),
  failureRequest: error => ({ type: Types.FAILURE_REQUEST, payload: { error } }),
};
