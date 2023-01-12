import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
import Layout from './components/Layout';
import Index, { loader as clientLoader } from './pages/Index';
import NewClient, { action as newClientAction } from './pages/NewClient';
import ErrorPage from './components/ErrorPage';
import EditClient, { loader as editClientLoader } from './pages/EditClient';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: '/about-us',
        element: <h1>About-us</h1>
      },
      {
        path: '/new-client',
        element: <NewClient />,
        action: newClientAction
      },
      {
        path: '/clients/:clientId/edit',
        element: <EditClient />,
        loader: editClientLoader
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    />
  </React.StrictMode>,
)
