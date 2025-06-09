import React from "react";

const AddBlog = () => {

  const date = new Date();
  const today = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
    
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const title = form.title.value
        const image = form.image.value 
        const content = form.content.value
        const category = form.category.value

        
        
        
    }
    
    
  return (
    <div className="bg-[#FBF9FA] py-10">
      <div className="bg-white border border-orange-500 rounded-3xl shadow-lg max-w-4xl mx-auto px-6 max-sm:mx-2 sm:px-10 py-12 sm:py-16">
        <h2 className="text-5xl max-sm:text-3xl font-extrabold text-center text-orange-600 mb-12">
          ✍️ Publish a New Blog
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Blog Title */}
            <div>
              <label className="block text-lg  font-medium text-gray-700 mb-2">
                Blog Title
              </label>
              <input
                              type="text"
                              name="title"
                placeholder="Enter your blog title"
                className="w-full p-4 text-lg border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Image URL
              </label>
              <input
                              type="text"
                              name="image"
                placeholder="https://example.com/image.jpg"
                className="w-full p-4 text-lg border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Select Category
            </label>
            <select className="w-full p-4 text-lg border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" name="category">
              <option value="">-- Choose a category --</option>
              <option value="Gaming">PC Gaming</option>
              <option value="Technology">How-To</option>
              <option value="Education">PlayStaion</option>
              <option value="Health">eSports</option>
              <option value="Travel">Mobile Gaming</option>
              <option value="Travel">Other</option>
            </select>
          </div>

          {/* Long Description */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Full Blog Content
            </label>
            <textarea
                          rows="6"
                          name="content"
              placeholder="Write your full blog post here..."
              className="w-full p-4 text-lg border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
