import  React, {useContext, useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
// import Footer from '../Components/Footer'
// import DashboardSidebar from '../Components/dashboard/DashboardSidebar'
// import {DashboardTopbar} from '../Components/dashboard/DashboardTopbar'
// import ProtectedRoute from '../lib/ProtectedRoute.jsx'
// import { AuthContext } from '../context/AuthContext.jsx';
const Layout = () =>{
  
    return(          
        <div className='min-h-screen bg-gray-50'>
            {/* <ScrollToTop/> */}
        <Navbar/>
       <div className='content'>
        <Outlet/>
       </div>
       <div className='top-5'>
        {/* <Footer/> */}
       </div>
     </div>
       
    )
}

// const RequireAuth = () => {
//   const {currentUser}=useContext(AuthContext)

//   // return(
//   //   <div className="min-h-screen bg-[#F0ECE6] flex">
//   //     <div className="flex-1 flex flex-col min-w-0 lg:pl-[280px]">
//   //       <main className="p-4 lg:p-8 w-full">
//   //         <Outlet />
//   //       </main>  
//   //     </div>
//   //   </div>
//   // )
//   return !currentUser ? (
//     <Navigate to='/login'/>
//             ):(
//     <div className="min-h-screen bg-[#F0ECE6] flex">
//       <div className="flex-1 flex flex-col min-w-0 lg:pl-[280px]">
//         <main className="p-4 lg:p-8 w-full">
//           <Outlet />
//         </main>  
//       </div>
//     </div>
//   );
// };

export default Layout