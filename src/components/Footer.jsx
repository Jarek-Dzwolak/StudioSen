import React from "react";

const Footer = () => {
  return (
    <footer
      className="py-6 text-black-300"
      style={{ backgroundColor: "rgb(244, 244, 234)" }}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} StudioSen. Wszelkie prawa
            zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
