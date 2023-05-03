import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Card = ({ course }) => {
  const { id, courseName, thumbnail, premiumPrice, course_description } =
    course;

  const navigate = useNavigate();
  const handleReadMore = () => {
    Navigate(`/courses/${id}`);
  };
  return (
    <div className=" card card-compact bg-base-100 rounded-md h-[370px] shadow-xl ">
      <div className="w-72 mx-auto  mt-4 overflow-hidden ">
        <img
          className=" h-40 w-72 object-cover hover:scale-[1.1]  duration-200 "
          src={thumbnail}
          alt=""
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {courseName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="font-semibold text-gray-400">
          {course_description.slice(0, 70)}. . .
        </p>
        <div className="card-actions items-center  justify-end">
          <Link
            to={`/courses/${id}`}
            className="font-bold flex gap-2 items-center text-primary "
          >
            {" "}
            Read more <FaArrowRight className="mt-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
