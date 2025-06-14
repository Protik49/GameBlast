import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../contexts/ContextProvider";
import axios from "axios";
import Loading from "../../Loading/Loading";
import SingleNewsCard from "../../NewsCard/SingleNewsCard";
import SingleMyBlog from "./SingleMyBlog";

const Myblogs = () => {
  const { user } = useContext(MyContext);

  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all blogs on mount
  useEffect(() => {
    setLoading(true);
    axios("http://localhost:3000/blogs")
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err.message);
        setLoading(false);
      });
  }, []);

  // Filter blogs by current user's email
  useEffect(() => {
    if (user?.email) {
      const filtered = blogs.filter((blog) => blog?.authorEmail === user.email);
      setFilteredBlogs(filtered);
    }
  }, [blogs, user]);

  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 px-3">
      {loading ? (
        <div className="col-span-full flex justify-center items-center h-48">
          <Loading />
        </div>
      ) : filteredBlogs.length > 0 ? (
        filteredBlogs.map((blog, index) => (
          <SingleMyBlog key={index} blog={blog} />
        ))
      ) : (
        <div className="col-span-full h-screen flex justify-center items-center text-center text-gray-600 text-lg">
          No blog posts found.
        </div>
      )}
    </div>
  );
};

export default Myblogs;
