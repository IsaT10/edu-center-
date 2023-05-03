import React from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const CheckOut = () => {
  const handleCheckOut = () => {
    toast.success("Thank you for your purchase");
  };
  const checkOutCourse = useLoaderData();
  const { id, premiumPrice, thumbnail, courseName } = checkOutCourse;
  return (
    // <div className=" h-[400px] text-center border-2 w-[350px] border-primary mx-auto mt-32 flex flex-col justify-between">
    <div className="border border-primary mx-auto w-[300px] h-[400px] mt-24 flex flex-col justify-between items-center py-5 px-10 bg-primary rounded-sm">
      <h3 className="text-lg font-semibold text-white text-center">
        {courseName}
      </h3>
      <div className="flex items-center gap-20">
        <p className="font-bold text-2xl text-white">{premiumPrice}</p>
        <button
          onClick={handleCheckOut}
          className="bg-white text-base uppercase px-4 py-2 rounded-sm font-semibold
        "
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
