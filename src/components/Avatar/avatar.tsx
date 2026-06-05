import React from 'react'
import avatarSvg from '../../assets/media/icons/avatar.svg'
// import { useTranslation } from 'react-i18next'

import style from './avatar.module.css'

export const AvatarImage: React.FC = () => {
  // const { i18n, t } = useTranslation('')

  return <img src={avatarSvg} className={style.avatar}></img>
}
