import React, { useState, useEffect } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadGallery = () => {
      try {
        // Lista zdjęć od Joli i Juli
        const jolaImages = [
          {
            id: 1,
            title: "Tatuaż kwiatowy",
            artist: "Jola Akslar",
            imageUrl: "https://i.ibb.co/DPJz2r1M/IMG-1847-jpg.jpg",
          },
          {
            id: 2,
            title: "Tatuaż minimalistyczny",
            artist: "Jola Akslar",
            imageUrl: "https://i.ibb.co/932wxYvp/IMG-2239-jpg.jpg",
          },
          {
            id: 3,
            title: "Portret realistyczny",
            artist: "Jola Akslar",
            imageUrl: "https://i.ibb.co/TxzhpLXk/IMG-6877-jpg.jpg",
          },
          {
            id: 4,
            title: "Projekt akwarelowy",
            artist: "Jola Akslar",
            imageUrl: "https://i.ibb.co/ZppSp7sd/IMG-9776-jpg.jpg",
          },
          {
            id: 5,
            title: "Tatuaż artystyczny",
            artist: "Jola Akslar",
            imageUrl: "https://i.ibb.co/n8z0KkKt/IMG-9936.jpg",
          },
        ];

        const juliaImages = [
          {
            id: 6,
            title: "Geometryczny wzór",
            artist: "Julia Piwowar",
            imageUrl: "https://i.ibb.co/SXFgYzPf/Zdjecie1.jpg",
          },
          {
            id: 7,
            title: "Linework delikatny",
            artist: "Julia Piwowar",
            imageUrl: "https://i.ibb.co/yFCThr63/Zdjecie2.jpg",
          },
          {
            id: 8,
            title: "Wzór mandali",
            artist: "Julia Piwowar",
            imageUrl: "https://i.ibb.co/twvJrNf8/Zdjecie3.jpg",
          },
          {
            id: 9,
            title: "Tatuaż figuratywny",
            artist: "Julia Piwowar",
            imageUrl: "https://i.ibb.co/B2rmnqx3/Zdjecie4.jpg",
          },
          {
            id: 10,
            title: "Design nowoczesny",
            artist: "Julia Piwowar",
            imageUrl: "https://i.ibb.co/1fvQM4x2/Zdjecie5.jpg",
          },
        ];

        // Przygotuj zdjęcia do wyświetlenia
        // Wybierz pierwsze zdjęcie od Joli i pierwsze od Juli
        const firstJolaImage = jolaImages[0];
        const firstJuliaImage = juliaImages[0];

        // Przygotuj pozostałe zdjęcia naprzemiennie
        const remainingJolaImages = jolaImages.slice(1);
        const remainingJuliaImages = juliaImages.slice(1);

        const alternatingImages = [];
        const maxLength = Math.max(
          remainingJolaImages.length,
          remainingJuliaImages.length
        );

        for (let i = 0; i < maxLength; i++) {
          if (i < remainingJolaImages.length) {
            alternatingImages.push(remainingJolaImages[i]);
          }
          if (i < remainingJuliaImages.length) {
            alternatingImages.push(remainingJuliaImages[i]);
          }
        }

        // Połącz wszystko razem
        const arrangedImages = [
          firstJolaImage,
          firstJuliaImage,
          ...alternatingImages,
        ];

        setImages(arrangedImages);
        setLoading(false);
      } catch (err) {
        console.error("Error loading gallery images:", err);
        setError("Nie udało się załadować galerii. Spróbuj ponownie później.");
        setLoading(false);
      }
    };

    loadGallery();
  }, []);

  if (error) {
    return (
      <section
        id="Gallery"
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nasze prace
          </h2>
          <p className="mt-4 text-lg text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="Gallery"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Nasze prace
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
          Poznaj portfolio naszych artystów i zainspiruj się do stworzenia
          swojego unikalnego tatuażu
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-16">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-black"></div>
        </div>
      ) : (
        // Specjalny układ dla desktopów - wyświetla większe zdjęcia w pierwszym rzędzie
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pierwsze duże zdjęcie - od Joli */}
          <div className="lg:col-span-2 bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-square rounded-md overflow-hidden mb-4">
              <img
                src={images[0]?.imageUrl}
                alt={`Praca ${images[0]?.artist}`}
                className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                loading="eager"
              />
            </div>
            <p className="text-gray-600 font-medium">
              Artysta: {images[0]?.artist}
            </p>
          </div>

          {/* Drugie duże zdjęcie - od Juli */}
          <div className="lg:col-span-2 bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-square rounded-md overflow-hidden mb-4">
              <img
                src={images[1]?.imageUrl}
                alt={`Praca ${images[1]?.artist}`}
                className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                loading="eager"
              />
            </div>
            <p className="text-gray-600 font-medium">
              Artysta: {images[1]?.artist}
            </p>
          </div>

          {/* Pozostałe zdjęcia w mniejszych rozmiarach */}
          {images.slice(2).map((image) => (
            <div key={image.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="aspect-square rounded-md overflow-hidden mb-4">
                <img
                  src={image.imageUrl}
                  alt={`Praca ${image.artist}`}
                  className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="text-gray-600 font-medium">
                Artysta: {image.artist}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Gallery;
