import React from "react";
import Logo from "../img/Full-logo.png"; // Zmienione rozszerzenie na .webp
import LogoFallback from "../img/Full-logo.png"; // Oryginał jako fallback
import BackgroundPhoto from "../img/background-gradient.jpg"; // Zmienione rozszerzenie na .webp
import BackgroundPhotoFallback from "../img/background-gradient.jpg"; // Oryginał jako fallback

function AboutUs() {
  // Sprawdzanie wsparcia dla WebP - używa zmiennej ustawionej w index.html
  const backgroundImage = window.supportsWebP
    ? `url(${BackgroundPhoto})`
    : `url(${BackgroundPhotoFallback})`;

  return (
    <section
      id="AboutUs"
      className="py-16 sm:py-32 bg-cover bg-center"
      style={{ backgroundImage }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-md">
            {/* Dodajemy kontener z określonymi proporcjami */}
            <div style={{ aspectRatio: "1/1" }} className="w-full relative">
              <picture>
                <source srcSet={Logo} type="image/webp" />
                <img
                  src={LogoFallback}
                  alt="O nas"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                  width="600" // Przykładowe wymiary - dostosuj do rzeczywistego rozmiaru obrazu
                  height="600" // Przykładowe wymiary - dostosuj do rzeczywistego rozmiaru obrazu
                  style={{ objectFit: "contain" }}
                />
              </picture>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">O nas</h2>
            <p className="leading-loose mb-6">
              Naszą główną misją jest zapewnienie satysfakcji każdej osobie
              która zdecyduje się skorzystać z naszych usług. Szczycimy się
              indywidualnym podejściem do klienta. Rozumiemy, że każdy ma inne
              potrzeby i oczekiwania, dlatego dokładamy wszelkich starań, by
              sprostać oczekiwaniom każdego, kto przekracza nasz próg. Do
              każdego projektu podchodzimy personalnie – Wasze zadowolenie z
              wykonanej pracy to nasz priorytet.
            </p>
            <p className="leading-loose">
              Zapewniamy komfort i profesjonalną usługę na najwyższym poziomie.
              Dokładamy wszelkich starań żeby wasza wizyta była przyjemna, a
              dzieło sztuki zostawione na wasze skórze cieszyło każdego dnia.
              Wszystkie wykonane przez nas projekty są niepowtarzalne.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
