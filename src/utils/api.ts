import axios, { AxiosInstance } from 'axios'

export const baseUrl = 'https://boiling-refuge-66454.herokuapp.com/images';

class Api {
  baseUrl: string = 'https://boiling-refuge-66454.herokuapp.com/images';

  _tmp: AxiosInstance = axios.create({
    baseURL: this.baseUrl,
    responseType: 'json',
  })

  getAll = (): Promise<any> => {
    return this._tmp.get('/')
  }

  get = (id: number): Promise<any> => {
    return this._tmp.get(`/${id}`)
  }

  post = ({ id, name, comment }: { id: number, name: string, comment: string }): Promise<any> => {
    return this._tmp.post(`/${id}/comments`, {
      name: name,
      comment: comment,
    })
  }
}

export const api = new Api();