import { createBrowserRouter } from "react-router";

import Home from "../components/Home/Home";
import Mainlayout from "../layouts/Mainlayout";
import AllBlogs from "../components/Blogs/AllBlogs/AllBlogs";
import FeaturedBlogs from "../components/Blogs/FeaturedBlogs/FeaturedBlogs";
import Wishlist from "../components/Blogs/Wishlist/Wishlist";
import AddBlog from "../components/Blogs/AddBlog/AddBlog";
import Login from "../components/login/Login";
import Signup from "../components/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import BlogDetail from "../components/Blogs/BlogDetail/BlogDetail";
import Updateblog from "../components/Blogs/Updateblog/Updateblog";
import Myblogs from "../components/Blogs/Myblogs/Myblogs";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ComingSoon from "../components/Footer/ComingSoon";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-blogs",
        element: <AllBlogs />,
      },
      {
        path: "/featured-blogs",
        element: <FeaturedBlogs />,
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            {" "}
            <Wishlist />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-blog",
        element: (
          <PrivateRoute>
            <AddBlog />{" "}
          </PrivateRoute>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/blog/:id", element: <BlogDetail /> },

      {
        path: "/my-blogs",
        element: (
          <PrivateRoute>
            <Myblogs />
          </PrivateRoute>
        ),
      },
      {path: '/forums', element: <ComingSoon/>},
      {path: '/events', element: <ComingSoon/>},
      {path: '/contributors', element: <ComingSoon/>},
      {path: '/changelog', element: <ComingSoon/>},
      {path: '/feedback', element: <ComingSoon/>},
      {path: '/supportcenter', element: <ComingSoon/>},
      {path: '/newsletter', element: <ComingSoon/>},
    ],
  },
]);
