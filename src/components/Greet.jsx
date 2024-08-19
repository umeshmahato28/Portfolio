import React, { useEffect } from "react";
import GraphemeSplitter from "grapheme-splitter";
import { TypeAnimation } from "react-type-animation"; // Import TypeAnimation component

const splitter = new GraphemeSplitter();

const Greet = () => {
  const greetings = [
    "Hello",
    "Namaste",
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
//     console.log("Grapheme split example: ",
      //  splitter.splitGraphemes("Hello"));
  }, []);

  return (
    <div className="flex items-center justify-center  h-screen bg-[#ECCA9C] dark:bg-zinc-950">
      <h1 className="text-6xl md:text-8xl font-bold text-zinc-900 dark:text-white">
        <TypeAnimation
          splitter={(str) => {
            console.log("Splitting string: ", str);
            return splitter.splitGraphemes(str);
          }}
          sequence={greetings.flatMap((greeting) => [greeting, 2000])}
      //     style={{ fontSize: "6rem" }}
          repeat={Infinity}
        />
      </h1>
    </div>
  );
};

export default Greet;
