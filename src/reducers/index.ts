import { combineReducers } from 'redux'
import { homeRedducer } from './home'

export const rootReducer = combineReducers({
  home: homeRedducer,
})