import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom"; // Dodajemy import useLocation
import Logo from "../img/Logo.png";

// Nawigacja dla strony głównej (tatuaże)
const tattooNavigation = [
  { name: "O nas", href: "#AboutUs" },
  { name: "Jak się umówić", href: "#HowToBook" },
  { name: "Pielęgnacja", href: "#Care" },
  { name: "Lokalizacja", href: "#Location" },
  { name: "Nasza ekipa", href: "#Team" },
];

// Nawigacja dla strony percingu
const percingNavigation = [
  { name: "O nas", href: "#AboutPercing" },
  { name: "Jak się umówić", href: "#HowToBookPercing" },
  { name: "Cennik", href: "#PricingPercing" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // Hook do sprawdzania aktualnej ścieżki
  const isPercingPage = location.pathname === "/percing";

  // Wybierz odpowiednią nawigację w zależności od aktualnej strony
  const navigation = isPercingPage ? percingNavigation : tattooNavigation;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = () => {
    if (mobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  return (
    <div className="bg-white">
      <header
        className="absolute inset-x-0 top-0"
        style={{ backgroundColor: "rgb(244, 244, 234)" }}
      >
        <nav
          className="flex items-center justify-between p-3 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="w-14"
                src={Logo}
                alt="Company Logo"
                loading="lazy"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.href.substring(1)} // Usuwamy # z href dla ScrollLink
                smooth={true}
                className="text-sm font-semibold hover:gray-400 leading-6 cursor-pointer p-1 rounded-3xl hover:bg-gray-50 text-gray-900 menu-link"
                onClick={handleLinkClick}
              >
                {item.name}
              </ScrollLink>
            ))}
            {/* Link do przeciwnej strony */}
            <Link
              to={isPercingPage ? "/" : "/percing"}
              className="text-sm font-semibold hover:gray-400 leading-6 cursor-pointer p-1 rounded-3xl hover:bg-gray-50 text-gray-900 menu-link"
            >
              {isPercingPage ? "Tatuaże" : "Percing"}
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={toggleMobileMenu}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5 ">
                <span className="sr-only">Your Company</span>
                <img
                  className="w-14"
                  src={Logo}
                  alt="Company Logo"
                  loading="lazy"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <ScrollLink
                      key={item.name}
                      to={item.href.substring(1)} // Usuwamy # z href dla ScrollLink
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 menu-link"
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </ScrollLink>
                  ))}
                  {/* Link do przeciwnej strony */}
                  <Link
                    to={isPercingPage ? "/" : "/percing"}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 menu-link"
                    onClick={handleLinkClick}
                  >
                    {isPercingPage ? "Tatuaże" : "Percing"}
                  </Link>
                </div>
                <div className="py-6"></div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};

export default Header;
