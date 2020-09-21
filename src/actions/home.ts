import { ICommentBody, IHomeDataItemRequest, IHomePostRequest, IAction } from './../types/actions';


export const HOME_DATA_REQUEST: string = 'HOME_DATA_REQUEST';
export const HOME_DATA_SUCCESS: string = 'HOME_DATA_SUCCESS';
export const HOME_DATA_FAILURE: string = 'HOME_DATA_FAILURE';
export const HOME_DATA_ITEM_REQUEST: string = 'HOME_DATA_ITEM_REQUEST';
export const HOME_DATA_ITEM_SUCCESS: string = 'HOME_DATA_ITEM_SUCCESS';
export const HOME_DATA_ITEM_FAILURE: string = 'HOME_DATA_ITEM_FAILURE';
export const HOME_POST_REQUEST: string = 'HOME_POST_REQUEST';
export const HOME_POST_SUCCESS: string = 'HOME_POST_SUCCESS';
export const HOME_POST_FAILURE: string = 'HOME_POST_FAILURE';

export const createHomeDataRequest = (): IAction => ({
  type: HOME_DATA_REQUEST,
})

export const createHomeDataItemRequest = (payload: { id: string }): IHomeDataItemRequest => ({
  type: HOME_DATA_ITEM_REQUEST,
  payload,
})

export const createHomePostDataRequest = (comment: ICommentBody): IHomePostRequest => ({
  type: HOME_POST_REQUEST,
  payload: comment,
})

