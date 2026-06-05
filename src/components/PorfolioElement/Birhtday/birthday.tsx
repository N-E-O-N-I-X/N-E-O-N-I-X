import React from 'react'
import { PortfolioElement } from '../portfolioElement'
import calendarSvg from '../../../assets/media/icons/calendar.svg'
import { useTranslation } from 'react-i18next'

import style from './birthday.module.css'

export const BirthdayElement: React.FC = () => {
  const { t } = useTranslation('leftGrid')

  return (
    <PortfolioElement icon={<img src={calendarSvg} alt="" />}>
      <h3 className={style.title}>{t('birthday')}</h3>
      <button className={style.content}>{t('date')}</button>
    </PortfolioElement>
  )
}
