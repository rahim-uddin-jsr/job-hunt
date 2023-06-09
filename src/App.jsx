import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blog from "./components/Blog/Blog";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import JobDetails from "./components/JobDetails/JobDetails";
import Statistics from "./components/Statistics/Statistics";
import Main from "./Layout/Main/Main";

function App() {
  const [allData, setAllData] = useState({});
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/statistics",
          element: <Statistics />,
        },
        {
          path: "/applied-jobs",
          element: <AppliedJobs />,
          loader: () => fetch("featuredJobs.json"),
        },
        { path: "/blog", element: <Blog /> },
        {
          path: "/job-details/:id",
          element: <JobDetails />,
          loader: ({ params }) => params.id,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
