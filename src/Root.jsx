import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import AllScholarship from "./Pages/AllScholarship";
import AboutUs from "./Pages/AboutUs";
import LogIn from "./Security/LogIn";
import SignUp from "./Security/SignUp";
import ScholarshipDetails from "./Pages/ScholarshipDetails";
import UserDashboard from "./Pages/UserDashboard";
import AdminDashboard from "./Pages/AdminDashboard";








const Root = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'allscholarship',
          element:<AllScholarship></AllScholarship>
        },
        {
          path:'aboutUs',
          element:<AboutUs></AboutUs>
        },
        {
          path:'logIn',
          element:<LogIn></LogIn>
        },
        {
          path:'signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'scholarshipDetails/:_id',
          element:<ScholarshipDetails></ScholarshipDetails>
        },
        {
          path:'userdashboard',
          element: <UserDashboard></UserDashboard>
        },
        {
          path:'admindashboard',
          element: <AdminDashboard></AdminDashboard>
        }
      ]
    },
  ]);

  export default Root