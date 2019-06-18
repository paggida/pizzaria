import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as SignActions } from '../ducks/sign';

export function* signIn({ payload: { data } }) {
  try {
    const response = yield call(api.post, '/sessions', data);
    const {
      data: { admin },
    } = yield call(api.get, '/users', {
      headers: { Authorization: `bearer ${response.data.token}` },
    });
    if (admin) {
      yield put(SignActions.successSignIn(response.data.token));
    } else {
      yield put(SignActions.failureSignIn('Acesso não permitido!'));
    }
  } catch (err) {
    if (err.message.indexOf('code 401') !== -1) {
      yield put(SignActions.failureSignIn('Email ou senha incorretos!'));
    } else {
      yield put(SignActions.failureSignIn('Erro no acesso da API!'));
    }
  }
}
