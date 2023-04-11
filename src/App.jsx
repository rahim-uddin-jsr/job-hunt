import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Main from "./Layout/Main/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/applied-jobs", element: <AppliedJobs /> },
        { path: "/blog", element: <Blog /> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
