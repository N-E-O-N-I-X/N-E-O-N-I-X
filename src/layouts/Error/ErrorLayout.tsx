import React from 'react'
import { Header } from '../../widgets/Header'
import { ErrorPage } from '../../pages/Error'

import style from './errorLayout.module.css'

export const ErrorLayout: React.FC = () => {
  return (
    <div className={style.page}>
      <Header />
      <main className={style.container}>
        <ErrorPage />
      </main>
    </div>
  )
}
