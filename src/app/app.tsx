// import '../styles/fonts.css'; 
// import '../styles/variables.css';
// import '../styles/light.css';
// import '../styles/dark.css';
// import '../styles/scrollbar.css';
// import '../styles/animations.css';
import style from './app.module.css';

// import { useTheme } from '../hooks/useTheme';

export const App = () => {

  return (
    <body className={style.body}>
      <h1 className={style.heading}>My future CV</h1>
    </body>
  );
};