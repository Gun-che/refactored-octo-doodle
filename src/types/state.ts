import { IResponse, IResponseData } from "./response";

export interface IState {
  isFetching: boolean;
  message: string;
  data: IResponse;
}

export interface IStoreState {
  home: IState;
}

export type IStateItem = {
  isFetching: boolean;
  data: IResponseData;
  message: string;
}

export interface IStore {
  current: IStateItem;
  home: IState;
}