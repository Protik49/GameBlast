import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleNewsCard from "./SingleNewsCard";
import { Link } from "react-router";
import Loading from "../Loading/Loading";

const NewsCard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://game-blast-server.vercel.app/blogs")
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  const featured = blogs[0];
  const rest = blogs.slice(1, 7);

  return (
    <section className="bg-white py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              🎯 Featured & Latest News
            </h2>
            <p className="mt-2 text-gray-600">
              Breaking stories, deep dives, and fresh updates from the gaming world.
            </p>
          </div>
          <Link to="/all-blogs">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full shadow-md hover:scale-105 transition duration-200 cursor-pointer">
              View All News →
            </button>
          </Link>
        </div>

        {/* Featured Article */}
        {featured && (
          <div className="mb-12">
            <Link to={`/blogs/${featured._id}`}>
              <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                <img
                  src={featured.image || "/placeholder.jpg"}
                  alt={featured.title}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {featured.title}
                  </h3>
                  <p className="text-gray-200 text-sm line-clamp-2">
                    {featured.description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Grid of Other News */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((blog, index) => (
            <SingleNewsCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
