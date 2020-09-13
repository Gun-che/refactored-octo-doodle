import { IHomeDataRequestArgs, IHomeDataRequest } from './../types/actions';


export const HOME_DATA_REQUEST: string = 'HOME_DATA_REQUEST';
export const HOME_DATA_SUCCESS: string = 'HOME_DATA_SUCCESS';
export const HOME_DATA_FAILURE: string = 'HOME_DATA_FAILURE';

export const createHomeDataRequest = (args: IHomeDataRequestArgs): IHomeDataRequest => ({
  type: HOME_DATA_REQUEST,
  payload: args,
})

