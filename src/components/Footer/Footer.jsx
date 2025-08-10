import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router";

const Footer = () => {
  const [email, setEmail] = useState("");
  
    const handleSubscribe = () => {
      if (!email || !email.includes("@")) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please enter a valid email",
          
        });
        return;
      }
  
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "🎉 Thank you for subscribing!",
        showConfirmButton: false,
        timer: 1500,
      });
      setEmail("");
    };
  return (
    <footer className="bg-neutral-950 text-neutral-200 px-6 py-14 sm:px-12">
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">GameBlast</h2>
          <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
            Fresh stories, in-depth features, and the pulse of gaming culture.
            Serving gamers since 2022.
          </p>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>
              <Link to={"/all-blogs"} className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Newsletter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Changelog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Support Center
              </a>
            </li>
          </ul>
        </div>

        {/* Community Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Community</h3>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>
              <a href="#" className="hover:text-white">
                Forums
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contributors
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Feedback
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Stay in the Loop
          </h3>
          <p className="text-sm text-neutral-400 mb-4">
            Subscribe to get the latest news and articles delivered to your
            inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-md bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              onClick={handleSubscribe}
              className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-4 py-2 rounded-md w-full sm:w-auto "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 mt-14 pt-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} GameBlast Publication Ltd. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
