import React from "react";

function Modal({ isOpen, toggleModal }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-lg max-w-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Dołącz do naszego zespołu!
            </h2>
            <p className="text-gray-700">
              Jeśli masz zapał do pracy i chcesz dołączyć do naszej kreatywnej
              ekipy, nie wahaj się skontaktować z nami. Jesteśmy otwarci na
              wszelkie formy współpracy i czekamy na Twoją inicjatywę.
              Zapraszamy do kontaktu pod adresem <b>email@example.com.</b>
            </p>
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
