import React from 'react'
import s from './index.module.scss'

export const ErrorMessage: React.FC<{ message: string, err?: boolean }> = (
  { message, err = true }
) => {

  const isErr = () => {
    return err ? s.err : s.noerr
  }

  return (<>
    {message ? (<div className={'containerCust ' + isErr()}><h2>{message}</h2></div>) : (<div className={s.emptyWrap}></div>)
    }
  </>)
}
