import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const singleCourseData = useLoaderData();
  const { id, premiumPrice, thumbnail, courseName } = singleCourseData;
  console.log(singleCourseData);
  return (
    <div className="col-span-6 mx-10">
      <div>
        <img
          className="w-full h-[535px] object-cover rounded-md"
          src={thumbnail}
          alt=""
        />
        <div className="flex justify-between items-center text-xl font-semibold uppercase my-4 text-primary">
          <p>{courseName}</p>
          <p>{premiumPrice}</p>
        </div>
        <p className="text-lg mb-8 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          officia debitis illo placeat voluptas asperiores ut! Voluptatem
          cumque, quae commodi tempora esse sit perspiciatis non eos error!
          Eligendi ab sunt cum quia, alias assumenda nihil ipsam asperiores,
          tenetur commodi, eum dolore id laborum non soluta blanditiis! Saepe
          perferendis ea enim reprehenderit explicabo ducimus tempora vero fuga
          eaque modi corrupti, dolores voluptates omnis a. Iste enim, eos
          nostrum reiciendis laborum at nisi consectetur, provident quibusdam
          excepturi necessitatibus! Laboriosam, quia. Mollitia, ea similique.
          Sapiente eligendi, sequi aut est a molestias numquam distinctio
          necessitatibus vel. Neque accusamus id asperiores minima obcaecati
          tempora iste.
        </p>
        <Link
          to={`/checkout/${id}`}
          className="text-lg font-semibold uppercase bg-primary text-white px-5 py-3  rounded-md"
        >
          Get premium access
        </Link>
      </div>
    </div>
  );
};

export default CourseDetails;
