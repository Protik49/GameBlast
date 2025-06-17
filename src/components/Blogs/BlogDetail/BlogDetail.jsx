import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../Loading/Loading";
import { MyContext } from "../../../contexts/ContextProvider";

const BlogDetail = () => {
  const [blog, setBlog] = useState(null);
  const [allComments, setAllComments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const { user } = useContext(MyContext);
  const { id } = useParams();

  const fetchComments = async () => {
    try {
      const res = await axios(
        `https://game-blast-server.vercel.app/comments/${id}`
      );
      setAllComments(res.data);
    } catch (err) {
      console.log("Comment loading error:", err.message);
    }
  };

  useEffect(() => {
    axios(`https://game-blast-server.vercel.app/blog/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.log("Blog loading error:", err.message));

    fetchComments();
  }, [id]);

  const handleComment = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const form = e.target;
    const name = form.name.value.trim();
    const comment = form.comment.value.trim();

    if (!name || !comment) {
      setMessage("Please fill in both fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      await axios.post("https://game-blast-server.vercel.app/addcomment", {
        name,
        comment,
        blogId: id,
      });

      setMessage("✅ Comment posted!");
      form.reset();
      fetchComments();
    } catch (error) {
      setMessage("❌ Failed to post comment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF8] text-gray-800">
      {blog ? (
        <div className="max-w-5xl mx-auto px-6 py-10">
          {/* Blog Header */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src={blog.image}
              alt="Cover"
              className="w-full h-[300px] object-cover hover:scale-105 transition duration-300"
            />
          </div>

          {/* Title & Meta */}
          <div className="mt-8">
            <h1 className="text-4xl font-extrabold text-[#FF5722] leading-tight">
              {blog.title}
            </h1>
            <div className="flex items-center mt-4 space-x-4">
              <img
                src="https://www.verdict.co.uk/wp-content/uploads/2022/09/shutterstock_1934243669.jpg"
                alt="Author"
                className="w-12 h-12 rounded-full border-2 border-[#FF5722]"
              />
              <div>
                <p className="font-medium">{blog.authorName}</p>
                <p className="text-sm text-gray-500">{blog.createdDate}</p>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="mt-6 text-[17px] leading-8 whitespace-pre-line">
            {blog.content}
          </div>

          {/* Comments Section */}
          <div className="mt-14 border-t pt-10">
            <h2 className="text-2xl font-semibold text-[#FF5722] mb-6">
              🗨️ Comments
            </h2>

            {/* Display Comments */}
            {allComments.length > 0 ? (
              <div className="space-y-5">
                {allComments.map((c, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm"
                  >
                    <p className="font-semibold text-[#333]">{c.name}</p>
                    <p className="text-sm text-gray-600 mt-1">{c.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-orange-500 bg-orange-50 p-4 rounded-lg border">
                Be the first to leave a comment!
              </div>
            )}

            {/* Comment Form */}
            {user?.email === blog?.authorEmail ? (
              <div className="mt-10 bg-orange-100 text-orange-700 p-6 rounded-xl border border-orange-300">
                🙅‍♂️ Authors cannot comment on their own blog post.
              </div>
            ) : (
              <div className="mt-10 bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                  💬 Leave a Comment
                </h3>
                <form onSubmit={handleComment} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    defaultValue={user?.displayName}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
                    required
                  />
                  <textarea
                    name="comment"
                    rows="4"
                    placeholder="Your comment"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#FF5722] hover:bg-[#e64a19] text-white px-6 py-3 rounded-lg transition-all font-medium disabled:opacity-60"
                  >
                    {isSubmitting ? "Posting..." : "Post Comment"}
                  </button>
                  {message && (
                    <p
                      className={`text-sm mt-2 ${
                        message.startsWith("✅")
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {message}
                    </p>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default BlogDetail;
