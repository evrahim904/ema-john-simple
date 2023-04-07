import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/layout/Home';
import Shop from './components/Shop/Shop';
import Orders from './components/orders/Orders';
import Inventory from './components/inventory/Inventory';
import Login from './components/login/Login';
import cartProductsLoader from './components/loader/CartProductsLoader';
import Checkout from './components/checkout/checkout';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path: '/',
        element:<Shop></Shop>
      },
      {
       path: 'orders',
       element:<Orders></Orders>,
       loader: cartProductsLoader
      },
      {
        path:'login',
        element:<Checkout></Checkout>
      },
      {
       path:'inventory',
       element:<Inventory></Inventory>
      },
      {
       path:'login',
       element:<Login></Login>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
