import React from 'react'
import codingGif from '../../assets/media/coding.gif'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import style from './error.module.css'

export const ErrorPage: React.FC = () => {
  const { i18n, t } = useTranslation('error')

  return (
    <div className={style.page}>
      <img className={style.gif} src={codingGif} alt="funny gif" />
      <h1 className={style.error}>{t('text.error')}</h1>
      <p>{t('text.notFound')}</p>
      <Link to="/">
        <span className={style.link}>{t('goHome')}</span>
      </Link>
    </div>
  )
}
