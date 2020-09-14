import React, { Dispatch } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { createHomeDataRequest, createHomeDataItemRequest, createHomePostDataRequest } from '../actions/home'
import { Action } from 'redux'
import { HomePage } from '../pages/Home'
import { IStore } from '../types/state'
import { ICommentBody } from '../types/actions'

const mapStateToProps = (state: IStore) => ({
  data: state.home.data,
  isFetching: state.home.isFetching,
  message: state.home.message,
  current: state.current,
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  getData: () => dispatch(createHomeDataRequest()),
  getItem: (id: number) => dispatch(createHomeDataItemRequest({ id })),
  postComment: (options: ICommentBody) => dispatch(createHomePostDataRequest(options)),
})

const connector = connect(mapStateToProps, mapDispatchToProps);

export type HomePagePropsFromRedux = ConnectedProps<typeof connector>;

export const HomePageContainer: React.FC<HomePagePropsFromRedux> = ({
  data,
  isFetching,
  message,
  getData,
  getItem,
  postComment,
  current
}) => {
  return (
    <HomePage
      data={data}
      isFetching={isFetching}
      message={message}
      getData={getData}
      current={current}
      getItem={getItem}
      postComment={postComment}
    />
  )
}

export default connector(HomePageContainer)
