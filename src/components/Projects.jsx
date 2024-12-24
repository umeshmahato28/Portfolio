import React from "react";

const Projects = () => {
  return (
    <div className="mt-10 p-6 m-12 ">
      <h1 className="font-bold text-5xl flex justify-center dark:text-gray-100">
        My Projects
      </h1>
      <section className="grid grid-cols-3 gap-16 p-6 my-10 text-cyan-100 text-center">
        <div className="dark:bg-zinc-900 bg-[#f0b684] p-5 rounded-xl hover:scale-110 duration-700 ">
          <img
            src="https://wallpapers.com/images/high/fighting-scene-iron-man-superhero-6pn70lheg3omfuml.webp"
            alt=""
          />
          <h1 className="text-xl font-bold ">Coupon Deal</h1>
          <info>A coupon Trading website</info>
        </div>
        <div className="dark:bg-zinc-900 bg-[#f0b684] p-5 rounded-xl hover:scale-110 duration-700 ">
          <img
            src="https://wallpapers.com/images/high/fighting-scene-iron-man-superhero-6pn70lheg3omfuml.webp"
            alt=""
          />
          <h1 className="text-xl font-bold ">Coupon Deal</h1>
          <info>A coupon Trading website</info>
        </div>
        <div className="dark:bg-zinc-900 bg-[#f0b684] p-5 rounded-xl hover:scale-110 duration-700 ">
          <img
            src="https://wallpapers.com/images/high/fighting-scene-iron-man-superhero-6pn70lheg3omfuml.webp"
            alt=""
          />
          <h1 className="text-xl font-bold ">Coupon Deal</h1>
          <info>A coupon Trading website</info>
        </div>
      </section>
    </div>
  );
};

export default Projects;
