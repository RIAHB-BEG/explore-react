import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import HomeLayout from './HomeLayout/HomeLayout';
import Home from './components/Home/Home';
import HomeDetails from './components/Home/HomeDetails';

import Contact from './Contact/Contact';

import Register from './register/Register';

import About from './About/About';


import Login from './LoginPage/LOginPage';
import HomeDetails2 from './HomeDetails2.jsx/HomeDetails2';
import Blog from './Blog/Blog';
import AuthProvider from './AuthProvider/AuthProvider';








const router = createBrowserRouter([{
  path: "/",
  element: <HomeLayout></HomeLayout>,


  children: [
    {
      path: '/',
      element: <Home></Home>,

    },

    {
      path: '/home',
      element: <Home></Home>,

    },
    {
      path: '/contact',

      element: <Contact></Contact>,
    },
    {
      path: '/home/:id',
      loader: () => fetch("home.json"),

      element: <HomeDetails></HomeDetails>,
    },
    {
      path: '/Listed Homes',
      loader: () => fetch("home.json"),

      element: <HomeDetails2></HomeDetails2>,
    },
    {
      path: '/about',


      element: <About></About>,
    },
    {
      path: '/register',


      element: <Register></Register>,
    },
    {
      path: '/login',


      element: <Login></Login>,
    },
    {
      path: '/Blog',


      element: <Blog></Blog>,
    },

  ]

}])


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>

      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>






  </StrictMode>
  // <Home></Home>
)
