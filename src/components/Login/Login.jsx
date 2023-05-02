import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  console.log(userInfo.email);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const { logIn, googleSignIn, resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // console.log(from);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    logIn(userInfo.email, userInfo.password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors({ ...errors, email: "Please enter a valid email address" });
      setUserInfo({ ...userInfo, email: "" });
    } else {
      setUserInfo({ ...userInfo, email: email });
      setErrors({ ...errors, email: "" });
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;

    if (password.length < 8) {
      setErrors({
        ...errors,
        password: "Password must has at least 8 characters",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else {
      setUserInfo({ ...userInfo, password: password });
      setErrors({ ...errors, password: "" });
    }
  };

  const handleEmailBlur = (e) => {
    const email = e.target.value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setUserInfo({ ...userInfo, email: "" });
    } else {
      setUserInfo({ ...userInfo, email: email });
    }
  };

  const handleResetPassword = () => {
    resetPassword(userInfo.email)
      .then(() => {
        console.log(userInfo.email);
        toast.success("Password reset email sent");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(userInfo.email);
        console.log(errorMessage, errorCode);
        toast.warning("Please enter a valid email");
      });
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-200 w-[400px] h-[500px] mx-auto my-20 rounded-md flex flex-col px-10  justify-between shadow-lg py-4"
      >
        <h2 className="text-3xl font-bold text-center">Log in</h2>

        <label className="label">
          <span className="label-text mt-2 text-gray-600 font-semibold text-base">
            Your email
          </span>
        </label>
        <input
          className="input focus:outline-2 border-none  focus:outline-primary focus:outline-offset-2 input-bordered w-full max-w-xs"
          type="text"
          placeholder="E-mail address"
          name="emali"
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          required
        />
        <p className="text-red-600 text-sm font-semibold mt-1 ml-1">
          {errors.email}
        </p>

        <label className="label">
          <span className="label-text mt-2 text-gray-600 font-semibold text-base">
            Password
          </span>
        </label>
        <input
          className="input focus:outline-2 border-none focus:outline-primary focus:outline-offset-2 input-bordered w-full max-w-xs"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handlePasswordChange}
          required
        />
        <p className="text-red-600 text-sm font-semibold mt-1 ml-1">
          {errors.password}
        </p>
        <button onClick={handleResetPassword} className="text-primary mr-48">
          Forget password
        </button>

        <button className="bg-primary px-8 py-2 text-white uppercase font-semibold rounded-sm mt-8 mx-auto w-40  hover:text-primary hover:bg-transparent border-2  border-primary hover:border-2 hover:border-primary duration-200">
          Login
        </button>
        <p className="text-center mt-3">
          Don't have account?
          <Link to="/signup" className="link no-underline text-primary">
            {""} Sign up
          </Link>
        </p>
        <p className="text-center">----Or, Login with----</p>
        <div className="flex justify-center gap-3 mt-4 ">
          <button
            onClick={handleGoogleSignIn}
            className="bg-white p-3 rounded-full"
          >
            <FaGoogle />
          </button>
          <button className="bg-white p-3 rounded-full">
            <FaGithub />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
