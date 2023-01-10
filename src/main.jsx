import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
import Layout from './components/Layout';
import Index, { Loader as customerLoader } from './pages/Index';
import NewCustomer, { action as newCustomerAction } from './pages/NewCustomer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: customerLoader
      },
      {
        path: '/about-us',
        element: <h1>About-us</h1>
      },
      {
        path: '/new-customer',
        element: <NewCustomer />,
        action: newCustomerAction
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
