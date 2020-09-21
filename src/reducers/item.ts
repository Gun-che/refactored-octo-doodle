import { IAction } from './../types/actions';
import { IStateItem } from './../types/state';
import * as A from '../actions/home';

export const initState: IStateItem = {
  isFetching: false,
  data: { id: '', url: '', comments: [] },
  message: '',
}

export function itemReducer(
  state: IStateItem = initState,
  action: IAction
): IStateItem {

  switch (action.type) {

    case A.HOME_DATA_ITEM_REQUEST:
      return {
        ...state,
        isFetching: true,
        message: '',
      }

    case A.HOME_DATA_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      }

    case A.HOME_DATA_ITEM_FAILURE:
      return {
        ...state,
        isFetching: false,
        message: action.payload.message,
      }

    case A.HOME_POST_REQUEST:
      return {
        ...state,
        isFetching: true,
        message: '',
      }

    case A.HOME_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        message: 'Комментарий отправлен!',
      }

    case A.HOME_POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        message: action.payload.message,
      }

    default:
      return state;
  }
}