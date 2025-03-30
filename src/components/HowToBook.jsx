import React, { useState } from "react";
import BookingPhoto from "../img/booking.jpg";
import Modal from "../components/Modal_Book";
import Modal2 from "./Modal_Before";

function HowToBook() {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  const toggleFirstModal = () => {
    setIsFirstModalOpen(!isFirstModalOpen);
  };

  const toggleSecondModal = () => {
    setIsSecondModalOpen(!isSecondModalOpen);
  };

  const steps = [
    {
      id: 1,
      title: "Skontaktuj się z nami",
      description:
        "Zgłaszasz nam chęć wykonania tatuażu poprzez Instagram @sen.studiotatuazu",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Uzgodnienie terminu",
      description:
        "Szukamy dla Ciebie dogodnego terminu, dopasowanego do Twoich potrzeb.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Przygotowanie projektu",
      description:
        "Kilka dni przed sesją przygotowujemy dla Ciebie projekt oraz podsyłamy go do akceptacji.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Sesja tatuażu",
      description:
        "Spotykamy się w studio, gdzie dobieramy odpowiedni rozmiar wzoru oraz uzgadniamy szczegóły.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Pielęgnacja tatuażu",
      description:
        "Najbliższy miesiąc po sesji wymaga szczególnej pielęgnacji tatuażu.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="HowToBook"
      className="py-12 overflow-hidden"
      style={{ backgroundColor: "rgb(244, 244, 234)" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Jak się umówić?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Aby umówić się na tatuaż, skontaktuj się z naszym studiem tatuażu
            przez Instagram lub Facebooka. Zadbaj o to, abyś podał nam dokładne
            informacje na temat planowanego wzoru oraz dogodnego terminu.
          </p>
        </div>

        {/* Informacje i przyciski */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                W naszym studio możesz liczyć na fachowe doradztwo. Pamiętaj, że
                każdy wzór jest przygotowywany indywidualnie na podstawie Twoich
                preferencji, ale wykończony w charakterystycznym stylu naszego
                tatuażysty.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <button
                  className="flex items-center justify-center px-4 py-2.5 text-black font-medium rounded-full transition duration-300 bg-gray-200 hover:bg-gray-400 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-gray-400"
                  onClick={toggleFirstModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    />
                  </svg>
                  Przeciwwskazania
                </button>
                <button
                  className="flex items-center justify-center px-4 py-2.5 text-black font-medium rounded-full transition duration-300 bg-gray-200 hover:bg-gray-400 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-gray-400"
                  onClick={toggleSecondModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                  Przed sesją
                </button>
              </div>

              <a
                className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors"
                href="https://www.instagram.com/sen.studiotatuazu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @sen.studiotatuazu
              </a>
            </div>
            <div className="relative">
              <img
                src={BookingPhoto}
                alt="Sesja tatuażu"
                className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute -bottom-3 -right-3 bg-black text-white p-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Proces - kroki */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Proces rezerwacji
          </h3>

          {/* Pasek postępu na desktop */}
          <div className="hidden md:block mb-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-1 bg-gray-200"></div>
              </div>
              <div className="relative flex justify-between">
                {steps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300 ${
                      activeStep === step.id
                        ? "bg-black text-white scale-110"
                        : activeStep > step.id
                        ? "bg-gray-600 text-white"
                        : "bg-white border-2 border-gray-300 text-gray-500"
                    }`}
                  >
                    {step.id}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Wyświetlanie kroków - wersja desktop */}
          <div className="hidden md:block">
            <div className="bg-gray-50 p-6 rounded-lg transition-all duration-500">
              <div className="flex items-start mb-4">
                <div className="bg-black text-white p-2 rounded-full mr-4">
                  {steps.find((s) => s.id === activeStep)?.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold">
                    {steps.find((s) => s.id === activeStep)?.title}
                  </h4>
                  <p className="text-gray-600 mt-2">
                    {steps.find((s) => s.id === activeStep)?.description}
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => setActiveStep((prev) => Math.max(prev - 1, 1))}
                  disabled={activeStep === 1}
                  className={`px-4 py-2 rounded transition-colors ${
                    activeStep === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  Poprzedni
                </button>
                <button
                  onClick={() =>
                    setActiveStep((prev) => Math.min(prev + 1, steps.length))
                  }
                  disabled={activeStep === steps.length}
                  className={`px-4 py-2 rounded transition-colors ${
                    activeStep === steps.length
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gray-800 text-white hover:bg-black"
                  }`}
                >
                  Następny
                </button>
              </div>
            </div>
          </div>

          {/* Lista kroków - wersja mobilna */}
          <div className="md:hidden space-y-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-gray-50 p-4 rounded-lg border-l-4 border-black"
              >
                <div className="flex items-center mb-2">
                  <div className="bg-black text-white p-1.5 rounded-full mr-3">
                    {step.icon}
                  </div>
                  <h4 className="font-semibold">{step.title}</h4>
                </div>
                <p className="text-gray-600 text-sm ml-10">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal isOpen={isFirstModalOpen} toggleModal={toggleFirstModal} />
      <Modal2 isOpen={isSecondModalOpen} toggleModal={toggleSecondModal} />
    </section>
  );
}

export default HowToBook;
