import React from "react";
import Logo from "../img/Full-logo.png";
import BackgroundPhoto from "../img/background-gradient.jpeg";

function AboutUs() {
  return (
    <section
      id="#AboutUs"
      className="py-16 sm:py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundPhoto})` }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-md">
            <img src={Logo} alt="O nas" className="w-full h-auto rounded-lg" />
          </div>

          <div>
            <h2 className="text-3xl  font-bold mb-4">O nas</h2>
            <p className=" leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className=" leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
