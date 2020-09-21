import React, { Props } from 'react'
import s from './index.module.scss'

interface IState {
  hasError: boolean;
  msg: string;
  err: number;
}

export class ErrorBoundary extends React.Component<Props<any>, IState> {
  constructor(props: Props<any>) {
    super(props);
    this.state = {
      hasError: false,
      msg: '',
      err: 0,
    }
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      msg: error.message,
      err: error.name,
    }
  }

  render() {
    const { err, msg, hasError } = this.state;

    if (hasError) {
      return (
        <>
          <h1>Что-то пошлло не так, пожалуйста обновите страницу!</h1>
          <div className={s.wrap + ' container'}>
            {err}
            <h3>{msg}</h3>
          </div>
        </>
      )

    } else {
      return this.props.children
    }
  }
}
