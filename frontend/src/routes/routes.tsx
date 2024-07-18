import { createBrowserRouter } from 'react-router-dom'
import LandingRoot from './landing/root'
import HomePage from './landing/home/page'
import DashboardRoot from './dashboard/root'
import DashboardHomePage from './dashboard/home/page'
import DashboardQuizPage from './dashboard/quizzes/quiz/page'
import DashboardQuizEditPage from './dashboard/quizzes/quiz/edit/page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingRoot />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardRoot />,
    children: [
      {
        index: true,
        element: <DashboardHomePage />,
      },
      {
        path: 'quizzes',
        children: [
          {
            path: ':quizId',
            element: <DashboardQuizPage />,
          },
          {
            path: ':quizId/edit',
            element: <DashboardQuizEditPage />,
          },
        ],
      },
    ],
  },
])
