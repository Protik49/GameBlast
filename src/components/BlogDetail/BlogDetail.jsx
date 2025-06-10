import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../Loading/Loading";

const BlogDetail = () => {
  const [blog, setBlog] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:3000/blog/${id}`)
      .then((res) => {
        setBlog(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  //console.log(blog);

  const dummyComments = [
    {
      name: "Alex",
      text: "This article really opened my eyes to the possibilities!",
    },
    { name: "Priya", text: "We need more awareness like this in the media." },
    {
      name: "Michael",
      text: "Great job explaining the importance of renewable energy.",
    },
  ];

  return (
    <div>
      {blog ? (
        <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
          {/* Image */}
          <img
            src={blog.image}
            alt="Blog cover"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />

          {/* Title & Author */}
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-gray-900">{blog.title}</h1>
            <div className="flex items-center gap-3 mt-4">
              <img
                src={
                  "https://www.verdict.co.uk/wp-content/uploads/2022/09/shutterstock_1934243669.jpg"
                }
                className="w-10 h-10 rounded-full border-2 border-orange-500"
                alt="Author"
              />
              <div>
                <p className="text-sm font-medium">{blog.authorName}</p>
                <p className="text-xs text-gray-500">{blog.createdDate}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mt-6 leading-7 text-gray-700 whitespace-pre-line">
            {blog.content}
          </div>

          {/* Divider */}
          <div className="border-t mt-10 mb-6 border-gray-200"></div>

          {/* Comments Section */}
          <div>
            <h2 className="text-2xl font-semibold text-orange-500 mb-4">
              Comments
            </h2>
            {/* <div className="space-y-4">
          {dummyComments.map((comment, i) => (
            <div
              key={i}
              className="bg-white shadow-sm border border-gray-100 p-4 rounded-md"
            >
              <p className="text-sm font-semibold text-gray-800">
                {comment.name}
              </p>
              <p className="text-sm text-gray-600 mt-1">{comment.text}</p>
            </div>
          ))}
        </div> */}

            {/* Add Comment */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Leave a Comment
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <textarea
                  placeholder="Your comment"
                  rows="4"
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default BlogDetail;
