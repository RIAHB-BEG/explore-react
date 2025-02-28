import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


// import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './HomeLayout/HomeLayout';
import Home from './components/Home/Home';
import HomeDetails from './components/Home/HomeDetails';

import Contact from './Contact/Contact';
import LOginPage from './LoginPage/LOginPage';
import Register from './register/Register';



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
        {
          path:'/login',
      
         
          element:<LOginPage></LOginPage>,
        },
        {
          path:'/register',
      
         
          element: <Register></Register>,
        },
    //     {
    //       path:'/pages-to-read',
         
    //       element:<PagesToRead></PagesToRead>,
    //         },
  
         
            // {
            //   path:'/read books',
            //   loader:()=>fetch("bookInfo.json"),
            //   element:<ReadBooks></ReadBooks>,
             
            //     },
           
                // {
                //   path:'/wishlist books',
                
                //   element:<WishlistBooks></WishlistBooks>,
                //     },
                    // {
                    //   path:'/wishlist books/:bookId',
                    //   loader:()=>fetch("bookInfo.json"),
              
                           
                    //   element:<Help2></Help2>,
                    // },
  ]
  
  }])


createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}></RouterProvider>
  </StrictMode>,
  // <Home></Home>
)
