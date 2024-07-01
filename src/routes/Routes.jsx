
import Main from '../Layout/Main'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomsDetails from '../pages/RoomsDetails/RoomsDetails'
import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../Layout/DashboardLayout'
import AddRoom from '../pages/Dashboard/AddRoom'
// import DashboardLayout from '../Layout/DashboardLayout'
// import AddRoom from '../pages/DashboardPage/AddRoom'



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[
    {
      path: '/',
      element:<Home></Home> ,
    },
    {
      path: '/room/:id',
      element:<RoomsDetails></RoomsDetails> ,
    }

    ]
  },
  {
    path: '/login',
    element:<Login></Login> ,
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children:[
      {
        path: '/dashboard/add-room',
        element:<AddRoom></AddRoom>
      },
     
  
      ]

  }
])
