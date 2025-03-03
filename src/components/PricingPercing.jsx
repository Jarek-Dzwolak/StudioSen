import React from "react";

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

      {/* Tutaj możesz umieścić swoje zdjęcie/grafikę z cennikiem */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <p className="text-center text-gray-600 mb-8">
          Poniżej prezentujemy ceny najpopularniejszych zabiegów. Szczegółowy
          cennik dostępny jest w naszym studiu.
        </p>

        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-medium">Przekłucie ucha (płatek)</span>
            <span className="font-bold">80-150 zł</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-medium">Przekłucie nosa</span>
            <span className="font-bold">100-180 zł</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-medium">Przekłucie brwi</span>
            <span className="font-bold">120-200 zł</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-medium">Przekłucie wargi</span>
            <span className="font-bold">120-200 zł</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-medium">Przekłucie pępka</span>
            <span className="font-bold">150-250 zł</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-medium">Przekłucie języka</span>
            <span className="font-bold">150-220 zł</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Inne przekłucia</span>
            <span className="font-bold">od 100 zł</span>
          </div>
        </div>

        <p className="text-gray-600 mt-8 text-sm">
          * Cena zawiera przekłucie oraz podstawową biżuterię. Istnieje
          możliwość wybrania bardziej ekskluzywnej biżuterii za dodatkową
          opłatą.
        </p>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">
          Masz pytania dotyczące naszych usług lub cen?
        </p>
        <a
          href="tel:+48123456789"
          className="rounded-md bg-black px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Skontaktuj się z nami
        </a>
      </div>
    </section>
  );
};

export default PricingPercing;
