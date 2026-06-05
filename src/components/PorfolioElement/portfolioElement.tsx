import React from 'react'
import style from './portfolioElement.module.css'

type PortfolioElementProps = {
  icon: React.ReactNode
  children: React.ReactNode
}

export const PortfolioElement: React.FC<PortfolioElementProps> = ({ icon, children }) => {
  return (
    <div className={style.container}>
      <div className={style.icon}>{icon}</div>
      <div className={style.content}>{children}</div>
    </div>
  )
}
