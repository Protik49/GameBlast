import React, { useContext } from "react";
import { Link, NavLink } from "react-router"; // fixed import
import { MyContext } from "../../contexts/ContextProvider";
import { PuffLoader } from "react-spinners";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(MyContext);

  const handleLogout = () => {
    signOutUser();
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/all-blogs", label: "All Blogs" },
    { to: "/add-blog", label: "Add Blog" },
    { to: "/featured-blogs", label: "Featured Blogs" },
    { to: "/wishlist", label: "Wishlist" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-orange-500">
            GameBlast
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-6 font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `hover:text-orange-500 transition ${
                    isActive ? "text-orange-500 font-semibold" : "text-gray-700"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {loading ? (
              <PuffLoader color="orange" size={40} />
            ) : user ? (
              <div className="relative group">
                <button className="w-10 h-10 rounded-full border-2 border-orange-500 overflow-hidden">
                  <img src={user?.photoURL} alt="Profile" />
                </button>

                {/* Dropdown */}
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
                  <div className="px-4 py-2 border-b">
                    <p className="font-semibold">{user?.displayName || "User"}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  <Link to="/my-blogs" className="block px-4 py-2 hover:bg-gray-100">
                    My Blogs
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-orange-500 font-semibold hover:underline"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile Menu */}
            <div className="lg:hidden dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <FiMenu size={22} />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-white rounded-box w-52"
              >
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink to={link.to}>{link.label}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
