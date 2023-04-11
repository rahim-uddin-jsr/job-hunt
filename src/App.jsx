import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import JobDetails from "./components/JobDetails/JobDetails";
import Main from "./Layout/Main/Main";

function App() {
  const [allData, setAllData] = useState({});
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        { path: "/applied-jobs", element: <AppliedJobs /> },
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
