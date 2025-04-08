import React, { useState, useEffect } from "react";

const CookieConsent = ({ onAccept, onDecline }) => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Sprawdź, czy użytkownik już zaakceptował politykę cookie
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Jeśli nie ma zgody w localStorage, pokaż banner
      setVisible(true);
    } else if (consent === "accepted") {
      // Jeśli użytkownik już zaakceptował, wywołaj onAccept
      onAccept();
    }
  }, [onAccept]);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
    if (onAccept) onAccept();
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setVisible(false);
    if (onDecline) onDecline();
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="text-gray-700 md:mr-8">
            <h2 className="text-lg font-semibold mb-2">
              Polityka prywatności i plików cookies
            </h2>
            <p className="text-sm mb-2">
              Strona korzysta z plików cookie w celu realizacji usług zgodnie z{" "}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-black font-medium underline"
              >
                Polityką prywatności
              </button>
              . Możesz określić warunki przechowywania lub dostępu do plików
              cookies w Twojej przeglądarce.
            </p>

            {showDetails && (
              <div className="mt-4 mb-4 p-4 bg-gray-50 rounded-md text-sm max-h-60 overflow-y-auto">
                <h3 className="font-bold mb-2">Szczegółowe informacje:</h3>
                <p>
                  <strong>1. Administrator danych:</strong> Studio Sen z
                  siedzibą w Iskrzyni.
                </p>
                <p className="mt-2">
                  <strong>2. Cele przetwarzania:</strong>
                </p>
                <ul className="list-disc pl-5 mt-1">
                  <li>Realizacja usług i zamówień</li>
                  <li>Kontakt z klientami</li>
                  <li>Marketing własnych produktów i usług</li>
                  <li>Analiza i pomiary statystyczne</li>
                </ul>
                <p className="mt-2">
                  <strong>3. Odbiorcy danych:</strong> Podmioty przetwarzające,
                  w tym dostawcy usług IT, marketingowych oraz płatności
                  elektronicznych.
                </p>
                <p className="mt-2">
                  <strong>4. Prawa osób:</strong> Masz prawo do dostępu do
                  swoich danych, ich sprostowania, usunięcia, ograniczenia
                  przetwarzania, sprzeciwu, przenoszenia danych oraz cofnięcia
                  zgody.
                </p>
                <p className="mt-2">
                  <strong>5. Polityka cookies:</strong> Używamy cookies
                  technicznych (niezbędnych do działania strony), analitycznych
                  (statystyki) oraz marketingowych (remarketing, śledzenie
                  konwersji).
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col sm:flex-row mt-4 md:mt-0 gap-3">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Odrzuć
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Akceptuję
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
