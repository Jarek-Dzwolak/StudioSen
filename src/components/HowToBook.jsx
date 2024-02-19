import React from "react";
import BookingPhoto from "../img/booking.jpeg";
import { useState } from "react";
import Modal from "../components/Modal_Book";

function HowToBook() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section
      id="#HowToBook"
      className="pt-12 md:flex md:items-center"
      style={{ backgroundColor: "rgb(244, 244, 234)" }}>
      <div className="container mx-auto px-4">
        <div className="grid flex-box grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:order-first">
            <h2 className="text-3xl font-bold mb-4">Jak się umówić?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <div className="flex justify-center mb-4 md:justify-start">
              <button
                className="flex items-center justify-center 
                 px-4 py-2.5 lg:px-6 lg:py-4 text-lg text-black font-medium rounded-full duration-300 bg-gray-400 hover:bg-gray-600"
                onClick={toggleModal}>
                Zastrzeżenia
              </button>
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Proces umawiania się:
            </h3>
            <ol className="list-decimal text-gray-700 leading-relaxed mb-6 pl-4">
              <li>Krok pierwszy procesu umawiania się.</li>
              <li>Krok drugi procesu umawiania się.</li>
              <li>Krok trzeci procesu umawiania się.</li>
              <li>Krok czwarty procesu umawiania się.</li>
              <li>Krok piąty procesu umawiania się.</li>
            </ol>
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
      <Modal isOpen={isModalOpen} toggleModal={toggleModal} />
    </section>
  );
}

export default HowToBook;
