import React, { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";
import CookieConsent from "./components/CookieConsent";
import { initFacebookPixel, disableFacebookPixel } from "./utils/FacebookPixel";

// Leniwe ładowanie komponentów
const AboutUs = lazy(() => import("./components/AboutUs"));
const Gallery = lazy(() => import("./components/Gallery.jsx"));
const HowToBook = lazy(() => import("./components/HowToBook"));
const Location = lazy(() => import("./components/Location"));
const Team = lazy(() => import("./components/Team"));

// Komponenty dla strony percingu
const AboutPercing = lazy(() => import("./components/AboutPercing"));
const GalleryPiercing = lazy(() => import("./components/GalleryPiercing"));
const HowToBookPercing = lazy(() => import("./components/HowToBookPercing"));
const PricingPercing = lazy(() => import("./components/PricingPercing"));

// Komponent ładujący
const LoadingFallback = () => (
  <div className="flex justify-center items-center min-h-screen bg-[rgb(244,244,234)]">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-black"></div>
  </div>
);

// Komponent dla śledzenia zmiany strony (dla Facebook Pixel)
const RouteChangeTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Przy każdej zmianie lokalizacji uruchamiaj event PageView
    if (window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [location]);

  return null;
};

// Komponent dla strony głównej
const Home = () => {
  return (
    <>
      <h1 className="sr-only">Studio Sen - Profesjonalne Studio Tatuażu</h1>
      <Suspense fallback={<LoadingFallback />}>
        <AboutUs />
        <Gallery />
        <HowToBook />
        <Location />
        <Team />
      </Suspense>
    </>
  );
};

// Komponent dla strony percingu
const PercingPage = () => {
  return (
    <>
      <h1 className="sr-only">Studio Sen - Profesjonalny Percing</h1>
      <Suspense fallback={<LoadingFallback />}>
        <AboutPercing />
        <GalleryPiercing />
        <HowToBookPercing />
        <PricingPercing />
      </Suspense>
    </>
  );
};

// Komponent layoutu, który zawiera Header i Footer
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="pt-16 bg-[rgb(244,244,234)]">{children}</div>
      <Footer />
    </>
  );
};

function App() {
  // Facebook Pixel ID - zmień na swój własny identyfikator
  const FB_PIXEL_ID = "618876082077967";

  // Obsługa zgody na pliki cookie
  const handleCookieAccept = () => {
    // Inicjalizuj Facebook Pixel gdy użytkownik zaakceptuje cookies
    initFacebookPixel(FB_PIXEL_ID);
  };

  const handleCookieDecline = () => {
    // Wyłącz Facebook Pixel gdy użytkownik odrzuci cookies
    disableFacebookPixel();
  };

  useEffect(() => {
    // Sprawdź, czy użytkownik już wcześniej zaakceptował cookies
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "accepted") {
      initFacebookPixel(FB_PIXEL_ID);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Komponent do śledzenia zmian strony */}
        <RouteChangeTracker />

        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/piercing"
            element={
              <Layout>
                <PercingPage />
              </Layout>
            }
          />
        </Routes>
        <FloatingButton />

        {/* Banner zgody na pliki cookie */}
        <CookieConsent
          onAccept={handleCookieAccept}
          onDecline={handleCookieDecline}
        />
      </div>
    </Router>
  );
}

export default App;
