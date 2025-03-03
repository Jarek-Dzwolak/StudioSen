import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Team from "./components/Team";
import AboutUs from "./components/AboutUs";
import HowToBook from "./components/HowToBook";
import Location from "./components/Location";
import Care from "./components/Care";
import PercingPage from "./components/PercingPage";
import FloatingButton from "./components/FloatingButton";

// Komponent dla strony głównej, który zawiera wszystkie sekcje
const Home = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <HowToBook />
      <Care />
      <Location />
      <Team />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/percing" element={<PercingPage />} />
        </Routes>
        <FloatingButton />
      </div>
    </Router>
  );
}

export default App;
