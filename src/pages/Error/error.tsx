import React from 'react'
import codingGif from '../../assets/media/coding.gif'
import { Link } from 'react-router-dom'

import style from './error.module.css'

export const ErrorPage: React.FC = () => {
  return (
    <div className={style.page}>
      <img className={style.gif} src={codingGif} alt="funny gif" />
      <h1 className={style.error}>error</h1>
      <p>page not found</p>
      <Link  to="/">
        <span className={style.link}>go home</span>
      </Link>
    </div>
  )
}
