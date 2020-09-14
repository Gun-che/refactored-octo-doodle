
export interface IAction {
  type: string;
  payload?: any;
}

export interface ICommentBody {
  id: number;
  name: string;
  comment: string;
}

export interface IHomeDataItemRequest extends IAction {
  payload: { id: number };
}

export interface IHomePostRequest extends IAction {
  payload: ICommentBody;
}

