import axios from "axios";
import React, { useContext } from "react";
import Swal from "sweetalert2";
import { MyContext } from "../../../contexts/ContextProvider";

const AddBlog = () => {
  const { user } = useContext(MyContext);

  const date = new Date();
  const today = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const content = form.content.value;
    const category = form.category.value;

    const email = user?.email;
    const name = user?.displayName;
    const photo = user?.photoURL;

    const blogData = {
      title,
      image,
      content,
      category,
      email,
      name,
      today,
      photo
      
    };

      axios.post("http://localhost:3000/add-blog", blogData).then((data) => {
        
        
      if (data?.data?.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your blog has been published!",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      }
    });
  };

  return (
    <div className="bg-[#FBF9FA] py-10">
      <div className="bg-white border border-orange-500 rounded-3xl shadow-lg max-w-4xl mx-auto px-6 max-sm:mx-2 sm:px-10 py-12 sm:py-16">
        <h2 className="text-4xl max-sm:text-3xl font-extrabold text-center text-orange-600 mb-12">
          ✍️ Publish a New Blog
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Blog Title */}
            <div>
              <label className="block text-md  font-medium text-gray-700 mb-2">
                Blog Title
              </label>
              <input
                required
                type="text"
                name="title"
                placeholder="Enter your blog title"
                className="w-full p-4 text-md border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-md font-medium text-gray-700 mb-2">
                Image URL
              </label>
              <input
                required
                type="text"
                name="image"
                placeholder="https://example.com/image.jpg"
                className="w-full p-4 text-md border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-md font-medium text-gray-700 mb-2">
              Select Category
            </label>
            <select
              required
              className="w-full p-4 text-md border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              name="category"
            >
              <option value="">-- Choose a category --</option>
              <option value="PC Gaming">PC Gaming</option>
              <option value="How-To">How-To</option>
              <option value="PlayStation">PlayStation</option>
              <option value="eSports">eSports</option>
              <option value="Mobile Gaming">Mobile Gaming</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Long Description */}
          <div>
            <label className="block text-md font-medium text-gray-700 mb-2">
              Full Blog Content
            </label>
            <textarea
              rows="6"
              name="content"
              placeholder="Write your full blog post here..."
              className="w-full p-4 text-md border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-600 text-white font-bold px-10 py-3 rounded-full shadow-md hover:bg-orange-100 hover:text-black hover:scale-105 transition duration-200"
            >
              🚀 Publish Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
