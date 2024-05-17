import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import LandingRoot from '@/routes/landing/root'
import HomePage from '@/routes/landing/home/page'

const router = createBrowserRouter([
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
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
