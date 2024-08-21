import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { ThemeProvider } from "./utils/Theme";


const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Body />
    </ThemeProvider>
  );
};

export default App;
