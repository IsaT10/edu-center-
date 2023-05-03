import React from "react";

const Card = ({ course }) => {
  const { id, courseName, thumbnail, premiumPrice, course_description } =
    course;
  return (
    <div className=" card card-compact rounded-md h-[370px] shadow-xl ">
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
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
