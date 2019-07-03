/**
 * Action Types
 */
export const Types = {
  REQUEST_SIGN_IN: "sign/REQUEST_SIGN_IN",
  REQUEST_NEW_USER: "sign/REQUEST_NEW_USER",
  SUCCESS_SIGN_IN: "sign/SUCCESS_SIGN_IN",
  FAILURE_SIGN: "sign/FAILURE_SIGN"
};
/**
 * Reducer
 */
const INITIAL_STATE = {
  loading: false,
  error: null
};
export default function sign(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST_NEW_USER:
    case Types.REQUEST_SIGN_IN:
      return { ...state, loading: true };
    case Types.SUCCESS_SIGN_IN:
      return { ...state, loading: false };
    case Types.FAILURE_SIGN:
      return {
        ...state,
        loading: false,
        error: action.payload.error
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
  requestNewUser: data => ({ type: Types.REQUEST_NEW_USER, payload: { data } }),
  successSignIn: () => ({ type: Types.SUCCESS_SIGN_IN }),
  failureSignIn: error => ({ type: Types.FAILURE_SIGN, payload: { error } })
};
