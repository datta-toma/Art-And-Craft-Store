import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import HomePage from './Pages/HomePage.jsx';
import AddCraft from './Pages/AddCraft/AddCraft.jsx';
import SingUp from './layout/SingUp.jsx';
import Login from './layout/Login.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import AllArtCraft from './Pages/AllArtCraft/AllArtCraft.jsx';
import CraftCardDetails from './Pages/AllArtCraft/CraftCardDetails.jsx';
import MyCardList from './Pages/MyCardList/MyCardList.jsx';
import PrivateRouter from './component/PrivateRouter/PrivateRouter.jsx';
import Update from './Pages/Update/Update.jsx';

import ArtCraftSection from './component/ArtCraftSection/ArtCraftSection.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<HomePage></HomePage>,
        loader:() => fetch('https://art-and-craft-store-server-eight.vercel.app/craft')
      },
      {
        path:'add-craft',
        element:<PrivateRouter><AddCraft></AddCraft></PrivateRouter>
      },
      {
        path:'/sign-up',
        element:<SingUp></SingUp>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/craft',
        element:<AllArtCraft></AllArtCraft>,
        loader:() => fetch('https://art-and-craft-store-server-eight.vercel.app/craft')
      },
      {
        path:'/craft/:id',
         loader:({params})=>fetch(`https://art-and-craft-store-server-eight.vercel.app/craft/${params.id}`),
        element:<PrivateRouter><CraftCardDetails></CraftCardDetails></PrivateRouter>,
       
      },
      {
        path:'/list',
        element:<PrivateRouter><MyCardList></MyCardList></PrivateRouter>,
      },
      {
        path:'/update/:id',
        loader:({params})=>fetch(`https://art-and-craft-store-server-eight.vercel.app/craft/${params.id}`),
        element:<PrivateRouter><Update></Update></PrivateRouter>
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
