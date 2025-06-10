import React from "react";
import { Link } from "react-router";

const SingleNewsCard = ({ blog }) => {
  return (
    <div>
      {/* <div className="overflow-hidden bg-white rounded-2xl shadow-lg transition-transform hover:scale-[1.01] duration-300 h-full">
          <div className="relative">
            <img
              className="w-full h-56 object-cover"
              src={blog.image}
              alt={blog.category}
            />
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 text-xs font-bold uppercase tracking-wide text-gray-900 px-3 py-1 rounded-full shadow-sm">
                {blog.category}
              </span>
            </div>
          </div>

          <div className="p-6 flex flex-col justify-between h-full">
            <div>
              <p className="text-sm text-gray-500 uppercase font-medium tracking-wide">
                {blog.creationDate}
              </p>

              <h2 className="mt-2 text-xl font-semibold text-gray-900 hover:text-orange-500 transition duration-200">
                {blog.title}
              </h2>

              <p className="mt-4 text-gray-600 text-base leading-relaxed">
                {blog.content.slice(0, 125) + "..."}
              </p>
            </div>

            <div className="mt-6">
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-orange-500 transition-all duration-200 border-b-2 border-transparent hover:border-orange-500 focus:border-orange-500"
              >
                Continue Reading
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div> */}

      {/* <div className="bg-gray-900 h-full text-white rounded-xl p-5 shadow-md hover:shadow-orange-500/50 transition-transform hover:-translate-y-1 hover:shadow-lg duration-300">
          <img
            src={blog.image}
            className="w-full h-44 object-cover rounded-md"
          />
          <span className="text-xs uppercase text-orange-400 mt-3 block">
            {blog.category}
          </span>
          <h2 className="mt-1 text-xl font-semibold">{blog.title}</h2>
          <p className="text-gray-300 mt-2 text-sm">
            {blog.content.slice(0, 100)}...
          </p>
          <a
            href="#"
            className="mt-4 inline-block text-orange-400 hover:text-orange-500"
          >
            Continue Reading →
          </a>
        </div> */}

      <div className="bg-gray-900 h-full text-white rounded-xl p-5 shadow-md hover:shadow-orange-500/50 transition-transform hover:-translate-y-1 hover:shadow-lg duration-300">
        <div className="relative">
          <img
            src={blog.image}
            className="w-full h-44 object-cover rounded-md"
            alt={blog.title}
          />
        </div>

        {/* Category and Bookmark in a row */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs uppercase text-orange-400">
            {blog.category}
          </span>
          <button
            title="Bookmark"
            className="text-orange-400 hover:text-orange-500 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a2 2 0 00-2 2v14l7-4 7 4V5a2 2 0 00-2-2H5z" />
            </svg>
          </button>
        </div>

        <h2 className="mt-1 text-xl font-semibold">{blog.title}</h2>
        <p className="text-gray-300 mt-2 text-sm">
          {blog.content.slice(0, 100)}...
        </p>
        <Link
          to={`/blog/${blog._id}`}
          className="mt-4 text-sm inline-block text-orange-400 hover:text-orange-500"
        >
          Continue Reading
        </Link>
      </div>
    </div>
  );
};

export default SingleNewsCard;
