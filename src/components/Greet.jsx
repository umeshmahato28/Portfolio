import React, { useEffect } from "react";
import GraphemeSplitter from "grapheme-splitter";
import { TypeAnimation } from "react-type-animation";
import ParticlesComponent from "./ParticlesComponent";
import { useTheme } from "../utils/Theme";

const splitter = new GraphemeSplitter();

const Greet = () => {
  const { isDarkMode } = useTheme();

  const greetings = [
    "नमस्ते", // Hindi
    "নমস্কাৰ", // Assamese
    "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", // Punjabi
    "আদাব", // Bengali
    "નમસ્તે", // Gujarati
    "नमस्कार", // Marathi
    "ਜੈ ਜਿਨੇਂਦ੍ਰ", // Rajasthani/Marwari
    "ସୁପ୍ରଭାତ", // Odia
    "प्रणाम", // Bhojpuri
    "आदाब", // Urdu
    "जय जिनेंद्र", // Jain
    "हरी ओम", // Sanskrit
    "सुप्रभात", // Konkani
  ];

  useEffect(() => {
    // Log split graphemes if needed
  }, []);

  return (
    <div className={` w-full h-96 flex items-center justify-center ${isDarkMode ? "bg-zinc-950" : "bg-[#ECCA9C]"}`}>
      {/* Particles as background */}
      <ParticlesComponent />

      {/* Greeting Text */}
      <div className="absolute z-10 flex items-center">
        <div className="flex text-5xl px-4 md:px-0 md:text-8xl select-none font-bold text-zinc-900 dark:text-white mr-4">
          <TypeAnimation
            splitter={(str) => splitter.splitGraphemes(str)}
            sequence={greetings.flatMap((greeting) => [greeting, 2000])}
            repeat={Infinity}
            cursor=""
          />
          <p className="text-5xl md:text-8xl font-bold text-zinc-900 dark:text-white">!</p>
        </div>
      </div>
    </div>
  );
};

export default Greet;
