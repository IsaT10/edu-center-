import React from "react";

const Home = () => {
  return (
    <div className="h-[1200px] ">
      <div className="hero min-h-screen bg-hero">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content  text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-white text-7xl font-bold ">
              Online Tutorial From <br /> Top Instructor.
            </h1>
            <p className="mb-5 text-white text-xl">
              Meet university,and cultural institutions, who'll share their
              experience.
            </p>
            <button className="btn btn-primary text-white text-lg font-bold mr-3">
              Our courses
            </button>
            <button className="btn bg-transparent border-4 text-white text-lg font-bold hover:bg-white hover:border-white hover:text-primary border-white ">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
