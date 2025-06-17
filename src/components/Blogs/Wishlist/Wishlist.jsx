import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../contexts/ContextProvider";
import axios from "axios";
import SingleNewsCard from "../../NewsCard/SingleNewsCard";
import WishlistBlog from "./WishlistBlog";
import { Link } from "react-router";
import Loading from "../../Loading/Loading";

const Wishlist = () => {
  const { user } = useContext(MyContext);
  const [blogs, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`https://game-blast-server.vercel.app/wishlist/${user?.email}`)
      .then((res) => {
        setBlog(res.data);
        setLoading(false);
        //console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [user?.email]);

  if (loading) {
    return <Loading />;
  }

  if (blogs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h2 className="text-2xl font-semibold mb-4">
          No wishlisted blogs found
        </h2>
        <Link
          to="/"
          className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-5 py-2 rounded-lg transition-all"
        >
          Go to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 px-3">
      {blogs.map((blog, index) => (
        <WishlistBlog key={index} blog={blog} />
      ))}
    </div>
  );
};

export default Wishlist;
