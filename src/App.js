import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";

// Leniwe ładowanie komponentów
const AboutUs = lazy(() => import("./components/AboutUs"));
const HowToBook = lazy(() => import("./components/HowToBook"));
const Care = lazy(() => import("./components/Care"));
const Location = lazy(() => import("./components/Location"));
const Team = lazy(() => import("./components/Team"));
const PercingPage = lazy(() => import("./components/PercingPage"));

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
      <Header />
      <h1 className="sr-only">Studio Sen - Profesjonalne Studio Tatuażu</h1>
      <Suspense fallback={<LoadingFallback />}>
        <AboutUs />
        <HowToBook />
        <Care />
        <Location />
        <Team />
      </Suspense>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/percing"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <PercingPage />
              </Suspense>
            }
          />
        </Routes>
        <FloatingButton />
      </div>
    </Router>
  );
}

export default App;
