import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const FloatingButton = () => {
  const location = useLocation();
  const [isPercingPage, setIsPercingPage] = useState(
    location.pathname === "/piercing"
  );

  // Aktualizuj stan przy każdej zmianie lokalizacji
  useEffect(() => {
    setIsPercingPage(location.pathname === "/percing");
  }, [location.pathname]);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Link
        to={isPercingPage ? "/" : "/piercing"}
        className="block px-6 py-3 bg-black text-white rounded-md font-bold shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      >
        {isPercingPage ? "Tatuaże" : "Piercing"}
      </Link>
    </div>
  );
};

export default FloatingButton;
