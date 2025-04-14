import React from "react";
import Greet from "./Greet";
import About from "./About"; 
// import Contact from "./Contact";
import Projects from "./Projects";
 

const Body = () => {
  return (
    <div className=" bg-[#ECCA9C]  dark:bg-zinc-950">
      <Greet/>
      <About/>
      <Projects/>
      {/* <Contact/> */}
    </div>
  );
};

export default Body;
