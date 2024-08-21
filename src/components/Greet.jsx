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
    "नमस्ते", // Hindi
    "வணக்கம்", // Tamil
    "నమస్కారం", // Telugu
    "নমস্কাৰ", // Assamese
    "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", // Punjabi
    "നമസ്കാരം", // Malayalam
    "ನಮಸ್ಕಾರ", // Kannada
    "আদাব", // Bengali
    "નમસ્તે", // Gujarati
    "नमस्कार", // Marathi
    "ਜੈ ਜਿਨੇਂਦ੍ਰ", // Rajasthani/Marwari
    "ସୁପ୍ରଭାତ", // Odia
    "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", // Sindhi
    "खोलो साना", // Kashmiri
    "प्रणाम", // Bhojpuri
    "आदाब", // Urdu
    "जय जिनेंद्र", // Jain
    "हरी ओम", // Sanskrit
    "सुप्रभात", // Konkani
  ];
  

  useEffect(() => {
    // Example of logging split graphemes
    // console.log("Grapheme split example: ", splitter.splitGraphemes("Hello"));
  }, []);

  return (
    <div
      className={`absolute w-full h-3/4 flex items-center justify-center ${
        isDarkMode ? "bg-zinc-950" : "bg-[#ECCA9C]"
      }`}
    >
      {/* Particles as background */}
      <div className="absolute top-0 left-0 w-full h-full ">
        <ParticlesComponent darkMode={isDarkMode ? "dark" : "light"} />
      </div>

      {/* Greeting Text */}
      <div className="relative z-1  items-center">
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
