import React, { Dispatch } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { createHomeDataRequest } from '../actions/home'
import { Action } from 'redux'
import { IHomeDataRequestArgs } from '../types/actions'
import { HomePage } from '../pages/Home'

const mapStateToProps = (state: (any)) => ({
  data: state.home.data,
  isFetching: state.home.isFetching,
  message: state.home.message,
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  getData: (args: IHomeDataRequestArgs) => dispatch(createHomeDataRequest(args)),
})

const connector = connect(mapStateToProps, mapDispatchToProps);

export type HomePagePropsFromRedux = ConnectedProps<typeof connector>;

export const HomePageContainer: React.FC<HomePagePropsFromRedux> = ({
  data,
  isFetching,
  message,
  getData,
}) => {
  return (
    <HomePage
      data={data}
      isFetching={isFetching}
      message={message}
      getData={getData}
    />
  )
}

export default connector(HomePageContainer)
