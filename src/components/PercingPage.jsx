import React from "react";
import Header from "./Header";
import AboutPercing from "./AboutPercing";
import HowToBookPercing from "./HowToBookPercing";
import PricingPercing from "./PricingPercing";
import Footer from "./Footer";

const PercingPage = () => {
  return (
    <div className="bg-[rgb(244,244,234)]">
      <Header />
      <div className="pt-16">
        {" "}
        {/* Dodajemy padding-top, aby treść nie była przykryta przez header */}
        <h1 className="sr-only">Studio Sen - Profesjonalny Percing</h1>
        <AboutPercing />
        <HowToBookPercing />
        <PricingPercing />
      </div>
      <Footer />
    </div>
  );
};

export default PercingPage;
