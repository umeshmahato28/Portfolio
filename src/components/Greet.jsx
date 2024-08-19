import React, { useState, useEffect } from "react";


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
    "こんにちは (Konnichiwa)",
    "안녕하세요 (Annyeonghaseyo)",
    "Здравствуйте (Zdravstvuyte)",
    "مرحبا (Marhaban)",
    "Γειά σας (Yia sas)",
    "Merhaba",
    "Habari",
    "สวัสดี (Sawasdee)",
    "Xin chào",
    "שלום (Shalom)",
    "Hallo",
    "Hej",
  ];

  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % greetings.length;
        setCurrentGreeting(greetings[nextIndex]);
        return nextIndex;
      });
    }, 1000); // Change greeting every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [greetings]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">
        <span className="typing-animation">{currentGreeting}</span>
      </h1>
    </div>
  );
};

export default Greet;
