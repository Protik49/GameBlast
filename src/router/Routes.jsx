import { createBrowserRouter } from "react-router";

import Home from "../components/Home/Home";
import Mainlayout from "../layouts/Mainlayout";
import AllBlogs from "../components/Blogs/AllBlogs/AllBlogs";
import FeaturedBlogs from "../components/Blogs/FeaturedBlogs/FeaturedBlogs";
import Wishlist from "../components/Blogs/Wishlist/Wishlist";
import AddBlog from "../components/Blogs/AddBlog/AddBlog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
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
        element: <Wishlist />,
      },
      { path: "/add-blog", element: <AddBlog /> },
    ],
  },
]);
