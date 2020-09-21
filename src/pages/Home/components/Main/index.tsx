import React from 'react'
import s from './index.module.scss'
import { IResponse } from '../../../../types/response'
import { ErrorMessage } from '../../../../components/ErrorMessage'
import { LoadingThin } from '../../../../components/Loading'
import { Link } from 'react-router-dom'
type IProps = {
  getData: () => void;
  data: IResponse;
  isFetching: boolean;
  message: string;
}

export const Main: React.FC<IProps> = ({
  getData,
  data,
  isFetching,
  message,
}) => {

  React.useEffect(() => {
    getData()
  }, [data.length, getData])

  const tmp = () => {
    return isFetching ? <LoadingThin /> :
      data.map((i) => {
        return (
          <div key={i.id} className={s.img}>
            <Link to={process.env.PUBLIC_URL + `/${i.id}`}>
              <img src={i.url} alt='' />
            </Link>
          </div>
        )
      })
  }

  return (
    <div className={s.main}>
      <ErrorMessage message={message} />
      {tmp()}
    </div>
  )
}
