import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/**
 * Action Types
 */
export const Types = {
  REQUEST_SIGN_IN: 'sign/REQUEST_SIGN_IN',
  REQUEST_SIGN_OUT: 'sign/REQUEST_SIGN_OUT',
  SUCCESS_SIGN_IN: 'sign/SUCCESS_SIGN_IN',
  FAILURE_SIGN: 'sign/FAILURE_SIGN',
  REQUEST_USER_ADMIN: 'sign/REQUEST_USER_ADMIN',
};
/**
 * Reducer
 */
const INITIAL_STATE = {
  loading: false,
  error: null,
};
export default function sign(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST_SIGN_IN:
      return { ...state, loading: true };
    case Types.REQUEST_SIGN_OUT:
      return { ...state, token: null };
    case Types.SUCCESS_SIGN_IN:
      return { ...state, loading: false };
    case Types.FAILURE_SIGN:
      toast.error(action.payload.error);
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
  successSignIn: () => ({ type: Types.SUCCESS_SIGN_IN }),
  failureSignIn: error => ({ type: Types.FAILURE_SIGN, payload: { error } }),
  requestUserAdmin: () => ({ type: Types.REQUEST_USER_ADMIN }),
};
