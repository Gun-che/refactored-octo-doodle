import { combineReducers } from 'redux'
import { homeRedducer } from './home'
import { itemReducer } from './item'

export const rootReducer = combineReducers({
  home: homeRedducer,
  current: itemReducer,
})