export interface IResponseItem {
  id: number;
  url: string;
}

export interface IRawResponse { data: IResponseItem[]; }

export type IResponse = IResponseItem[]

export interface IResponseOne {
  id: number,
  url: string,
  comments: {
    id: number,
    text: string,
    date: number
  }[]
}