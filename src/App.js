import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";

// Leniwe ładowanie komponentów
const AboutUs = lazy(() => import("./components/AboutUs"));
const Gallery = lazy(() => import("./components/Gallery.jsx"));
const HowToBook = lazy(() => import("./components/HowToBook"));
const Location = lazy(() => import("./components/Location"));
const Team = lazy(() => import("./components/Team"));

// Komponenty dla strony percingu
const AboutPercing = lazy(() => import("./components/AboutPercing"));
const HowToBookPercing = lazy(() => import("./components/HowToBookPercing"));
const PricingPercing = lazy(() => import("./components/PricingPercing"));

// Komponent ładujący
const LoadingFallback = () => (
  <div className="flex justify-center items-center min-h-screen bg-[rgb(244,244,234)]">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-black"></div>
  </div>
);

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
  return (
    <Router>
      <div className="App">
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
            path="/percing"
            element={
              <Layout>
                <PercingPage />
              </Layout>
            }
          />
        </Routes>
        <FloatingButton />
      </div>
    </Router>
  );
}

export default App;
