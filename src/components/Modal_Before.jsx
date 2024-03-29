import React from "react";

function Modal2({ isOpen, toggleModal }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="absolute py-4 px-10 mx-9 bg-white rounded-lg w-full max-w-md  overflow-y-auto z-100">
            <div className="absolute top-0 right-0 p-2">
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-700">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Jak przygotować się do sesji tatuażu ?
            </h2>
            <ul className="list-disc">
              <li>
                Unikaj opalania skóry, przesuszona skóra może wpłynąć na gorsze
                gojenie się tatuażu.
              </li>
              <li>
                Warto zadbać o nawilżenie skóry już 2-3 tygodnie wcześniej,
                używaj do tego balsamów nawilżających. Kondycja skóry znacznie
                ułatwi nam pracę. Pamiętaj o odpowiednim nawodnieniu organizmu.
              </li>
              <li>
                Na 2 dni przed planowanym tatuażem postaraj się zrezygnować z
                alkoholu oraz innych używek. Nie jest wskazane również
                stosowanie leków rozrzedzających krew (np. aspiryna )
              </li>
              <li>
                Dzień przed sesją usuń owłosienie z miejsca, w którym będzie
                wykonywany tatuaż.
              </li>
              <li>
                Na sesję polecamy ubierać ciemną odzież oraz taką której nie
                będzie Ci szkoda w razie zabrudzenia.
              </li>
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

export default Modal2;
