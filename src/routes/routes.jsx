import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";
import MyProfile from "../pages/MyProfile";
import Services from "../pages/Services";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import PrivateRoute from "../privateRoute/PrivateRoute";
import AddService from "../pages/AddService";
import ServiceDetails from "../pages/ServiceDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/services",
        element: (
          <PrivateRoute>
            <Services />,
          </PrivateRoute>
        ),
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/add-service",
        element: <AddService />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },
]);
