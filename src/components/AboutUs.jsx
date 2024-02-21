import React from "react";
import Logo from "../img/Full-logo.png";
import BackgroundPhoto from "../img/background-gradient.jpeg";

function AboutUs() {
  return (
    <section
      id="#AboutUs"
      className="py-16 sm:py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundPhoto})` }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-md">
            <img src={Logo} alt="O nas" className="w-full h-auto rounded-lg" />
          </div>

          <div>
            <h2 className="text-3xl  font-bold mb-4">O nas</h2>
            <p className=" leading-relaxed mb-6">
              Jesteśmy studio tatuażu, które stawia na klienta. Naszą główną
              misją jest zapewnienie satysfakcji każdej osoby, która zdecyduje
              się skorzystać z naszych usług. Dlatego też, nasze podejście jest
              całkowicie klientocentryczne. Każdy klient jest dla nas niezwykle
              ważny, a jego zadowolenie to nasz priorytet.
            </p>
            <p className=" leading-relaxed">
              Indywidualne podejście do każdego klienta to nasza dewiza.
              Rozumiemy, że każdy ma inne potrzeby i oczekiwania, dlatego
              dokładamy wszelkich starań, by sprostać oczekiwaniom każdej osoby,
              która przekracza nasz próg. Nie ma dla nas rzeczy niemożliwych,
              każdy problem staramy się rozwiązać na korzyść naszych gości,
              zapewniając im komfort i profesjonalną obsługę na najwyższym
              poziomie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
