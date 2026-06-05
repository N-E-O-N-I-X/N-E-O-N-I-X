import React from 'react'
// import { useTranslation } from 'react-i18next'

import style from './rightGrid.module.css'

type RightGridProps = {
  children: React.ReactNode
}

export const RightGrid: React.FC<RightGridProps> = ({ children }) => {
  return <div className={style.container}>{children}</div>
}
