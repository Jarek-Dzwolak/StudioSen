import React, { useState } from "react";
import BookingPhoto from "../img/booking.jpeg";
import Modal from "../components/Modal_Book";
import Modal2 from "./Modal_Before";

function HowToBook() {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const toggleFirstModal = () => {
    setIsFirstModalOpen(!isFirstModalOpen);
  };

  const toggleSecondModal = () => {
    setIsSecondModalOpen(!isSecondModalOpen);
  };

  return (
    <section
      id="#HowToBook"
      className="py-12 md:flex md:items-center"
      style={{ backgroundColor: "rgb(244, 244, 234)" }}>
      <div className="container mx-auto px-4">
        <div className="grid flex-box grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:order-first">
            <h2 className="text-3xl font-bold mb-4">Jak się umówić?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Aby umówić się na tatuaż, skontaktuj się z naszym studiem tatuażu
              przez Instagram lub Facebooka. Zadbaj o to, abyś podał nam
              dokładne informacje na temat planowanego wzoru oraz dogodnego
              terminu. W naszym studio możesz liczyć na fachowe doradztwo.
              Pamiętaj, że każdy wzór jest przygotowywany indywidualnie na
              podstawie Twoich preferencji, ale wykończony w charakterystycznym
              stylu naszego tatuażysty.
            </p>

            <div
              className="flex justify-center gap-8 mb-4 
             md:justify-start">
              <button
                className="flex items-center justify-center 
                 px-4 py-2.5 lg:px-6 lg:py-4 text-lg text-black font-medium rounded-full duration-300 bg-gray-400 hover:bg-gray-600"
                onClick={toggleFirstModal}>
                Przeciwwskazania
              </button>
              <button
                className="flex items-center justify-center 
                 px-4 py-2.5 lg:px-6 lg:py-4 text-lg text-black font-medium rounded-full duration-300 bg-gray-400 hover:bg-gray-600"
                onClick={toggleSecondModal}>
                Przed sesją
              </button>
            </div>
            <h3 className="text-xl font-semibold mb-4">Proces:</h3>
            <ul className="list-decimal text-gray-700 leading-relaxed mb-6 pl-4">
              <li>
                Zgłaszasz nam chęć wykonania tatuażu.
                <a
                  className="text-blue-500 hover:text-blue-700 underline"
                  href="https://www.instagram.com/sen.studiotatuazu"
                  target="_blank"
                  rel="noopener noreferrer">
                  @sen.studiotatuazu
                </a>
              </li>
              <li>Szukamy dla Ciebie dogodnego terminu.</li>
              <li>
                Kilka dni przed sesją przygotowujemy dla Ciebie projekt oraz
                podsyłamy go do akceptacji.
              </li>
              <li>
                Spotykamy się w studio, gdzie dobieramy odpowiedni rozmiar wzoru
                oraz uzgadniamy szczegóły.
              </li>
              <li>
                Najbliższy miesiąc po sesji wymaga szczególnej pielęgnacji
                tatuażu.
              </li>
            </ul>
          </div>
          <div className="md:order-last">
            <img
              src={BookingPhoto}
              alt="Lokalizacja 2"
              className="w-full h-auto rounded-lg "
            />
          </div>
        </div>
      </div>
      <Modal isOpen={isFirstModalOpen} toggleModal={toggleFirstModal} />
      <Modal2 isOpen={isSecondModalOpen} toggleModal={toggleSecondModal} />
    </section>
  );
}

export default HowToBook;
