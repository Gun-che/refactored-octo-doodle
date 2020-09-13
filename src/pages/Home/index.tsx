import React from 'react'
import { HomePagePropsFromRedux } from '../../containers/HomePageContainer'

import s from './index.module.scss'

export const HomePage: React.FC<HomePagePropsFromRedux> = ({
  data,
  isFetching,
  message,
  getData,
}) => {
  return (
    <div className={s.wrap}>
      {data.map((i: string) => {
        return (
          <div key={i} className={s.item}>
            {i}
          </div>
        )
      })}
    </div>
  )
}
