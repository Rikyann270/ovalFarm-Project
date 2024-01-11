import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chickspage from './products/Chickspage.jsx'
import Datepage from './date/Datepage.jsx'
// import './index.css'
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
    path: "chicks",
    element: <Chickspage/>,
  },
  {
    path: "date_confermation",
    element: <Datepage/>,
  },
]);

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
