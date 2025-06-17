import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { MyContext } from "../../../contexts/ContextProvider";

const SingleMyBlog = ({ blog }) => {
  const { user } = useContext(MyContext);

  // Local state to hold blog data for live update
  const [localBlog, setLocalBlog] = useState(blog);

  // Modal open state
  const [showModal, setShowModal] = useState(false);

  // Form state for updates
  const [updatedData, setUpdatedData] = useState({
    title: blog.title,
    content: blog.content,
    image: blog.image,
    category: blog.category,
  });

  const isOwnBlog = user?.email === localBlog?.authorEmail;

  // Bookmark handler
  const handleBookmark = () => {
    if (isOwnBlog) return;

    axios
      .post(`https://game-blast-server.vercel.app/wishlist`, {
        newsID: localBlog._id,
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

  // Update confirm handler
  const handleUpdateConfirm = () => {
    if (!updatedData.category) {
      Swal.fire("Error", "Please select a category", "error");
      return;
    }

    axios
      .put(
        `https://game-blast-server.vercel.app/blog/${localBlog._id}`,
        updatedData
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire("Success", "Blog updated successfully!", "success");
          setLocalBlog({ ...localBlog, ...updatedData });
          setShowModal(false);
        } else {
          Swal.fire("Info", "No changes were made", "info");
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire("Error", "Failed to update blog", "error");
      });
  };

  return (
    <div>
      <div className="bg-gray-900 h-full text-white rounded-xl p-5 shadow-md hover:shadow-orange-500/50 transition-transform hover:-translate-y-1 hover:shadow-lg duration-300">
        <div className="relative">
          <img
            src={localBlog.image}
            className="w-full h-44 object-cover rounded-md"
            alt={localBlog.title}
          />
        </div>

        {/* Category and Bookmark in a row */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs uppercase text-orange-400">
            {localBlog.category}
          </span>
          <button
            title={
              isOwnBlog
                ? "You cannot bookmark your own blog"
                : "Add to wishlist"
            }
            onClick={handleBookmark}
            disabled={isOwnBlog}
            className={`${
              isOwnBlog
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer hover:text-orange-500"
            } text-orange-400 transition`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a2 2 0 00-2 2v14l7-4 7 4V5a2 2 0 00-2-2H5z" />
            </svg>
          </button>
        </div>

        <h2 className="mt-1 text-xl font-semibold">{localBlog.title}</h2>
        <p className="text-gray-300 mt-2 text-sm">
          {localBlog.content.slice(0, 100)}...
        </p>
        <Link
          to={`/blog/${localBlog._id}`}
          className="mt-4 text-sm inline-block text-orange-400 hover:text-orange-500"
        >
          Continue Reading
        </Link>

        {/* Update button only for blog owner, with mr-5 */}
        {isOwnBlog && (
          <button
            onClick={() => setShowModal(true)}
            className="mt-3 ml-5 inline-block bg-orange-500 text-white text-sm px-3 py-1 rounded hover:bg-orange-600 transition cursor-pointer"
          >
            Update
          </button>
        )}
      </div>

      {/* Update Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[95%] max-w-md">
            <h2 className="text-xl font-bold mb-4">Update Blog</h2>

            <label htmlFor="title" className="block mb-1 font-semibold">
              Title
            </label>
            <input
              id="title"
              type="text"
              className="w-full mb-3 p-3 border border-gray-300 rounded"
              placeholder="Title"
              value={updatedData.title}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, title: e.target.value })
              }
            />

            <label htmlFor="image" className="block mb-1 font-semibold">
              Image URL
            </label>
            <input
              id="image"
              type="text"
              className="w-full mb-3 p-3 border border-gray-300 rounded"
              placeholder="Image URL"
              value={updatedData.image}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, image: e.target.value })
              }
            />

            <label htmlFor="category" className="block mb-1 font-semibold">
              Category
            </label>
            <select
              id="category"
              required
              className="w-full p-3 border border-gray-300 rounded mb-4"
              value={updatedData.category}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, category: e.target.value })
              }
            >
              <option value="PC Gaming">PC Gaming</option>
              <option value="How-To">How-To</option>
              <option value="PlayStation">PlayStation</option>
              <option value="eSports">eSports</option>
              <option value="Mobile Gaming">Mobile Gaming</option>
              <option value="Other">Other</option>
            </select>

            <label htmlFor="content" className="block mb-1 font-semibold">
              Content
            </label>
            <textarea
              id="content"
              className="w-full mb-3 p-3 border border-gray-300 rounded"
              placeholder="Content"
              rows={4}
              value={updatedData.content}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, content: e.target.value })
              }
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm bg-gray-300 rounded cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateConfirm}
                className="px-4 py-2 text-sm bg-orange-500 text-white rounded  cursor-pointer"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleMyBlog;
