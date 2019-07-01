/**
 * Action Types
 */
export const Types = {
  REQUEST_SIGN_IN: 'sign/REQUEST_SIGN_IN',
  REQUEST_SIGN_OUT: 'sign/REQUEST_SIGN_OUT',
  SUCCESS_SIGN_IN: 'sign/SUCCESS_SIGN_IN',
  FAILURE_SIGN: 'sign/FAILURE_SIGN',
  REQUEST_NAME_USER: 'sign/REQUEST_NAME_USER',
};
/**
 * Reducer
 */
const INITIAL_STATE = {
  loading: false,
  error: null,
  nameUser: '',
};
export default function sign(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST_SIGN_IN:
      return { ...state, loading: true };
    case Types.REQUEST_SIGN_OUT:
      //sessionStorage.setItem('tknPizza', '');
      return { ...state, nameUser: '' };
    case Types.SUCCESS_SIGN_IN:
      return { ...state, loading: false, nameUser: action.payload.nameUser };
    case Types.FAILURE_SIGN:
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
  requestSignIn: data => ({ type: Types.REQUEST_SIGN_IN, payload: { data } }),
  requestSignOut: () => ({ type: Types.REQUEST_SIGN_OUT }),
  requestNameUser: () => ({ type: Types.REQUEST_NAME_USER }),
  successSignIn: nameUser => ({ type: Types.SUCCESS_SIGN_IN, payload: { nameUser } }),
  failureSignIn: error => ({ type: Types.FAILURE_SIGN, payload: { error } }),
};
