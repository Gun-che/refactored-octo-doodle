import { IAction } from './../types/actions';
import { IState } from './../types/state';
import * as A from '../actions/home';

export const initState: IState = {
  isFetching: false,
  data: [],
  message: '',
}

export function homeRedducer(
  state: IState = initState,
  action: IAction
) {

  switch (action.type) {
    case A.HOME_DATA_REQUEST:
      return {
        ...state,
        isFetching: true,
        message: '',
      }

    case A.HOME_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        message: '',
        data: action.payload,
      }

    case A.HOME_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        message: action.payload.message,
      }

    default:
      return state;
  }
}