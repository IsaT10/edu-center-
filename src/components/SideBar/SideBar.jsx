import React, { useContext } from "react";
import { CoursesContext } from "../../layout/Main";
import { Link } from "react-router-dom";

const SideBar = () => {
  const coursesData = useContext(CoursesContext);

  return (
    <div className="col-span-2 flex flex-col mx-4">
      <h3 className="text-2xl font-semibold mb-8">Course list</h3>
      {coursesData.map((c) => (
        <Link
          className="text-base font-semibold px-3 py-3 rounded-md hover:bg-primary hover:text-white duration-200 cursor-pointer"
          key={c.id}
          to={`/courses/${c.id}`}
        >
          {c.courseName}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
