import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import LandingRoot from './routes/landing/root'
import HomePage from './routes/landing/home/page'
import SignInPage from './routes/auth/signin/page'
import SignUpPage from './routes/auth/signup/page'

import DashboardRoot from './routes/dashboard/root'

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
        path: 'auth',
        children: [
          {
            path: 'signin',
            element: <SignInPage />,
          },
          {
            path: 'signup',
            element: <SignUpPage />,
          },
        ],
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardRoot />,
    children: [
      {
        index: true,
        element: <h1>HOME STUDENT DASHBOARD</h1>,
      },
      {
        path: 'admin',
        children: [
          {
            index: true,
            element: <h1>HOME ADMIN DASHBOARD</h1>,
          },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
