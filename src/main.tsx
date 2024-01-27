import React from 'react'
import ReactDOM from 'react-dom/client'
import GiftsList from './routes/GiftsList.tsx'
import Guests from './routes/Guests.tsx'
import About from './routes/About.tsx'
import ErrorPage from './routes/ErrorPage.tsx'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <GiftsList/>
      },
      {
        path: 'gifts',
        element: <GiftsList/>
      },
      {
        path: 'guests',
        element: <Guests/>
      },
      {
        path: 'about',
        element: <About/>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
