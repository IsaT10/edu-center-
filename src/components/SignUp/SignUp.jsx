import React, { useContext, useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [checked, setChecked] = useState(false);

  const { createUser, googleSignIn, userProfileUpdate, verifyEmail } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    createUser(userInfo.email, userInfo.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();

        //update user info
        userProfileUpdate(userInfo.name)
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            console.log(error);
          });

        //verify email
        verifyEmail().then(() => {
          toast.success("Please check your email");
        });

        navigate("/");
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

  const handleNameChange = (e) => {
    const name = e.target.value;
    console.log(name);
    setUserInfo({ ...userInfo, name: name });
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
    } else if (!/(?=.*?[A-Z])/.test(password)) {
      setErrors({
        ...errors,
        password: "At least one upper case",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else if (!/(?=.*?[0-9])/.test(password)) {
      setErrors({
        ...errors,
        password: "At least one digit",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setErrors({
        ...errors,
        password: "At least one special character",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else {
      setUserInfo({ ...userInfo, password: password });
      setErrors({ ...errors, password: "" });
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPassword = e.target.value;

    if (userInfo.password !== confirmPassword) {
      setErrors({
        ...errors,
        confirmPassword: "Please enter the password again",
      });
      setUserInfo({ ...userInfo, confirmPassword: "" });
    } else {
      setUserInfo({ ...userInfo, confirmPassword: confirmPassword });
      setErrors({ ...errors, confirmPassword: "" });
    }
  };

  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-200 w-[400px] h-[700px] mx-auto my-20 rounded-md flex flex-col px-10  justify-between shadow-lg py-4"
      >
        <h2 className="text-3xl font-bold text-center">Register</h2>
        <label className="label">
          <span className="label-text mt-4 text-gray-600 font-semibold text-base">
            Your name
          </span>
        </label>
        <input
          className="input focus:outline-2 border-none focus:outline-primary focus:outline-offset-2 input-bordered w-full max-w-xs"
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleNameChange}
          required
        />
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
        <label className="label">
          <span className="label-text mt-2 text-gray-600 font-semibold text-base">
            Confirm password
          </span>
        </label>
        <input
          className="input focus:outline-2 border-none focus:outline-primary focus:outline-offset-2 input-bordered w-full max-w-xs"
          type="password"
          placeholder="Confirm password"
          name="confirm"
          onChange={handleConfirmPasswordChange}
          required
        />
        <p className="text-red-600 text-sm font-semibold mt-1 ml-1">
          {errors.confirmPassword}
        </p>

        <div className="form-control">
          <label className="cursor-pointer label">
            <input
              onClick={handleChecked}
              type="checkbox"
              className="checkbox checkbox-primary rounded-full"
            />
            <p className="label-text mr-16 text-gray-400 font-semibold">
              I agree to the{" "}
              <Link
                to="/termsandconditions"
                className="link no-underline text-primary"
              >
                Terms & Conditions
              </Link>
            </p>
          </label>
        </div>
        {}
        <button
          className="bg-primary px-8 py-2 text-white uppercase font-semibold rounded-sm mt-6 mx-auto w-40 disabled:opacity-75 "
          disabled={!checked}
        >
          Sign up
        </button>
        <p className="text-center mt-3">
          Already have an account?
          <Link to="/login" className="link no-underline text-primary">
            {""} Login
          </Link>
        </p>
        <p className="text-center">----Or, sign up with----</p>
        <div className="flex justify-center gap-3 mt-4">
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

export default SignUp;
