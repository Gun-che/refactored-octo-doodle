
export interface IAction {
  type: string;
  payload?: any;
}

export interface ICommentBody {
  id: string;
  name: string;
  comment: string;
}

export interface IHomeDataItemRequest extends IAction {
  payload: { id: string };
}

export interface IHomePostRequest extends IAction {
  payload: ICommentBody;
}

