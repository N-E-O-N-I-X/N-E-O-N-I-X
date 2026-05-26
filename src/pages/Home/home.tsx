import React from 'react'
// import { Link } from "react-router-dom";

import style from './home.module.css'

export const HomePage: React.FC = () => {
  return (
    <div className={style.page}>
      <h1 className={style.heading}>Страница главная.</h1>
    </div>
  )
}
