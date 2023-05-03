import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import { CoursesContext } from "../../layout/Main";

const Courses = () => {
  const courses = useContext(CoursesContext);
  // console.log(courses);
  return (
    <div className="col-span-6 ">
      <div className="grid grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} course={course} />
        ))}
      </div>
      {/* <p className="text-5xl font-bold bg-primary px-12 py-12 mt-16 -ml-40 mr-40 -mb-28 text-white">
        You can be your own guiding star with our help
      </p> */}
    </div>
  );
};

export default Courses;
