import React from 'react'
import style from './App.module.css'
import {Link, Outlet} from 'react-router-dom'

export default function App() {
  return(
    <div>
      <Link to={'/'}>
      <h1>My Bookkeeper!</h1>
      </Link>
      <nav className={style.nav}>
        <Link to={'/invoices'}> Invoices </Link>
        <Link to={'/expences'}> Expences </Link>
      </nav>
      <Outlet />
    </div>
  )
}

