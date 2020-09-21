import React from 'react'
import s from './index.module.scss'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <div className={s.logo}>
          <Link to={process.env.PUBLIC_URL + '/'} >А</Link>
        </div>
        <Link to={process.env.PUBLIC_URL + '/404'}>404</Link>
      </nav>
    </header>
  )
}
