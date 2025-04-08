import React, { useState, useEffect } from "react";

const GalleryPiercing = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadGallery = () => {
      try {
        // Lista przykładowych zdjęć piercingu
        const piercingImages = [
          {
            id: 1,
            title: "Smiley",
            imageUrl: "https://i.ibb.co/RdHWDQc/Smiley.jpg",
          },
          {
            id: 2,
            title: "Nostril",
            imageUrl:
              "https://i.ibb.co/k2kmfsmZ/Zdjecie3-fotor-20250408215353.jpg",
          },
          {
            id: 3,
            title: "Lobe",
            imageUrl:
              "https://i.ibb.co/Qvkd6ysv/Zdjecie11-fotor-20250408215838.jpg",
          },
          {
            id: 4,
            title: "Helix",
            imageUrl:
              "https://i.ibb.co/2YYrVhKg/Zdjecie8-fotor-20250408215453.jpg",
          },
          {
            id: 5,
            title: "Lobe",
            imageUrl:
              "https://i.ibb.co/r2txm2Md/Zdjecie5-fotor-20250408162851.png",
          },
          {
            id: 6,
            title: "High Lobe + Lobe",
            imageUrl:
              "https://i.ibb.co/ZRVP9C5W/Zdjecie6-fotor-20250408215639.jpg",
          },
        ];

        setImages(piercingImages);
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
        id="GalleryPiercing"
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
      id="GalleryPiercing"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Nasze prace
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
          Zobacz portfolio naszych prac i zainspiruj się do własnego przekucia
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-16">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-black"></div>
        </div>
      ) : (
        // Responsywny układ galerii
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Pierwsze duże zdjęcie na dwie kolumny (tylko na większych ekranach) */}
          <div className="sm:col-span-2 lg:col-span-1 bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-square rounded-md overflow-hidden mb-4">
              <img
                src={images[0]?.imageUrl}
                alt={images[0]?.title}
                className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                loading="eager"
              />
            </div>
            <p className="text-gray-600 font-medium">{images[0]?.title}</p>
          </div>

          {/* Pozostałe zdjęcia */}
          {images.slice(1).map((image) => (
            <div key={image.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="aspect-square rounded-md overflow-hidden mb-4">
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="text-gray-600 font-medium">{image.title}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default GalleryPiercing;
