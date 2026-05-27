import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n.ts'
import { App } from './app/app'
// import { Provider } from 'react-redux'
// import store from './app/store/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </StrictMode>,
)
