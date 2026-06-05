import React, { useState } from 'react'
import { PortfolioElement } from '../portfolioElement'
import emailSvg from '../../../assets/media/icons/email.svg'
import { useTranslation } from 'react-i18next'

import style from './email.module.css'

export const EmailElement: React.FC = () => {
  const { t } = useTranslation('leftGrid')
  const [isCopied, setIsCopied] = useState(false)

  const email = 'timurarid@yandex.ru'

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setIsCopied(true)

      setTimeout(() => {
        setIsCopied(false)
      }, 1500)
    } catch (error) {
      console.error('Не удалось скопировать:', error)
    }
  }

  return (
    <PortfolioElement icon={<img src={emailSvg} alt="" />}>
      <h3 className={style.title}>{t('email')}</h3>
      <button type="button" onClick={copyEmail} className={style.button}>
        {email}
      </button>
      {isCopied && <span className={style.tooltip}>{t('copy')}</span>}
    </PortfolioElement>
  )
}
