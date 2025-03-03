import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const HowToBookPercing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="HowToBookPercing"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Jak umówić się na piercing?
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
          Proces umawiania się na piercing jest prosty i wygodny. Skorzystaj z
          poniższych kroków:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Krok 1 */}
        <div className="relative pl-16 pt-10">
          <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
            1
          </div>
          <h3 className="text-lg font-semibold leading-8 text-gray-900">
            Skontaktuj się z nami
          </h3>
          <p className="mt-2 text-base leading-7 text-gray-600">
            Zadzwoń do nas lub napisz wiadomość aby umówić termin. Odpowiemy
            najpóźniej w przeciągu kilku godzin.
          </p>
        </div>

        {/* Krok 2 */}
        <div className="relative pl-16 pt-10">
          <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
            2
          </div>
          <h3 className="text-lg font-semibold leading-8 text-gray-900">
            Konsultacja
          </h3>
          <p className="mt-2 text-base leading-7 text-gray-600">
            Omówimy z Tobą wszystkie szczegóły, pomożemy wybrać odpowiednią
            biżuterię i odpowiemy na wszelkie pytania dotyczące zabiegu.
          </p>
        </div>

        {/* Krok 3 */}
        <div className="relative pl-16 pt-10">
          <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
            3
          </div>
          <h3 className="text-lg font-semibold leading-8 text-gray-900">
            Zabieg i opieka pozabiegowa
          </h3>
          <p className="mt-2 text-base leading-7 text-gray-600">
            Wykonamy profesjonalny piercing i przekażemy Ci szczegółowe
            informacje dotyczące pielęgnacji miejsca przekłucia.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <button
          onClick={openModal}
          className="rounded-md bg-black px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-all duration-300 transform hover:scale-105"
        >
          Zarezerwuj swój termin już teraz!
        </button>
      </div>

      {/* Modal kontaktowy */}
      <Dialog open={isModalOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-xl">
            <Dialog.Title className="text-xl font-bold text-gray-900 mb-4">
              Umów się na piercing
            </Dialog.Title>

            <div className="mt-4 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  Telefonicznie
                </h3>
                <p className="mt-1 text-gray-600">
                  Zadzwoń pod numer{" "}
                  <a
                    href="tel:509233128"
                    className="font-semibold text-black hover:underline"
                  >
                    536961364
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
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
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                  Instagram
                </h3>
                <p className="mt-1 text-gray-600">
                  Napisz do nas na Instagramie{" "}
                  <a
                    href="https://www.instagram.com/senstudiotatuazu"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-black hover:underline"
                  >
                    @senstudiotatuazu
                  </a>
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Elastyczne terminy
                </h3>
                <p className="text-gray-600">
                  Jesteśmy w stanie indywidualnie dostosować się do Twoich
                  potrzeb - oferujemy terminy również w niedziele oraz w
                  godzinach wieczornych. Po prostu daj nam znać, jaki termin
                  byłby dla Ciebie dogodny!
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
                onClick={closeModal}
              >
                Zamknij
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
};

export default HowToBookPercing;
