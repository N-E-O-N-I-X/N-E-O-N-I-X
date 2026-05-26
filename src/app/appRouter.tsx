import { createBrowserRouter } from 'react-router-dom'

// import { MainLayout } from '../layouts/MainLayout'
// import { HomePage } from '../pages/Home'
// import { PortfolioPage } from '../pages/Portfolio'
// import { ResumePage } from '../pages/Resume'
// import { ContactsPage } from '../pages/Contacts'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
      {
        path: 'contacts',
        element: <ContactsPage />,
      }
    ],
  },
])
