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
        <AboutPercing />
        <HowToBookPercing />
        <PricingPercing />
      </div>
      <Footer />
    </div>
  );
};

export default PercingPage;
