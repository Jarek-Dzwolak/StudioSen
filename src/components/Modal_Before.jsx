import React from "react";

function Modal2({ isOpen, toggleModal }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-lg max-w-lg">
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
                Polecamy kilka dni przed tatuażem wykonać peeling skóry który
                usunie martwe komórki oraz poprawi ukrwienie naskórka.
              </li>
              <li>
                Na 2 dni przed planowanym tatuażem postaraj się zrezygnować z
                alkoholu oraz innych używek. Nie jest wskazane również
                stosowanie leków rozrzedzających krew (np. aspiryna )
              </li>
              <li>
                Dzień przed sesją usuń owłosienie z miejsca, w którym będzie
                wykonywany tatuaż. W razie pominięcia tego kroku, nie martw się
                - owłosienie zostanie ogolone przez tatuatora.
              </li>
              <l1>
                Ubierz się wygodnie, możesz także zabrać ze sobą odzież na
                zmianę, tak abyś mógł komfortowo odsłonić część ciała w której
                ma znaleźć się tatuaż. Na sesję polecamy ubierać ciemną odzież
                oraz taką której nie będzie Ci szkoda w razie zabrudzenia.
              </l1>
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
