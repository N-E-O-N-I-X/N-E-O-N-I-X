import React from 'react'
import tgSvg from '../../assets/media/icons/tg.svg'
import ghSvg from '../../assets/media/icons/gh.svg'
import liSvg from '../../assets/media/icons/li.svg'

import style from './links.module.css'

export const LinksBlock: React.FC = () => {
  return (
    <div className={style.container}>
      <a target="_blank" className={style.link} href="https://t.me/N_E_O_N_I_X">
        <img className={style.img} src={tgSvg} alt="tg" />
      </a>
      <a
        target="_blank"
        className={style.link}
        href="https://www.linkedin.com/in/timur-el-aridi-a31938413?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
      >
        <img className={style.img} src={liSvg} alt="li" />
      </a>
      <a target="_blank" className={style.link} href="https://github.com/N-E-O-N-I-X">
        <img className={style.img} src={ghSvg} alt="gh" />
      </a>
    </div>
  )
}
