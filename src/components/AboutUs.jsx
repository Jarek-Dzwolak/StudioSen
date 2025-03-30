import React from "react";
import Logo from "../img/Full-logo.png";
import BackgroundPhoto from "../img/background-gradient.jpg";

function AboutUs() {
  return (
    <section id="AboutUs">
      {/* Górna sekcja z tłem i dużym logo */}
      <div
        className="py-24 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${BackgroundPhoto})` }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto mb-8">
            <img
              src={Logo}
              alt="Studio Sen Logo"
              className="w-full h-auto mx-auto"
              loading="eager"
              width="400"
              height="400"
            />
          </div>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">O nas</h2>
            <p className="leading-loose mb-8">
              Naszą główną misją jest zapewnienie satysfakcji każdej osobie
              która zdecyduje się skorzystać z naszych usług. Szczycimy się
              indywidualnym podejściem do klienta. Rozumiemy, że każdy ma inne
              potrzeby i oczekiwania, dlatego dokładamy wszelkich starań, by
              sprostać oczekiwaniom każdego, kto przekracza nasz próg.
            </p>
          </div>
        </div>
      </div>

      {/* Dolna sekcja z kafelkami */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Karta 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-center mb-4">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-black text-white">
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
                    d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                  />
                </svg>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-8 text-gray-900">
                Pasja i zaangażowanie
              </h3>
            </div>
            <p className="text-base leading-7 text-gray-600">
              Do każdego projektu podchodzimy personalnie – Wasze zadowolenie z
              wykonanej pracy to nasz priorytet. Wszystkie wykonane przez nas
              projekty są niepowtarzalne.
            </p>
          </div>

          {/* Karta 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-center mb-4">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-black text-white">
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
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-8 text-gray-900">
                Unikalne projekty
              </h3>
            </div>
            <p className="text-base leading-7 text-gray-600">
              Szczycimy się indywidualnym podejściem do klienta. Rozumiemy, że
              każdy ma inne potrzeby i oczekiwania, dlatego dokładamy wszelkich
              starań, by sprostać oczekiwaniom każdego, kto przekracza nasz
              próg.
            </p>
          </div>

          {/* Karta 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-center mb-4">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-black text-white">
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
                    d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                  />
                </svg>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-8 text-gray-900">
                Komfort i profesjonalizm
              </h3>
            </div>
            <p className="text-base leading-7 text-gray-600">
              Zapewniamy komfort i profesjonalną usługę na najwyższym poziomie.
              Dokładamy wszelkich starań żeby wasza wizyta była przyjemna, a
              dzieło sztuki zostawione na wasze skórze cieszyło każdego dnia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
