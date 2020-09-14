import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePagePropsFromRedux } from '../../containers/HomePageContainer'
import { Main } from './components/Main'
import { Item } from './components/Item'

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
        <Route path={process.env.PUBLIC_URL + '/'} exact>
          <Main
            getData={getData}
            message={message}
            isFetching={isFetching}
            data={data}
          />
        </Route>
        <Route path={process.env.PUBLIC_URL + '/:id'}>
          <Item
            getItem={getItem}
            postComment={postComment}
            current={current}
          />
        </Route>
      </Switch>
    </div>
  )
}

