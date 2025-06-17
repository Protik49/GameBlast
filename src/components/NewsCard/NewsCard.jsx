import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleNewsCard from "./SingleNewsCard";
import { Link } from "react-router";

const NewsCard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios("https://game-blast-server.vercel.app/blogs")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => console.log("Fetch error:", err.message));
  }, []);

  //console.log(blogs);

  return (
    <div>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold">Most Recent News</p>
            </div>
            <div>{/* For Showing Dynamic iconon the right side */}</div>
          </div>

          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
            {/* single news card */}
            {blogs.slice(0, 6).map((blog, index) => {
              return <SingleNewsCard key={index} blog={blog}></SingleNewsCard>;
            })}
          </div>
        </div>
        {/* Button */}
        <div className="text-center my-10">
          <Link to={"/all-blogs"}>
            {" "}
            <button
              type="submit"
              className="bg-orange-600 text-white font-bold px-10 py-3 cursor-pointer rounded-full shadow-md hover:bg-orange-100 hover:text-black hover:scale-105 transition duration-200"
            >
              See All Blogs
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NewsCard;
