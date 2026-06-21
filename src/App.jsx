import React from "react";
import {
  createBrowserRouter, 
  RouterProvider,
} from "react-router-dom";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import AuthPage from "./Pages/AuthPage";
import ContactPage from "./Pages/ContactUsPage";
import DashboardLayout from "./Pages/DashBoard";
const App = () =>{
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        {
          path: '/',
          element: <HomePage/>
        },
        {
          path: '/auth',
          element: <AuthPage/>
        },
        {
          path: '/contact', 
          element: <ContactPage/>
        },
        {
          path: '/dashboard',
          element: <DashboardLayout/>
        }
      ],
    },
    // {
    //   path: "/",
    //   element: <RequireAuth/>,
    //   // loader: authGuardLoader,
    //   children: [
    //     {
    //       path: "/dashboard",
    //       element: <Dashboard/>,
    //       // loader: dashboardLoader
    //     },
    //     {
    //       path: "/tree",
    //       element: <TreePage/>,
    //     }
    //   ]
    // }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
