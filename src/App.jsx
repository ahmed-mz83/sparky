import React from 'react'
import Navbar from './componts/Navbar/Navbar'
import Footer from './componts/Footer/Footer'
import Home from './componts/Home/Home'
import { Outlet, RouterProvider,createBrowserRouter, createHashRouter } from 'react-router-dom'
import About from './componts/About/About'
import Layout from './componts/Layout/Layout'
import Port from './componts/Port/Port'
import VantaBackground from './componts/About/About'
import Contact from './componts/Contact'

export default function App() {

  let kenshero =createHashRouter([
    {path:'/' , element:<Layout/>, children:[
       {index:true,element:<Home/>},
      {path:'/home',element:<Home/>},
    {path:'/about' , element:<About/>},
    {path:'/portfilio' , element:<Port/>},
    {path:'/contact',element:<Contact/>},
    ]},
    
  ])
  return (
    <>
   
   <RouterProvider router={kenshero}/>
   
   
      
    </>
  )
}

