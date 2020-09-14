import { IRawResponse, IResponseOne } from './../types/response';
import { IAction, IHomeDataItemRequest, IHomePostRequest } from './../types/actions';
import {
  put,
  takeEvery,
  apply,
} from 'redux-saga/effects'
import * as A from '../actions/home'
import { api } from '../utils/api'
import { IResponse } from '../types/response';

export function* handlerGetAllRequest(action: IAction) {

  try {
    const response: IRawResponse = yield apply(api, api.getAll, [])
    console.log('!!!!!')
    yield put({
      type: A.HOME_DATA_SUCCESS,
      payload: response.data,
    })

  } catch (e) {

    yield put({
      type: A.HOME_DATA_FAILURE,
      payload: e,
    })
  }
}

export function* handlerGetItemRequest(action: IHomeDataItemRequest) {

  try {
    const response: IResponseOne = yield apply(api, api.get, [action.payload.id])

    yield put({
      type: A.HOME_DATA_ITEM_SUCCESS,
      payload: response,
    })

  } catch (e) {

    yield put({
      type: A.HOME_DATA_ITEM_FAILURE,
      payload: e,
    })
  }
}


export function* handlerPostCommentRequest(action: IHomePostRequest) {

  try {

    const { id, name, comment } = action.payload;

    const response: any = yield apply(api, api.post, [{ id, name, comment }])

    yield put({
      type: A.HOME_POST_SUCCESS,
      payload: response,
    })

    yield put({
      type: A.HOME_DATA_REQUEST,
    })

  } catch (e) {

    yield put({
      type: A.HOME_POST_FAILURE,
      payload: e,
    })
  }
}



export function* watcherGetAllRequest() {

  yield takeEvery(A.HOME_DATA_REQUEST, handlerGetAllRequest)
}

export function* watcherGetItemRequest() {

  yield takeEvery(A.HOME_DATA_ITEM_REQUEST, handlerGetItemRequest)
}

export function* watcherPostCommentRequest() {

  yield takeEvery(A.HOME_POST_REQUEST, handlerPostCommentRequest)
}