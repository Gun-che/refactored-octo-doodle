import { all } from 'redux-saga/effects'
import { watcherGetAllRequest } from './home'

export function* rootSaga() {

  yield all([
    watcherGetAllRequest,
  ])
}