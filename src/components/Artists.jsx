import React from "react";
import Jola_photo from "../img/Jola_photo.jpeg";
import Julia_photo from "../img/JuliaProfilowe.jpg";

const Artists = () => {
  const artists = [
    {
      name: "Jola Akslar",
      role: "Tatuażysta",
      imageUrl: Jola_photo,
      bio: "Specjalizuje się w tatuażach w stylu realistycznym i neotraditional. Z pasją tworzy unikalne projekty dostosowane do indywidualnych potrzeb klientów.",
      experience: "5 lat doświadczenia",
    },
    {
      name: "Julia Piwowar",
      role: "Tatuażysta / Piercer",
      imageUrl: Julia_photo,
      bio: "Łączy umiejętności w dziedzinie tatuażu i piercingu. Jej minimalistyczne i geometryczne projekty cieszą się dużym uznaniem wśród klientów.",
      experience: "3 lata doświadczenia",
    },
  ];

  return (
    <section
      id="Artists"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Nasi artyści
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
          Poznaj talenty stojące za wyjątkowymi projektami w naszym studio
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        {artists.map((artist) => (
          <div
            key={artist.name}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={artist.imageUrl}
                  alt={artist.name}
                  className="w-full h-full object-cover object-center"
                  style={{ aspectRatio: "1/1" }}
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="text-xl font-bold text-gray-900">
                  {artist.name}
                </h3>
                <p className="text-sm font-medium text-indigo-600 mb-4">
                  {artist.role} • {artist.experience}
                </p>
                <p className="text-gray-600">{artist.bio}</p>
                <div className="mt-6 flex gap-4">
                  <button className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800">
                    Zobacz portfolio
                  </button>
                  <button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Umów się
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Artists;
