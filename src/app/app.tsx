import '../styles/fonts.css'; 
import '../styles/variables.css';
import '../styles/light.css';
import '../styles/dark.css';

import { RouterProvider } from 'react-router-dom'
import { appRouter } from './appRouter'

import { useTheme } from '../hooks/useTheme';

const App: React.FC = () => {
  useTheme();
  return <RouterProvider router={appRouter} />
}

export default App