import React from "react";
import Greet from "./Greet";
import About from "./About";
import Contact from "./Contact";


const Body = () => {
  return (
    <div className="bg-zinc-950">
      <Greet/>
      <About/>
      <Contact/>
    </div>
  );
};

export default Body;
