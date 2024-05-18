import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import LandingRoot from './routes/landing/root'
import HomePage from './routes/landing/home/page'
import SignInPage from './routes/auth/signin/page'
import SignUpPage from './routes/auth/signup/page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingRoot />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/auth/signin',
        element: <SignInPage />,
      },
      {
        path: '/auth/signup',
        element: <SignUpPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
