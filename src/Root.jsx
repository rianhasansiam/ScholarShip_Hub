import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import AllScholarship from "./Pages/AllScholarship";
import AboutUs from "./Pages/AboutUs";
import LogIn from "./Security/LogIn";
import SignUp from "./Security/SignUp";
import ScholarshipDetails from "./Pages/ScholarshipDetails";
import UserDashboard from "./Pages/UserDashboard/UserDashboard";
import Error404 from "./Pages/Error404";
import Private from "./Pages/Private";
import MyProfile from "./Pages/UserDashboard/MyProfile";
import MyApplication from "./Pages/UserDashboard/MyApplication";
import MyReviews from "./Pages/UserDashboard/MyReviews";
import PaymentLayout from "./Pages/PaymentLayout";
import ApplicationForm from "./Components/ApplicationForm";

import EditScholarshipApplication from "./Components/EditScholarshipApplication ";
import ModeratorDashboard from "./Pages/ModeratorDashboard/ModeratorDashboard";
import ManageScholarships from "./Pages/ModeratorDashboard/ManageScholarships";
import AllReviews from "./Pages/ModeratorDashboard/AllReviews";
import AllAppliedScholarship from "./Pages/ModeratorDashboard/AllAppliedScholarship";
import AddScholarship from "./Pages/ModeratorDashboard/AddScholarship";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import ManageUsers from "./Pages/AdminDashboard/ManageUsers";
import AnalyticsCharts from "./Pages/AdminDashboard/AnalyticsCharts ";









const Root = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <Error404></Error404>,
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
          path:'payment/:_id',
          element:<PaymentLayout></PaymentLayout>,
        
       },
       {
        path:'application-form/:_id',
        element:<ApplicationForm></ApplicationForm>
      
     },
        {
          path:'userdashboard',
          element: <Private><UserDashboard></UserDashboard></Private>,
          children:[
            {
              path:'myprofile',
              element:<MyProfile></MyProfile>
            },
            {
              path:'myapplication',
              element:<MyApplication></MyApplication>
            },
            {
              path:'myreviews',
              element:<MyReviews></MyReviews>
            },
            {
              path:'editApplication/:id',
              element:<EditScholarshipApplication></EditScholarshipApplication>
            },
          ]
      },
      {
        path:'admindashboard',
        element: <Private><AdminDashboard></AdminDashboard></Private>,
        children:[
          {
            path:'myprofile',
            element:<MyProfile></MyProfile>
          },
          {
            path:'addscholarship',
            element:<AddScholarship></AddScholarship>
          },
          {
            path:'allappliedscholarship',
            element:<AllAppliedScholarship></AllAppliedScholarship>
          },
          {
            path:'managescholarships',
            element:<ManageScholarships></ManageScholarships>
          },
          {
            path:'allreviews',
            element:<AllReviews></AllReviews>
          },
          {
            path:'manageusers',
            element:<ManageUsers></ManageUsers>
          },
          {
            path:'analisisChart',
            element: <AnalyticsCharts></AnalyticsCharts>
          }
        ]
      },
      {
        path:'moderatordashboard',
        element: <Private><ModeratorDashboard></ModeratorDashboard></Private>,
        children:[
          {
            path:'myprofile',
            element:<MyProfile></MyProfile>
          },
          {
            path:'managescholarships',
            element:<ManageScholarships></ManageScholarships>
          },
          {
            path:'allreviews',
            element:<AllReviews></AllReviews>
          },
          {
            path:'allappliedscholarship',
            element:<AllAppliedScholarship></AllAppliedScholarship>
          },
          {
            path:'addscholarship',
            element:<AddScholarship></AddScholarship>
          },
        ]
      }
       
      ]
    },
  ]);

  export default Root