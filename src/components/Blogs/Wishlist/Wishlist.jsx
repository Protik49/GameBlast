import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../contexts/ContextProvider";
import axios from "axios";
import SingleNewsCard from "../../NewsCard/SingleNewsCard";
import WishlistBlog from "./WishlistBlog";

const Wishlist = () => {
  const { user } = useContext(MyContext);
  const [blogs, setBlog] = useState([]);

  useEffect(() => {
    axios(`https://game-blast-server.vercel.app/wishlist/${user?.email}`)
      .then((res) => {
        setBlog(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log(blogs);

  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 px-3">
      {blogs.map((blog, index) => (
        <WishlistBlog key={index} blog={blog} />
      ))}
    </div>
  );
};

export default Wishlist;
