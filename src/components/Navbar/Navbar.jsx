import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { MyContext } from "../../contexts/ContextProvider";
import { PuffLoader } from "react-spinners";

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(MyContext);

  const handleLogout = () => {
    signOutUser();
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm ">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>

              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">GameBlast</a>
        </div>
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
        <div className="navbar-end">
          {loading ? (
            <PuffLoader color="orange" size={40}></PuffLoader>
          ) : user ? (
            <div className=" flex gap-4 justify-center items-center">
              <button
                className="btn rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] border hover:border-black hover:text-black hover:bg-orange-400 font-bold bg-white  text-orange-400 border-orange-400"
                onClick={handleLogout}
              >
                Logout
              </button>
              <div className="w-10 ">
                <img
                  className="rounded-full border-3 border-orange-400"
                  alt="Profile pic"
                  src={user?.photoURL}
                />
              </div>
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
