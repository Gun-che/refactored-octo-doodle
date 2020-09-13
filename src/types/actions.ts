
export interface IAction {
  type: string;
  payload?: any;
}

export type IHomeDataRequestArgs = string[];

export interface IHomeDataRequest extends IAction {
  payload: IHomeDataRequestArgs;
}

