/**
 * Action Types
 */
export const Types = {
  REQUEST_SIGN_IN: 'sign/REQUEST_SIGN_IN',
  REQUEST_SIGN_UP: 'sign/REQUEST_SIGN_UP',
  SUCCESS_SIGN_IN: 'sign/SUCCESS_SIGN_IN',
  FAILURE_SIGN: 'sign/FAILURE_SIGN',
  CLEAN_ERROR: 'sign/CLEAN_ERROR',
};
/**
 * Reducer
 */
const INITIAL_STATE = {
  loading: false,
  logged: false,
  error: null,
};
export default function sign(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST_SIGN_UP:
    case Types.REQUEST_SIGN_IN:
      return { ...state, loading: true };
    case Types.SUCCESS_SIGN_IN:
      return {
        ...state, loading: false, error: null, logged: true,
      };
    case Types.FAILURE_SIGN:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case Types.CLEAN_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}
/**
 * Action creators
 */
export const Creators = {
  requestSignIn: data => ({ type: Types.REQUEST_SIGN_IN, payload: { data } }),
  requestSignUp: newUser => ({ type: Types.REQUEST_SIGN_UP, payload: { newUser } }),
  successSignIn: () => ({ type: Types.SUCCESS_SIGN_IN }),
  failureSignIn: error => ({ type: Types.FAILURE_SIGN, payload: { error } }),
  cleanError: () => ({ type: Types.CLEAN_ERROR }),
};
