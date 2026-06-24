import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Banner from './components/Homepage/Banner';
import MainLayout from './Layout/MainLayout';
import Homepage from './components/Homepage/Friends';
import Homepages from './pages/ErrorElement/Homepages/Homepages';
import TimelineProvider, { TimelineContext } from './context/TimelineContext';
// import Timeline from './pages/Timeline/Timeline';
import Status from './pages/Status/Status';
import Frienddetails from './pages/FriendsDetails/Frienddetails';
import ErrorElement from './pages/ErrorElement/Error';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PieChartPage from './pages/Analytics/PieChartPage';
import Timeline from './pages/Timeline/Timeline';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
   
   
      {
        index:true,
        element: <Homepages />
      },
       {
        path: "/Timeline",
        element: <Timeline />
      },
      {
        path: "/Status",
        element: <Status />
      },

      
      {
        path: "/FriendsDetails/:id",
        element: <Frienddetails />,
        loader: () => fetch("/data/friends.json"),

      },

      {
  path: "/analytics",
  element: <PieChartPage />
},

  
    ],
    errorElement: <ErrorElement></ErrorElement>

  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
  <TimelineProvider>


      <RouterProvider router={router} />
       
      
      <ToastContainer/>
      </TimelineProvider>
    
   
    
  </StrictMode>,
);
