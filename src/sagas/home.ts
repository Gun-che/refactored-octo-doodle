import { IHomeDataRequest } from './../types/actions';
import {
  put,
  takeEvery,
  apply,
} from 'redux-saga/effects'
import * as A from '../actions/home'
import { api } from '../utils/api'
import { IResponse } from '../types/response';

export function* handlerGetAllRequest(action: IHomeDataRequest) {

  try {
    const response: IResponse = yield apply(api, api.getAll, [])

    yield put({
      type: A.HOME_DATA_SUCCESS,
      payload: response,
    })

  } catch (e) {

    yield put({
      type: A.HOME_DATA_FAILURE,
      payload: e,
    })
  }
}

export function* watcherGetAllRequest() {

  yield takeEvery(A.HOME_DATA_REQUEST, handlerGetAllRequest)
}