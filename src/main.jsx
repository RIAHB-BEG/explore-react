import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import HomeLayout from './HomeLayout/HomeLayout';
import Home from './components/Home/Home';
import HomeDetails from './components/Home/HomeDetails';

import Contact from './Contact/Contact';

import Register from './register/Register';
import AuthProvider from './authProvider/AuthProvider';





const router = createBrowserRouter([{
  path:"/",
  element:<HomeLayout></HomeLayout>,
  

  children :[
    {
  path:'/home',
  element:<Home></Home>,
  
    },

    {
      path:'/contact',
     
      element:<Contact></Contact>
        },
        {
          path:'/home/:id',
          loader:()=>fetch("home.json"),
      
          element:<HomeDetails></HomeDetails>
        },
        // {
        //   path:'/login',
      
         
        //   element:<LOginPage></LOginPage>,
        // },
        {
          path:'/login',
      
         
          element: <Register></Register>,
        },
    
  ]
  
  }])


createRoot(document.getElementById('root')).render(
  <StrictMode>

<AuthProvider>

  <RouterProvider router={router}></RouterProvider>
</AuthProvider>


    


   
  </StrictMode>,
  // <Home></Home>
)
