import React from "react";
import { Link } from "react-router";

const ComingSoon = () => {
  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-5xl sm:text-6xl font-bold text-orange-400 mb-4 animate-pulse">
        🚧 Coming Soon
      </h1>
      <p className="text-gray-300 max-w-lg mb-8 text-lg">
        We’re working hard to bring you this page. Stay tuned for exciting updates, features, and announcements coming your way soon.
      </p>
      <Link
        to="/"
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full shadow-md hover:scale-105 transition duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ComingSoon;
