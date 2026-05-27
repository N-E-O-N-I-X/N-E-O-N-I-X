import React from 'react'
import { useTranslation } from 'react-i18next'

import style from './home.module.css'

export const HomePage: React.FC = () => {
  const { i18n, t } = useTranslation('home') 

  return (
    <div className={style.page}>
      <h1 className={style.heading}>{t('main')}</h1>
    </div>
  )
}
