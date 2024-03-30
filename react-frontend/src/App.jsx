import { useState } from "react";
import Heading from "./components/Heading";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import JokeDisplay from "./components/JokeDisplay";

function App() {
  return (
    <>
      <Heading />
      <Banner />
      <JokeDisplay />
      <Footer />
    </>
  );
}

export default App;
