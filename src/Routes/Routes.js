import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import TermsAndCondition from "../components/TermsAndCondition/TermsAndCondition";
import UserProfile from "../components/UserProfile/UserProfile";
import PrivateRoutes from "./PrivateRoutes";

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
      {
        path: "/blog",
        element: (
          <PrivateRoutes>
            <Blog />
          </PrivateRoutes>
        ),
      },
      {
        path: "/faq",
        element: (
          <PrivateRoutes>
            <FAQ />
          </PrivateRoutes>
        ),
      },
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <Login /> },
      { path: "/userprofile", element: <UserProfile /> },
    ],
  },
  {
    path: "/termsandconditions",
    element: <TermsAndCondition />,
  },
  {
    element: <Footer />,
  },
]);
