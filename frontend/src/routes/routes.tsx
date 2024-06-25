import { createBrowserRouter } from 'react-router-dom'

import LandingRoot from './landing/root'

import HomePage from './landing/home/page'
import SignInPage from './auth/signin/page'
import SignUpPage from './auth/signup/page'

import DashboardRoot from './dashboard/root'

import DashboardUserHomePage from './dashboard/user/page'
import DashboardUserQuizzesPage from './dashboard/user/quizzes/page'
import DashboardUserQuizzesNewPage from './dashboard/user/quizzes/new/page'

import DashboardAdminHomePage from './dashboard/admin/page'
import DashboardAdminCategoriesPage from './dashboard/admin/categories/page'

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
        path: 'quizzes',
        children: [
          {
            index: true,
            element: <DashboardUserQuizzesPage />,
          },
          {
            path: 'new',
            element: <DashboardUserQuizzesNewPage />,
          },
        ],
      },
      {
        path: 'admin',
        children: [
          {
            index: true,
            element: <DashboardAdminHomePage />,
          },
          {
            path: 'categories',
            element: <DashboardAdminCategoriesPage />,
          },
        ],
      },
    ],
  },
])
