import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as SignActions } from '../ducks/sign';

export function* signIn({ payload: { data } }) {
  try {
    const response = yield call(api.post, '/sessions', data);
    const {
      data: { admin, name },
    } = yield call(api.get, '/users', {
      headers: { Authorization: `bearer ${response.data.token}` },
    });
    if (admin) {
      sessionStorage.setItem('tknPizza', response.data.token);
      yield put(SignActions.successSignIn(name));
    } else {
      yield put(SignActions.failureSignIn('Acesso não permitido!'));
    }
  } catch (err) {
    // 401 - Usuário ou token existente
    // 400 - Campos em formato inválido
    if (err.message.indexOf('code 401') !== -1 || err.message.indexOf('code 400') !== -1) {
      yield put(SignActions.failureSignIn('Email ou senha incorretos!'));
    } else {
      yield put(SignActions.failureSignIn('Erro no acesso da API!'));
    }
  }
}

export function* getNameUser() {
  try {
    const {
      data: { admin, name },
    } = yield call(api.get, '/users', {
      headers: { Authorization: `bearer ${sessionStorage.getItem('tknPizza')}` },
    });
    if (admin) {
      yield put(SignActions.successSignIn(name));
    } else {
      yield put(SignActions.failureSignIn('Acesso não permitido!'));
    }
  } catch (err) {
    yield put(SignActions.failureSignIn('Erro no acesso da API!'));
  }
}
