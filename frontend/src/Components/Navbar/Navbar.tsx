import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../Context/useAuth";

interface Props {}

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logout } = useAuth();
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <div className="hidden font-bold lg:flex">
            <Link to="/" className="text-black hover:text-darkBlue">
              Home
            </Link>
          </div>
          <div className="hidden font-bold lg:flex">
            <Link to="/charity" className="text-black hover:text-darkBlue">
              Charity
            </Link>
          </div>
          <div className="hidden font-bold lg:flex">
            <Link to="/motivation" className="text-black hover:text-darkBlue">
              Motivation
            </Link>
          </div>
          <div className="hidden font-bold lg:flex">
            <Link to="/about" className="text-black hover:text-darkBlue">
              About Us
            </Link>
          </div>
          <div className="hidden font-bold lg:flex">
            <Link to="/search" className="text-black hover:text-darkBlue">
              Search
            </Link>
          </div>
        </div>
        {isLoggedIn() ? (
            <div className="hidden lg:flex items-center space-x-6 text-back">
              <div className="hover:text-darkBlue">Welcome, {user?.userName}</div>
              <a
              onClick={logout}
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
            >
              Logout
            </a>
          </div>
        ) : (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <Link to="/login" className="hover:text-darkBlue">
              Account
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
