import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import AddProduct from './components/Brands/Forms/AddProduct.jsx';
import Mycart from './components/Mycart.jsx';
import Register from './components/Brands/Forms/Register.jsx';
import Login from './components/Brands/Forms/Login.jsx';
import AuthProvider from './components/AuthProvider.jsx';
import Error from './components/Error.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Update from './components/Update.jsx';
import BrandsProduct from './components/BrandsProduct.jsx';
import ProductDetail from './components/ProductDetail.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/myCart',
        element: <PrivateRoute><Mycart></Mycart></PrivateRoute>,
        loader:()=> fetch('http://localhost:5000/userCart'),
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      
      {
        
        path:'/brand/:id',
        element:<BrandsProduct></BrandsProduct>,
        loader:()=> fetch('http://localhost:5000/products'),
       
      },
      {
        path:'/details/:_id',
        element:<PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:5000/products/${params._id}`),
      },
      {
        path:'/update/:_id',
        element:<PrivateRoute><Update></Update></PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:5000/products/${params._id}`),
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
