import React from "react";

function Modal({ isOpen, toggleModal }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-lg max-w-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Zapraszamy do naszego zespołu!
            </h2>
            <p className="text-gray-700">
              Jeśli jesteś zainteresowany dołączeniem do naszej ekipy,
              skontaktuj się z nami pod adresem email@example.com.
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
