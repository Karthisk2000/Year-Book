import React, {useState} from 'react';

import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginAccessCode from './Login/LoginAccessCode';
import LoginEmailNumber from './Login/LoginEmailNumber';
import Index from './pages/Index';
import Layout from './pages/Layout';
import Home from './components/Home';
import Projects from './components/Projects';
import Templates from './components/Templates';


export default function ApplicationRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginAccessCode />} />
        <Route path="/email_number_verification" element={<LoginEmailNumber />} />
        <Route path="/index" element={<Index />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/templates" element={<Templates />} />
      </Routes>
    </BrowserRouter>
  );
}
                                                                                                                                                                  


// const router = createBrowserRouter([{
//   path: '/',
//   element: <Layout />,

//   children: [{
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/templates',
//     element: <Templates />
//   },
//   {
//     path: '/projects',
//     element: <Projects />
//   }]
// }])

// export default function App() {
//   return <RouterProvider router={router} />
// }

