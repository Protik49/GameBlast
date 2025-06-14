import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { MyContext } from "../../../contexts/ContextProvider";


const WishlistBlog = ({ blog }) => {
  const { user } = useContext(MyContext);

  const handleBookmark = () => {
    axios
      .post(`http://localhost:3000/wishlist`, {
        newsID: blog?._id,
        userEmail: user?.email,
      })
      .then((res) => {
        if (res?.data?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully added to Wishlist!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        if (err.response?.status === 409) {
          Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Already in wishlist!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          console.error("Bookmark error:", err.message);
        }
      });
  };

  return (
    <div>
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
            onClick={handleBookmark}
            className="text-orange-400 cursor-pointer hover:text-orange-500 transition"
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

export default WishlistBlog;
