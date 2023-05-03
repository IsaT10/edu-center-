import React, { createContext } from "react";
import Header from "../components/Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer/Footer";

export const CoursesContext = createContext();

const Main = () => {
  const courses = useLoaderData();
  return (
    <CoursesContext.Provider value={courses}>
      <Header />
      <Outlet />
      <Footer />
    </CoursesContext.Provider>
  );
};

export default Main;
