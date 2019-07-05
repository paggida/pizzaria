import { call, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from '~/services/api';
import { Creators as SignActions } from '../ducks/sign';

export function* signIn({ payload: { data } }) {
  try {
    const response = yield call(api.post, '/sessions', data);
    const { data: user } = yield call(api.get, '/users', {
      headers: { Authorization: `bearer ${response.data.token}` },
    });
    if (user.admin) {
      yield put(SignActions.failureSignIn('Acesso não permitido!'));
    } else {
      yield AsyncStorage.setItem('@Storage_tkn', response.data.token);
      yield put(SignActions.successSignIn(user));
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

export function* newUser({ payload: { newUser } }) {
  try {
    const tkn = yield AsyncStorage.getItem('@Storage_tkn');
    const authorization = tkn ? { headers: { Authorization: `bearer ${tkn}` } } : {};

    const { data: user } = yield call(api.post, '/users', newUser, authorization);
    yield put(SignActions.successSignIn(user));
  } catch (err) {
    // 401 - Usuário ou token existente
    // 400 - Campos em formato inválido
    if (err.message.indexOf('code 401') !== -1 || err.message.indexOf('code 400') !== -1) {
      yield put(SignActions.failureSignIn('Dados incorretos!'));
    } else {
      yield put(SignActions.failureSignIn('Erro no acesso da API!'));
    }
  }
}
