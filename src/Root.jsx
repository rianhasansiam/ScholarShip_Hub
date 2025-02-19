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
import PrivateAdmin from "./Pages/PrivateAdmin";
import PrivateModaretor from "./Pages/PrivateModaretor";
import Guides from "./Pages/Guides";









const Root = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404></Error404>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: 'allscholarship',
        element: <AllScholarship></AllScholarship>
      },
      {
        path: 'aboutUs',
        element: <AboutUs></AboutUs>
      },
      {
        path: 'guides',
        element: <Guides></Guides>
      },
      {
        path: 'logIn',
        element: <LogIn></LogIn>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path: 'scholarshipDetails/:_id',
        element: <Private><ScholarshipDetails></ScholarshipDetails></Private>
      },
      {
        path: 'payment/:_id',
        element: <Private><PaymentLayout></PaymentLayout></Private>,

      },
      {
        path: 'application-form/:_id',
        element: <Private><ApplicationForm></ApplicationForm></Private>

      },
      {
        path: 'userdashboard',
        element: <Private><UserDashboard></UserDashboard></Private>,
        children: [
          {
            path: 'myprofile',
            element: <Private><MyProfile></MyProfile></Private>
          },
          {
            path: 'myapplication',
            element: <Private><MyApplication></MyApplication></Private>
          },
          {
            path: 'myreviews',
            element: <Private><MyReviews></MyReviews></Private>
          },
          {
            path: 'editApplication/:id',
            element: <Private><EditScholarshipApplication></EditScholarshipApplication></Private>
          },
        ]
      },
      {
        path: 'admindashboard',
        element: <PrivateAdmin><AdminDashboard></AdminDashboard></PrivateAdmin>,
        children: [
          {
            path: 'myprofile',
            element: <PrivateAdmin><MyProfile></MyProfile></PrivateAdmin>
          },
          {
            path: 'addscholarship',
            element: <PrivateAdmin><AddScholarship></AddScholarship></PrivateAdmin>
          },
          {
            path: 'allappliedscholarship',
            element: <PrivateAdmin><AllAppliedScholarship></AllAppliedScholarship></PrivateAdmin>
          },
          {
            path: 'managescholarships',
            element: <PrivateAdmin><ManageScholarships></ManageScholarships></PrivateAdmin>
          },
          {
            path: 'allreviews',
            element: <PrivateAdmin><AllReviews></AllReviews></PrivateAdmin>
          },
          {
            path: 'manageusers',
            element: <PrivateAdmin><ManageUsers></ManageUsers></PrivateAdmin>
          },
          {
            path: 'analisisChart',
            element: <PrivateAdmin><AnalyticsCharts></AnalyticsCharts></PrivateAdmin>
          }
        ]
      },
      {
        path: 'moderatordashboard',
        element: <PrivateModaretor><ModeratorDashboard></ModeratorDashboard></PrivateModaretor>,
        children: [
          {
            path: 'myprofile',
            element: <PrivateModaretor><MyProfile></MyProfile></PrivateModaretor>
          },
          {
            path: 'managescholarships',
            element: <PrivateModaretor><ManageScholarships></ManageScholarships></PrivateModaretor>
          },
          {
            path: 'allreviews',
            element: <PrivateModaretor><AllReviews></AllReviews></PrivateModaretor>
          },
          {
            path: 'allappliedscholarship',
            element: <PrivateModaretor><AllAppliedScholarship></AllAppliedScholarship></PrivateModaretor>
          },
          {
            path: 'addscholarship',
            element: <PrivateModaretor><AddScholarship></AddScholarship></PrivateModaretor>
          },
        ]
      }

    ]
  },
]);

export default Root