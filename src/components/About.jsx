import React from "react";
import MyImg from '../image/img1.jpg'
const About = () => {
  return (
    <>
      <div className="mt-20 flex mx-40  items-center">
        <div className=" ">
          <h1 className="font-bold text-xl gap-y-10 dark:text-gray-100">
            About me
          </h1>
          <h2 className="font-bold text-5xl font-mono my-5 dark:text-[#e6a369]">
            I am Umesh Mahato
          </h2>
          <p className="text-xl  dark:text-gray-100/70 w-[75%]">
            A passionate React developer with 1 year of experience at Tata
            Consultancy Services. I specialize in React JS, Tailwind CSS, and
            MongoDB, with a focus on building user-friendly applications and
            seamless interfaces.
          </p>

          <p className="text-xl  dark:text-gray-100/70 w-[70%]">
            In my free time, I enjoy creating memes, designing posters, and
            building side projects. Let's connect and collaborate!
          </p>

          <button className=" h-10 w-2/12 mt-5 font-bold  text-white dark:text-black bg-black dark:bg-[#e6a369] shadow-xl shadow-[#e6a369]/50 rounded-md">
            Contact me
          </button>
        </div>
        <div>
          <img
            className="rounded-full h-[25rem] w-[58rem]  object-cover"
            src={MyImg}
            alt="photo"
          />
        </div>
      </div>
    </>
  );
};

export default About;
