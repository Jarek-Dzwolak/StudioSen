import React, { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";
import CookieConsent from "./components/CookieConsent";
import { initFacebookPixel, disableFacebookPixel } from "./utils/FacebookPixel";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/Auth/ProtectedRoute";

// Leniwe ładowanie komponentów strony głównej
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

// Komponenty systemu zarządzania
const Login = lazy(() => import("./components/Auth/Login"));
const DashboardLayout = lazy(() =>
  import("./components/Dashboard/DashboardLayout")
);
const DashboardHome = lazy(() =>
  import("./components/Dashboard/DashboardHome")
);
const ClientsView = lazy(() => import("./components/Dashboard/ClientsView"));
const PaymentsView = lazy(() => import("./components/Dashboard/PaymentsView"));
const ReportsView = lazy(() => import("./components/Dashboard/ReportsView"));

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
      <AuthProvider>
        <div className="App">
          {/* Komponent do śledzenia zmian strony */}
          <RouteChangeTracker />

          <Routes>
            {/* Strony publiczne */}
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

            {/* Strona logowania */}
            <Route
              path="/login"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <Login />
                </Suspense>
              }
            />

            {/* Zabezpieczone strony panelu administratora */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Suspense fallback={<LoadingFallback />}>
                    <DashboardLayout />
                  </Suspense>
                </ProtectedRoute>
              }
            >
              <Route
                index
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <DashboardHome />
                  </Suspense>
                }
              />
              <Route
                path="clients"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <ClientsView />
                  </Suspense>
                }
              />
              <Route
                path="payments"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <PaymentsView />
                  </Suspense>
                }
              />
              <Route
                path="reports"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <ReportsView />
                  </Suspense>
                }
              />
            </Route>

            {/* Przekierowanie na login, gdy użytkownik próbuje wejść na niezdefiniowaną stronę panelu */}
            <Route path="/dashboard/*" element={<Navigate to="/login" />} />
          </Routes>

          {/* Przycisk zmiany strony dostępny tylko na stronach głównych */}
          <Routes>
            <Route path="/" element={<FloatingButton />} />
            <Route path="/piercing" element={<FloatingButton />} />
          </Routes>

          {/* Banner zgody na pliki cookie */}
          <CookieConsent
            onAccept={handleCookieAccept}
            onDecline={handleCookieDecline}
          />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
