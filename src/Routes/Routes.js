import ErrorPage from "../components/ErrorPage/ErrorPage";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../components/Home/Home");
const { default: Courses } = require("../components/Courses/Courses");
const { default: Blog } = require("../components/Blog/Blog");
const { default: FAQ } = require("../components/FAQ/FAQ");
const { default: Footer } = require("../components/Footer/Footer");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/courses", element: <Courses /> },
      { path: "/blog", element: <Blog /> },
      { path: "/faq", element: <FAQ /> },
    ],
  },
  {
    element: <Footer />,
  },
]);