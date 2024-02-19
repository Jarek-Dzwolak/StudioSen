import React from "react";
import Header from "../src/components/Header";
import Team from "./components/Team";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import HowToBook from "./components/HowToBook";
import Location from "./components/Location";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <HowToBook />
      <Location />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
