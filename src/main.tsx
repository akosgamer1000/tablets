import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import TabletekList from './comanents/tabletlista';
import Kezdolap from './comanents/Kezdolap';
import Torles from './comanents/torles';
import Tabletekmegjelen from './comanents/Tabletmegjelen';
import Tabletekfelvetel from './comanents/tabletfel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabletsearch from './comanents/tabletsearch';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Kezdolap />,
  },
  {
    path:"/tabletek-lista",
    element:  <TabletekList />,

  },
  {
    path:"/tabletek-felvetel",
    element: <Tabletekfelvetel />,

  },
  {
    path:"/tabletek-torles",
    element: <Torles />,

  },
  {
    path:"/tabletek-megjelen/:tabletid",
    element: <Tabletekmegjelen></Tabletekmegjelen>

  },
  {
    path:"/tabsearh",
    element: <Tabletsearch></Tabletsearch>

  },
  
]);


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)