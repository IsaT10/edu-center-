import React from "react";
import SideBar from "../components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

const CoursesLayout = () => {
  return (
    <div className="mx-20 my-6 grid grid-cols-8">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default CoursesLayout;
