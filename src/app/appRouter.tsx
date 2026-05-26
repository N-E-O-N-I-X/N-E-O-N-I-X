import { createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '../layouts/MainLayout'
import { HomePage } from '../pages/Home/home'
// import { PortfolioPage } from '../pages/Portfolio'
// import { ResumePage } from '../pages/Resume'
// import { ContactsPage } from '../pages/Contacts'
// import { NotFoundPage } from '../pages/Error/NotFoundPage'
// import { ServerErrorPage } from '../pages/Error/ServerErrorPage'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // {
      //   path: 'portfolio',
      //   element: <PortfolioPage />,
      // },
      // {
      //   path: 'resume',
      //   element: <ResumePage />,
      // },
      // {
      //   path: 'contacts',
      //   element: <ContactsPage />,
      // },
      // {
      //   path: '500',
      //   element: <ServerErrorPage />,
      // },
      // { path: '*', element: <NotFoundPage /> },
    ],
  },
])
