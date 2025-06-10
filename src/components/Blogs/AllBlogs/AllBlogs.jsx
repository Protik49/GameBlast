import React, { useEffect, useState } from "react";
import SingleNewsCard from "../../NewsCard/SingleNewsCard";
import axios from "axios";
import Loading from "../../Loading/Loading";



const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios("http://localhost:3000/blogs")
      .then((res) => {
        setBlogs(res.data);
        setFilteredBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Fetch error:", err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(
        blogs.filter((blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, blogs]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-end justify-between">
            <div className=" w-11/12 mx-auto ">
              <p className="text-3xl font-bold text-center">
                Explore the latest in Gaming
              </p>
              <div className="flex justify-center gap-4 flex-col sm:flex-row mt-5">
                <input
                  type="text"
                  placeholder="Enter title.."
                  value={searchTerm}
                  onChange={handleInputChange}
                  name="search"
                  className="bg-white text-black px-4 py-2 rounded-lg w-full sm:w-auto border border-orange-300"
                />

                <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold">
                  Search
                </button>
              </div>
            </div>
            <div>{/* For Showing Dynamic iconon the right side */}</div>
          </div>

          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
            {loading ? (
              <div className="col-span-full flex justify-center items-center h-40">
                <Loading />
              </div>
            ) : filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <SingleNewsCard key={index} blog={blog} />
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">
                No matching blogs found.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllBlogs;
