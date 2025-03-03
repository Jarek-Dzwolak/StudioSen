import React from "react";
import uchoPiercing from "../img/ucho-piercing.jpeg";
import twarzPiercing from "../img/twarz-piercing.jpeg";
import pepekPiercing from "../img/pepek-piercing.jpeg";

const PricingPercing = () => {
  return (
    <section
      id="PricingPercing"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Cennik usług
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
          Oferujemy konkurencyjne ceny za profesjonalne usługi piercingu.
          Wszystkie zabiegi wykonywane są z użyciem sterylnych narzędzi i
          wysokiej jakości biżuterii.
        </p>
      </div>

      {/* Główne sekcje przekłuć z grafikami */}
      <div className="mt-16 space-y-20">
        {/* Sekcja Ucho */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={uchoPiercing}
                alt="Miejsca przekłuć ucha"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Przekłucia Ucha
              </h3>
              <p className="text-gray-600 mb-6">
                Oferujemy różnorodne warianty przekłuć ucha, od klasycznego
                przekłucia płatka po bardziej zaawansowane przekłucia chrząstki.
                Każde miejsce ma swoje zalety i różni się czasem gojenia.
              </p>
              <div className="mt-6 border-t pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">Cena:</span>
                  <span className="text-xl font-bold">110-140 zł</span>
                </div>
                <ul className="mt-4 text-gray-600 text-sm space-y-1">
                  <li>* Cena zawiera wysokiej jakości tytanowy kolczyk.</li>
                  <li>
                    * Możliwość założenia droższych kolczyków to oferta
                    indywidualna.
                  </li>
                  <li>
                    * Przy większej liczbie przekłuć u jednej osoby oferujemy
                    atrakcyjne rabaty.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sekcja Twarz */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex flex-row-reverse">
            <div className="md:w-1/2">
              <img
                src={twarzPiercing}
                alt="Miejsca przekłuć twarzy"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Przekłucia Twarzy
              </h3>
              <p className="text-gray-600 mb-6">
                Piercing twarzy to jedna z najbardziej widocznych form
                modyfikacji ciała. Oferujemy profesjonalne przekłucia w różnych
                miejscach twarzy, wykonane z najwyższą starannością i dbałością
                o bezpieczeństwo.
              </p>
              <div className="mt-6 border-t pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">Cena:</span>
                  <span className="text-xl font-bold">120-250 zł</span>
                </div>
                <ul className="mt-4 text-gray-600 text-sm space-y-1">
                  <li>* Cena zawiera wysokiej jakości tytanowy kolczyk.</li>
                  <li>
                    * Możliwość założenia droższych kolczyków to oferta
                    indywidualna.
                  </li>
                  <li>
                    * Przy większej liczbie przekłuć u jednej osoby oferujemy
                    atrakcyjne rabaty.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sekcja Pępek */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={pepekPiercing}
                alt="Przekłucie pępka"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Przekłucie Pępka
              </h3>
              <p className="text-gray-600 mb-6">
                Przekłucie pępka to jeden z najpopularniejszych rodzajów
                piercingu ciała. Wykonujemy je przy użyciu najwyższej jakości
                biżuterii, która jest idealnie dopasowana do Twojego ciała,
                zapewniając komfort i bezpieczeństwo.
              </p>
              <div className="mt-6 border-t pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">Cena:</span>
                  <span className="text-xl font-bold">150 zł</span>
                </div>
                <ul className="mt-4 text-gray-600 text-sm space-y-1">
                  <li>* Cena zawiera wysokiej jakości tytanowy kolczyk.</li>
                  <li>
                    * Możliwość założenia droższych kolczyków to oferta
                    indywidualna.
                  </li>
                  <li>
                    * Przy większej liczbie przekłuć u jednej osoby oferujemy
                    atrakcyjne rabaty.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-4">
          Masz pytania dotyczące naszych usług lub cen?
        </p>
        <a
          href="tel:+48536961364"
          className="rounded-md bg-black px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Skontaktuj się z nami
        </a>
      </div>
    </section>
  );
};

export default PricingPercing;
