import React from "react";

const Footer = () => {
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
              <a href="#" className="hover:text-white">
                Blog
              </a>
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
          <form className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-md bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
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
