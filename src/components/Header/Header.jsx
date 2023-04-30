import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-20 py-7 bg-slate-200 sticky top-0 z-50">
      <h1 className="text-4xl font-bold">
        <Link to="/">
          {" "}
          Edu<span className="text-primary">Center</span>
        </Link>
      </h1>
      <div className="flex gap-8 text-xl font-bold ">
        <Link className="hover:text-primary duration-200" to="/">
          Home
        </Link>
        <Link className="hover:text-primary duration-200" to="/courses">
          Courses
        </Link>
        <Link className="hover:text-primary duration-200" to="/blog">
          Blog
        </Link>
        <Link className="hover:text-primary duration-200" to="/faq">
          FAQ
        </Link>
        <Link className="hover:text-primary duration-200" to="/"></Link>
      </div>
    </nav>
  );
};

export default Header;
