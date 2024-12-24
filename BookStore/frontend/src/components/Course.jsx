import React from "react";
import Cards from "./Cards"
import list from "../../public/list.json"
import {Link} from "react-router-dom"


function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container max-auto md:px-20 px-4">
        <div className="mt-28 text-center items-center justify-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We&apos;ar delighted to have you{" "}
            <span className="text-pink-500">Here!</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla esse,
            iure delectus voluptates quis sit labore quibusdam accusamus, quod
            voluptatem minima inventore, impedit sint quos. Praesentium
            dignissimos eaque, molestiae exercitationem dicta esse sed dolorum
            cum mollitia magni! Dolorum, perspiciatis laborum dolorem impedit
            repellat vel, porro eligendi vitae beatae ratione distinctio.
          </p>
          <Link to='/'>
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 ">
            Back
          </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
          {
            list.map((item)=>(
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;
