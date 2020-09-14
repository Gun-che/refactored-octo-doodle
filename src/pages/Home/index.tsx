import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePagePropsFromRedux } from '../../containers/HomePageContainer'

import s from './index.module.scss'

export const HomePage: React.FC<HomePagePropsFromRedux> = ({
  data,
  isFetching,
  message,
  getData,
  getItem,
  postComment,
  current,
}) => {
  return (
    <div className={s.wrap}>
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/'} exact component={Main} />
        <Route path={process.env.PUBLIC_URL + '/:number'} component={Item} />
      </Switch>
    </div>
  )
}

