import { all } from 'redux-saga/effects'
import { watcherGetAllRequest, watcherGetItemRequest, watcherPostCommentRequest } from './home'

export function* rootSaga() {

  yield all([
    watcherGetAllRequest,
    watcherGetItemRequest,
    watcherPostCommentRequest,
  ])
}