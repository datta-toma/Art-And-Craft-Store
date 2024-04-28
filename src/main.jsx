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
import AddSection from './component/AddSection/AddSection.jsx';
import CraftCardDetails from './Pages/AllArtCraft/CraftCardDetails.jsx';
import MyCardList from './Pages/MyCardList/MyCardList.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<HomePage></HomePage>,
        loader:() => fetch('http://localhost:5000/craft')
      },
      {
        path:'add-craft',
        element:<AddCraft></AddCraft>
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
        loader:() => fetch('http://localhost:5000/craft')
      },
      {
        path:'/craft/:id',
         loader:({params})=>fetch(`http://localhost:5000/craft/${params.id}`),
        element:<CraftCardDetails></CraftCardDetails>,
       
      },
      {
        path:'/list',
        element:<MyCardList></MyCardList>,
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
