import { createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import AddFood from "../pages/AddFood/AddFood";
import PrivateRoute from "../Provider/PrivateRoute";
import AllFoods from "../pages/AllFoods/AllFoods";
import FoodDetails from "../pages/AllFoods/FoodDetails";
import FoodPurchase from "../pages/FoodPurchase/FoodPurchase";
import MyFood from "../pages/MyFood/MyFood";
import UpdateFood from "../pages/MyFood/UpdateFood";
import MyPost from "../pages/MyFoodPost/MyPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,

    children: [
      {
        //path: '',
        index: true,

        // loader: () => fetch("http://localhost:3000/jobs"),
        // hydrateFallbackElement: (
        //   <span className="loading loading-bars loading-xl"></span>
        // ),
        element: <Home></Home>,
      },

      {
        path: "addFood",
        element: <AddFood></AddFood>,
      },

      {
        path: "allFood",

        loader: () => fetch("http://localhost:3000/foods"),
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-xl"></span>
        ),
        element: (
          
            <AllFoods></AllFoods>
          
        ),
      },

      {
        path: "/foodDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/foodDetails/${params.id}`),
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-xl"></span>
        ),
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
      },

      {
        path: "/foodPurchase/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/foodPurchase/${params.id}`),
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-xl"></span>
        ),
        element: (
          <PrivateRoute>
            <FoodPurchase></FoodPurchase>
          </PrivateRoute>
        ),
      },

      {
        path: "/my-food",
        //path: 'my-orders/:email',
        //   loader: ({ params }) => fetch(`https://library-server-self-theta.vercel.app/my-orders/${params.email}`),
        // hydrateFallbackElement: (
        //   <span className="loading loading-bars loading-xl"></span>
        // ),
        element: (
          <PrivateRoute>
            <MyFood></MyFood>
          </PrivateRoute>
        ),
      },

      {
        path: "/updateFood/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/updateFood/${params.id}`),
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-xl"></span>
        ),
        element: <UpdateFood></UpdateFood>,
      },


      {
    path: "/myFood-post",
    element: (
      <PrivateRoute>
        <MyPost></MyPost>
      </PrivateRoute>
    ),
  },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },

      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  //   {
  //     path: "/jobs/:id",
  //     loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`),
  //     hydrateFallbackElement: (
  //       <span className="loading loading-bars loading-xl"></span>
  //     ),
  //     Component: JobDetails,
  //   },
  //   {
  //     path: "/jobApply/:id",
  //     element: (
  //       <PrivateRoute>
  //         <JobApply></JobApply>
  //       </PrivateRoute>
  //     ),
  //   },
  //   {
  //     path: "/myApplications",
  //     // loader: () => fetch(`http://localhost:3000/applications?email=${email}`),
  //     //  hydrateFallbackElement: (
  //     //       <span className="loading loading-bars loading-xl"></span>
  //     //     ),
  //     element: (
  //       <PrivateRoute>
  //         <MyApplications></MyApplications>
  //       </PrivateRoute>
  //     ),
  //   },

  //   {
  //     path: "/updateApplication/:id",
  //     loader: ({ params }) =>
  //       fetch(`http://localhost:3000/updateApplication/${params.id}`),
  //     hydrateFallbackElement: (
  //       <span className="loading loading-bars loading-xl"></span>
  //     ),
  //     element: <UpdateApplication></UpdateApplication>,
  //   },

  //   {
  //     path: "addJob",
  //     element: (
  //       <PrivateRoute>
  //         <AddJob></AddJob>
  //       </PrivateRoute>
  //     ),
  //   },

  //   {
  //     path: "/myPostedJobs",
  //     element: (
  //       <PrivateRoute>
  //         <MyPostedJobs></MyPostedJobs>
  //       </PrivateRoute>
  //     ),
  //   },

  //   {
  //     path: "/applications/:job_id",
  //     loader: ({params}) =>
  //       fetch(`http://localhost:3000/applications/job/${params.job_id}`),
  //     hydrateFallbackElement: (
  //       <span className="loading loading-bars loading-xl"></span>
  //     ),
  //     element: (
  //       <PrivateRoute>
  //         <ViewApplications></ViewApplications>
  //       </PrivateRoute>
  //     ),
  //   },

  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;

// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
