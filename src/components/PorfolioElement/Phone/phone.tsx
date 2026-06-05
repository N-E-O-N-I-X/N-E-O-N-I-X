import React, { useState } from 'react'
import { PortfolioElement } from '../portfolioElement'
import phoneSvg from '../../../assets/media/icons/phone.svg'
import { useTranslation } from 'react-i18next'

import style from './phone.module.css'

export const PhoneElement: React.FC = () => {
  const { t } = useTranslation('leftGrid')
  const [isCopied, setIsCopied] = useState(false)

  const phone = '+7 (977) 359 18-23'

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phone)
      setIsCopied(true)

      setTimeout(() => {
        setIsCopied(false)
      }, 1500)
    } catch (error) {
      console.error('Не удалось скопировать:', error)
    }
  }

  return (
    <PortfolioElement icon={<img src={phoneSvg} alt="" />}>
      <h3 className={style.title}>{t('phone')}</h3>
      <button type="button" onClick={copyPhone} className={style.button}>
        {phone}
      </button>
      {isCopied && <span className={style.tooltip}>{t('copy')}</span>}
    </PortfolioElement>
  )
}
