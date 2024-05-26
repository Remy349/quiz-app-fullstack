import { createBrowserRouter } from 'react-router-dom'

import LandingRoot from './landing/root'
import HomePage from './landing/home/page'
import SignInPage from './auth/signin/page'
import SignUpPage from './auth/signup/page'

import DashboardRoot from './dashboard/root'
import DashboardUserHomePage from './dashboard/user/page'

export const router = createBrowserRouter([
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
        element: <DashboardUserHomePage />,
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
