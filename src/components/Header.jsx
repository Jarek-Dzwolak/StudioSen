import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../img/Logo.png"; // Zmieniona wersja na WebP (musisz utworzyć ten plik)
import LogoFallback from "../img/Logo.png"; // Oryginalna wersja jako fallback

// Nawigacja dla strony głównej (tatuaże)
const tattooNavigation = [
  { name: "O nas", href: "AboutUs" },
  { name: "Jak się umówić", href: "HowToBook" },
  { name: "Pielęgnacja", href: "Care" },
  { name: "Lokalizacja", href: "Location" },
  { name: "Nasza ekipa", href: "Team" },
];

// Nawigacja dla strony percingu
const percingNavigation = [
  { name: "O nas", href: "AboutPercing" },
  { name: "Jak się umówić", href: "HowToBookPercing" },
  { name: "Cennik", href: "PricingPercing" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isPercingPage = location.pathname.includes("/piercing");

  // Wybierz odpowiednią nawigację w zależności od aktualnej strony
  const navigation = isPercingPage ? percingNavigation : tattooNavigation;

  // Efekt do scrollowania do elementu po załadowaniu strony, jeśli w URL jest hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // Usuń znak # z hash
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Małe opóźnienie, żeby dać czas na wyrenderowanie komponentów
    }
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (sectionId) => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }

    // Sprawdź czy jesteśmy na właściwej stronie
    if (
      (isPercingPage && location.pathname !== "/piercing") ||
      (!isPercingPage && location.pathname !== "/")
    ) {
      // Przekierowanie na właściwą stronę z hash
      const targetPath = isPercingPage ? "/piercing" : "/";
      navigate(`${targetPath}#${sectionId}`);
      return;
    }

    // Jesteśmy na właściwej stronie, przewijamy do elementu
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(
        `Element o ID ${sectionId} nie został znaleziony na stronie`
      );
    }
  };

  return (
    <div className="bg-white">
      <header
        className="absolute inset-x-0 top-0 z-10"
        style={{ backgroundColor: "rgb(244, 244, 234)" }}
      >
        <nav
          className="flex items-center justify-between p-3 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* Logo z określonymi wymiarami */}
              <div style={{ width: "56px", height: "56px" }}>
                {" "}
                {/* w-14 = 3.5rem = ~56px */}
                <picture>
                  <source srcSet={Logo} type="image/webp" />
                  <img
                    className="w-full h-full"
                    src={LogoFallback}
                    alt="Company Logo"
                    loading="eager" /* Zmieniono na eager dla logo w headerze */
                    width="56"
                    height="56"
                  />
                </picture>
              </div>
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
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-sm font-semibold hover:gray-400 leading-6 cursor-pointer p-1 rounded-3xl hover:bg-gray-50 text-gray-900 menu-link"
              >
                {item.name}
              </button>
            ))}
            {/* Link do przeciwnej strony */}
            <Link
              to={isPercingPage ? "/" : "/piercing"}
              className="text-sm font-semibold hover:gray-400 leading-6 cursor-pointer p-1 rounded-3xl hover:bg-gray-50 text-gray-900 menu-link"
            >
              {isPercingPage ? "Tatuaże" : "Piercing"}
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
              <Link
                to="/"
                className="-m-1.5 p-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Your Company</span>
                {/* Logo z określonymi wymiarami w menu mobilnym */}
                <div style={{ width: "56px", height: "56px" }}>
                  <picture>
                    <source srcSet={Logo} type="image/webp" />
                    <img
                      className="w-full h-full"
                      src={LogoFallback}
                      alt="Company Logo"
                      loading="eager"
                      width="56"
                      height="56"
                    />
                  </picture>
                </div>
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
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item.href)}
                      className="-mx-3 block w-full text-left rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 menu-link"
                    >
                      {item.name}
                    </button>
                  ))}
                  {/* Link do przeciwnej strony */}
                  <Link
                    to={isPercingPage ? "/" : "/piercing"}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 menu-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {isPercingPage ? "Tatuaże" : "Piercing"}
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
