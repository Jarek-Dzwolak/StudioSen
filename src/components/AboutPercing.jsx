import React from "react";

const AboutPercing = () => {
  return (
    <section
      id="AboutPercing"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Dlaczego My?
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
          Specjalizujemy się w profesjonalnym piercingu, stosując najwyższe
          standardy bezpieczeństwa i higieny przy użyciu wysokiej jakości
          biżuterii.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Karta 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-center mb-4">
            <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-black text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"
                />
              </svg>
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-8 text-gray-900">
              Doświadczeni specjaliści
            </h3>
          </div>
          <p className="text-base leading-7 text-gray-600">
            Nasi piercerzy mają wieloletnie doświadczenie i regularnie podnoszą
            swoje kwalifikacje, aby zapewnić najwyższą jakość usług.
          </p>
        </div>

        {/* Karta 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-center mb-4">
            <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-black text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                />
              </svg>
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-8 text-gray-900">
              Najwyższe standardy higieny
            </h3>
          </div>
          <p className="text-base leading-7 text-gray-600">
            Używamy wyłącznie sterylnych, jednorazowych narzędzi i pracujemy w
            środowisku spełniającym najwyższe standardy sanitarne.
          </p>
        </div>

        {/* Karta 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-center mb-4">
            <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-black text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 1-.659 1.591L9.5 14.5m3.25-11.396c.251.023.501.05.75.082m-.75-.082a24.301 24.301 0 0 0-4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L9.5 14.5m0 0h2.25m-2.25 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                />
              </svg>
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-8 text-gray-900">
              Bezpieczna biżuteria
            </h3>
          </div>
          <p className="text-base leading-7 text-gray-600">
            Stosujemy wyłącznie biżuterię wykonaną z materiałów najwyższej
            jakości, które minimalizują ryzyko reakcji alergicznych i zapewniają
            komfort noszenia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPercing;
