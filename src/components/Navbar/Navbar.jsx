import React, { useContext } from "react";
import { Link, NavLink } from "react-router"; // ensure this is react-router-dom
import { MyContext } from "../../contexts/ContextProvider";
import { PuffLoader } from "react-spinners";

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(MyContext);

  const handleLogout = () => {
    signOutUser();
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        {/* Navbar start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/all-blogs"}>All Blogs</NavLink>
              </li>
              <li>
                <NavLink to={"/add-blog"}>Add Blog</NavLink>
              </li>
              <li>
                <NavLink to={"/featured-blogs"}>Featured Blogs</NavLink>
              </li>
              <li>
                <NavLink to={"/wishlist"}>Wishlist</NavLink>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            GameBlast
          </Link>
        </div>

        {/* Navbar center */}
        <div className="navbar-center font-medium hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/all-blogs"}>All Blogs</NavLink>
            </li>
            <li>
              <NavLink to={"/add-blog"}>Add Blog</NavLink>
            </li>
            <li>
              <NavLink to={"/featured-blogs"}>Featured Blogs</NavLink>
            </li>
            <li>
              <NavLink to={"/wishlist"}>Wishlist</NavLink>
            </li>
          </ul>
        </div>

        {/* Navbar end */}
        <div className="navbar-end">
          {loading ? (
            <PuffLoader color="orange" size={40} />
          ) : user ? (
            <div className="dropdown dropdown-end">
              {/* Profile picture as dropdown toggle */}
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full border-2 border-orange-500">
                  <img src={user?.photoURL} alt="Profile" />
                </div>
              </label>
              {/* Dropdown menu */}
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-56"
              >
                <li className="cursor-default px-4 py-2">
                  <div className="font-semibold">
                    {user?.displayName || "User"}
                  </div>
                  <div className="text-xs opacity-70">{user?.email}</div>
                </li>
                <li>
                  <Link to="/my-blogs" className="justify-between">
                    My Blogs
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-red-600 hover:text-red-700 cursor-pointer"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="space-x-4">
              <Link to={"/login"} className="btn">
                Login
              </Link>
              <Link to={"/signup"} className="text-blue-600">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
