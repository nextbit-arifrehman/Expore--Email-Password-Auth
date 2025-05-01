import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Layout/Root.jsx'
import Home from './Component/Home/Home.jsx'
import Login from './Component/Login/Login.jsx'
import Register from './Component/Register/Register.jsx'
import SignUp from './Component/SignUp/SignUP.jsx'




const router =createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children:[
      {index:true,Component: Home},
      {path:'/login', Component: Login},
      {path: '/register', Component: Register},
      {path:'/signup', Component: SignUp}
       

    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
