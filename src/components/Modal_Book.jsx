import React from "react";

function Modal({ isOpen, toggleModal }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-lg max-w-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Przeciwwskazania do wykonania tatuażu:
            </h2>
            <ul className="list-disc">
              <li>Osłabienie, grypa, gorączka, angina</li>
              <li>Zażywanie antybiotyków</li>
              <li>Epilepsja (padaczka)</li>
              <li>Choroby serca i układu krążeniowego</li>
              <li>Stany zapalne skóry (bakteryjne, wirusowe, grzybicze)</li>
              <li>Stany pooperacyjne</li>
              <li>HIV, HCV, HBV</li>
              <li>Opalona skóra</li>
              <li>Rany na ciele, które są w trakcie gojenia</li>
              <li>Ciąża i karmienie piersią</li>
              <li>Łuszczyca</li>
              <li>Cukrzyca</li>
            </ul>
            <button
              className="mt-6 inline-block px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-600"
              onClick={toggleModal}>
              Zamknij
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
