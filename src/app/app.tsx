import '../styles/fonts.css'; 
import '../styles/variables.css';
import '../styles/light.css';
import '../styles/dark.css';
// import '../styles/scrollbar.css';
// import '../styles/animations.css';
import style from './app.module.css';

import { useTheme } from '../hooks/useTheme';

export const App = () => {
  useTheme();

  return (
    <body className={style.page}>
      <h1 className={style.heading}>My future CV</h1>
      <div className={style.fontsGrid}>
        <ul className={style.fontsList}>
          <li className= {style.hasklig}>
            Хасклиг (ru)
          </li>
          <li className= {style.firacode}>
            Фира (ru)
          </li>
        </ul>
        <ul className={style.fontsList}>
          <li className= {style.hasklig}>
            Hasklig (en)
          </li>
          <li className= {style.firacode}>
            FiraCode (en)
          </li>
        </ul>
      </div>
    </body>
  );
};