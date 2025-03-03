import Photo from "../img/care.jpeg";

function Care() {
  return (
    <section id="Care" className="py-12 md:flex md:items-center">
      <div className="container mx-auto px-4">
        <div className="grid flex-box grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={Photo}
              alt="Lokalizacja 2"
              className="w-full h-auto rounded-lg "
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Pielegnacja</h2>
            <p className="text-gray-700 leading-relaxed my-1">
              Opatrunek należy nosić około 48 godzin. Przez okres w którym masz
              na sobie opatrunek nie musisz niczym smarować ani przemywać
              tatuażu. Opatrunek jest woodoodporny (można spokojnie brać z nim
              prysznic) i chroni przed czynnikami zewnętrznymi. *Pod opatrunkiem
              może zbierać się tusz i osocze - jest to normalne. *W przypadku
              wystąpienia uczulenia na klej od opatrunku (w miejscu plastra
              skóra robi się czerwona i swędzi ) - należy zdjąć opatrunek
              szybciej.
            </p>
            <ul className=" px-2 list-disc leading-relaxed mb-2 text-gray-700">
              <li>Opatrunek ściągamy delikatnie pod letnią, bieżącą wodą.</li>
              <li>
                Tatuaż przemywamy wodą z szarym mydłem lub płynem do higieny
                intymnej.
              </li>
              <li>
                Osuszamy skórę jednorazowym ręcznikiem papierowym delikatnie
                przykładając go do skóry. Nie używamy ręczników łazienkowym
                (może on gromadzić sporo bakterii)
              </li>
              <li>
                Smarujemy tatuaż cienką warstwą kremu ( można używać bepanthen,
                polecam również kremy przeznaczone typowo do pielęgnacji tatuażu
                - np. Easy tattoo, balm tattoo, krem neba)
              </li>
              <li>
                Zakładamy luźne ubrania w które nie ocierają o świeży tatuaż i
                zapewniają dostęp powietrza . Nie dotykamy świeżego tatuażu
                brudnymi rękami !
              </li>
            </ul>
            <p className="text-gray-700 mb-1">
              <b>
                Po upływie 4-10 dni tatuaż może się łuszczyć , jest to naturalny
                proces gojenia. Nie należy drapać/zrywać strupków, może to
                doprowadzić do powstania ubytków w tatuażu.
              </b>
            </p>
            <div>
              <h2 className="text-xl font-bold mt-6 mb-3">
                Jak często nawilżać tatuaż ?
              </h2>
              <ul className="text-gray-700 leading-relaxed mb-6">
                <li>
                  Tatuaż smarujemy 2-3 razy dziennie przez okres minimum 2
                  tygodnie.
                </li>
                <li>
                  Nie dopuszczamy do przesuszenia skóry ani również do jej
                  rozmoknięcia.
                </li>
                <li>
                  Po zagojeniu tatuażu należy stosować kremy z filtrem spf 50.
                </li>
              </ul>
              <h2 className="text-xl font-bold mt-6 mb-3"> Czego unikać ?</h2>
              <ul className="text-gray-700 leading-relaxed mb-6">
                <li>Przez pierwsze 2-3 dni nie spożywaj alkoholu.</li>
                <li>Przez pierwszy tydzień unikaj wysiłku fizycznego.</li>
                <li>
                  Przez pierwsze 2 tygodnie unikamy długich kąpieli i gorących
                  kąpieli.
                </li>
                <li>
                  Przez 3 tygodnie unikaj słońca, solarium oraz kąpieli w
                  basenach, jeziorach, morzach itp.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Care;
