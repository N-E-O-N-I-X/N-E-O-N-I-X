import React from 'react'
import { AvatarImage } from '../../Avatar'
import { useTranslation } from 'react-i18next'
import { EmailElement } from '../../PorfolioElement/Email'
import { PhoneElement } from '../../PorfolioElement/Phone'
import { BirthdayElement } from '../../PorfolioElement/Birhtday'
import { LinksBlock } from '../../Links'

import style from './leftGrid.module.css'

export const LeftGrid: React.FC = () => {
  const { t } = useTranslation('leftGrid')

  return (
    <div className={style.container}>
      <div className={style.aboutContainer}>
        <div className={style.avatarContainer}>
          <AvatarImage />
        </div>
        <h2 className={style.name}>{t('name')}</h2>
        <div className={style.positionContainer}>
          <p className={style.position}>{t('position')}</p>
        </div>
      </div>
      <div className={style.dataContainer}>
        <EmailElement />
        <PhoneElement />
        <BirthdayElement />
      </div>
      <LinksBlock />
    </div>
  )
}
