
export interface IState {
  isFetching: boolean;
  message: string;
  data: string[];
}

export interface IStoreState {
  home: IState;
}