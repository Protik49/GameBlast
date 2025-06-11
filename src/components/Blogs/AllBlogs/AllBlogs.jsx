import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleNewsCard from "../../NewsCard/SingleNewsCard";
import Loading from "../../Loading/Loading";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch blogs on mount
  useEffect(() => {
    setLoading(true);
    axios("http://localhost:3000/blogs")
      .then((res) => {
        setBlogs(res.data);
        setFilteredBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err.message);
        setLoading(false);
      });
  }, []);

  // Filter blogs by search
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredBlogs(blogs);
    } else {
      const keyword = searchTerm.toLowerCase();
      const filtered = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(keyword)
      );
      setFilteredBlogs(filtered);
    }
  }, [searchTerm, blogs]);

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Stay Ahead in Tech & Gaming
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Dive into expert insights, breaking industry news, and deep dives on
            emerging trends.
          </p>
        </header>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search blog titles, e.g. 'AI in Gaming'"
            className="w-full sm:w-1/2 px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Blog Cards or Loading/Error States */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <div className="col-span-full flex justify-center items-center h-48">
              <Loading />
            </div>
          ) : filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
              <SingleNewsCard key={index} blog={blog} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-600 text-lg">
              No blog posts found matching your search.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;
