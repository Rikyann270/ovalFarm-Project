import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chickspage from './products/chicken/chicks/Chickspage.jsx'
import Equipmentspage from './products/chicken/equipments/Equipmentspage.jsx'
import Feeds from './products/chicken/feeds/Feeds.jsx'
import Datepage from './date/Datepage.jsx'
import OtherprodPayout from './products/tool products/OtherprodPayout.jsx'
import RegisterAccount from './account/RegisterAccount.jsx'
import LoginAccount from './account/LoginAccount.jsx'
import Deli from './products/del/Deli.jsx'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
    {
    path: "/poultry",
    element: <Chickspage/>,
  },{
    path:"/poultry/equipments",
    element:<Equipmentspage/>
  },
  {
    path:"/poultry/Feeds",
    element:<Feeds/>
  },
  {
    path: "/date_confermation/:data",
    element: <Datepage/>
  },
  {path: "/poultry/equipments/buy/:data",
    element: <OtherprodPayout/>
  },
  {path: "/account/register",
    element: <RegisterAccount/>
  },
  {path: "/account/Login",
    element: <LoginAccount/>
  },
  {path: "/deli",
    element: <Deli/>
  },

]);

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <RouterProvider router = {router} />

)
