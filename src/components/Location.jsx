import React from "react";

function Location() {
  // Zaktualizowane dane kontaktowe
  const contactInfo = {
    address: {
      street: "ul. Słoneczna 42C",
      city: "Iskrzynia",
      postalCode: "38-422",
    },
    phone: "536 961 364",
    instagram: "sen.studiotatuazu",
  };

  return (
    <section
      id="Location"
      className="py-12 overflow-hidden"
      style={{ backgroundColor: "rgb(244, 244, 234)" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Lokalizacja</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Znajdziesz nas w Iskrzyni. Zapraszamy do odwiedzenia naszego
            profesjonalnego i przyjaznego studia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Mapa Google */}
          <div className="bg-white rounded-lg shadow-md p-4 h-full">
            <iframe
              className="w-full h-full min-h-[300px] rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1582.0641217647527!2d21.856429!3d49.675791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713ad3b70c9b803%3A0x7b56c4c8b36fe590!2sYour%20Location!5e0!3m2!1sen!2spl!4v1646154810337!5m2!1sen!2spl"
              allowFullScreen
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>

          {/* Informacje kontaktowe */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col justify-center">
            <div className="space-y-8">
              {/* Adres */}
              <div className="flex items-start">
                <div className="bg-black text-white p-3 rounded-full inline-flex mr-4">
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
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Adres</h3>
                  <address className="not-italic text-gray-600">
                    <p>{contactInfo.address.street}</p>
                    <p>
                      {contactInfo.address.postalCode}{" "}
                      {contactInfo.address.city}
                    </p>
                  </address>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${contactInfo.address.street}, ${contactInfo.address.city}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors"
                  >
                    <span className="border-b border-black">
                      Otwórz w Mapach Google
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Telefon */}
              <div className="flex items-start">
                <div className="bg-black text-white p-3 rounded-full inline-flex mr-4">
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Telefon</h3>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="text-black font-medium text-lg hover:text-gray-700 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start">
                <div className="bg-black text-white p-3 rounded-full inline-flex mr-4">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Instagram</h3>
                  <a
                    href={`https://www.instagram.com/${contactInfo.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors"
                  >
                    @{contactInfo.instagram}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
