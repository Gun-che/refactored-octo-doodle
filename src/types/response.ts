export interface IResponseItem {
  id: number;
  url: string;
}

export interface IRawResponse { data: IResponseItem[]; }

export type IResponse = IResponseItem[]

export interface IResponseOne {
  data: IResponseData,
  status: number
}

export interface IResponseData {
  id: string,
  url: string,
  comments: {
    id: string,
    text: string,
    date: number
  }[]
}