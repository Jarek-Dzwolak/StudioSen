import React, { useState } from "react";
import Modal from "./Modal_Team";
import Jarek_photo from "../img/Jarek.jpg";

function Team() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const people = [
    {
      name: "Jola Akslar",
      role: "Właścicielka / Tatuażysta",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Jarek Dzwolak",
      role: "Współwłaściciel / Mendżer",
      imageUrl: Jarek_photo,
    },
  ];

  return (
    <div id="#Team" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Poznaj naszą ekipe
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center md:justify-start">
          <button
            className="flex items-center justify-center px-4 py-2.5 lg:px-6 lg:py-4 text-lg text-black font-medium rounded-full duration-300 bg-gray-400 hover:bg-gray-600"
            onClick={toggleModal}>
            Dołącz do nas
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
}

export default Team;
