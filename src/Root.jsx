import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import AllScholarship from "./Pages/AllScholarship";
import AboutUs from "./Pages/AboutUs";
import LogIn from "./Security/LogIn";
import SignUp from "./Security/SignUp";








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
        }
      ]
    },
  ]);

  export default Root