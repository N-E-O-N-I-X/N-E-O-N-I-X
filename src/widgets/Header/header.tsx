import React from 'react'
import style from './header.module.css'
import { useTranslation } from 'react-i18next'

export const Header: React.FC = () => { 
  const { i18n, t } = useTranslation(`header`)

  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <div className={style.container}>
      <button onClick={handleChangeLanguage} className={style.lang}>{t('changeLang')}</button>
    </div>
  )
}