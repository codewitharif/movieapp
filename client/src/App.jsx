import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <p className="text-3xl font-bold underline">hello</p>
    </div>
  );
};

export default App;
