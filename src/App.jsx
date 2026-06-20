import React from "react";
import {
  createBrowserRouter, 
  RouterProvider,
} from "react-router-dom";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import AuthPage from "./Pages/AuthPage";
// import Fonctionalities from "./Pages/Fonctionalities";
// import AuthPage from "./Pages/AuthPage";
// import Dashboard from "./Pages/DashboardPage";
// import TreePage from "./Pages/TreePage";
// import LoginPage from "./Pages/LoginPage";
// import RegisterPage from "./Pages/RegisterPage";
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
