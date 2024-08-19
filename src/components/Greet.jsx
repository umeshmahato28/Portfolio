import React, { useEffect, useState } from "react";
import GraphemeSplitter from "grapheme-splitter";
import { TypeAnimation } from "react-type-animation";
import ParticlesComponent from "./ParticlesComponent";
import { useTheme } from "../utils/Theme";

const splitter = new GraphemeSplitter();

const Greet = () => {
  // Use context or state to manage dark mode
  const { isDarkMode } = useTheme();

  const greetings = [
    "Hello",
    "Namaste",
    "Sat Sri Akal",
    "Namaskār",
    "Vaṇakkam",
    "Salaam",
    "Namaskāraṁ",
    "Hola",
    "Bonjour",
    "Hallo",
    "Ciao",
    "Olá",
    "你好 (Nǐ hǎo)",
    "Konnichiwa",
    "Marhaban",
    "Yia sas",
    "Merhaba",
    "Habari",
    "Sawasdee",
    "Xin chào",
    "Shalom",
    "Hej",
  ];

  useEffect(() => {
    // Example of logging split graphemes
    // console.log("Grapheme split example: ", splitter.splitGraphemes("Hello"));
  }, []);

  return (
    <div
      className={`absolute w-full h-5/6 flex items-center justify-center ${
        isDarkMode ? "bg-zinc-950" : "bg-[#ECCA9C]"
      }`}
    >
      {/* Particles as background */}
      <ParticlesComponent darkMode={isDarkMode ? "dark" : "light"} />

      {/* Greeting Text */}
      <div className="relative z-10  items-center">
        <div className="flex text-5xl px-4 md:px-0 md:text-8xl font-bold text-zinc-900 dark:text-white mr-4">
          <TypeAnimation
            splitter={(str) => splitter.splitGraphemes(str)}
            sequence={greetings.flatMap((greeting) => [greeting, 2000])}
            repeat={Infinity}
            cursor="" // Replaces the default cursor with an exclamation mark
          />
          <p className="text-5xl md:text-8xl font-bold text-zinc-900 dark:text-white">
            !
          </p>
        </div>

      </div>
      
    </div>
  );
};

export default Greet;
