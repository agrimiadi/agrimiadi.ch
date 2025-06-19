import React from "react";
import ImageGallery from "react-image-gallery";
import GoatInTree from "../images/goat-in-tree.jpeg";
import Brina from "../images/goats/Brina.jpg";
import Blacky from "../images/goats/Blacky.jpg";
import Carlotta from "../images/goats/Carlotta.jpg";
import Chocolat from "../images/goats/Chocolat.jpg";
import Cosma from "../images/goats/Cosma.jpg";
import Erica from "../images/goats/Erica.jpg";
import Fina from "../images/goats/Fina.jpg";
import Finetta from "../images/goats/Finetta.jpg";
import Grischeli from "../images/goats/Grischeli.jpg";
import Grischetta from "../images/goats/Grischetta.jpg";
import Marletta from "../images/goats/Marletta.jpg";
import Matador from "../images/goats/Matador.jpg";
import Merlo from "../images/goats/Merlo.jpg";
import Okapi from "../images/goats/Okapi.jpg";
import Ombra from "../images/goats/Ombra.jpg";
import Peppa from "../images/goats/Peppa.jpg";
import Pigna from "../images/goats/Pigna.jpg";
import Robinia from "../images/goats/Robinia.jpg";
import Roesli from "../images/goats/Roesli.jpg";
import Rukka from "../images/goats/Rukka.jpg";
import Runa from "../images/goats/Runa.jpg";
import Stracciatella from "../images/goats/Stracciatella.jpg";
import Strella from "../images/goats/Strella.jpg";
import Tuepfli from "../images/goats/Tuepfli.jpg";
import Vasta from "../images/goats/Vasta.jpg";
import Vendetta from "../images/goats/Vendetta.jpg";
import Zabra from "../images/goats/Zabra.jpg";

import Header from "../partials/Header";

const images = [
  { original: Blacky },
  { original: Brina },
  { original: Carlotta },
  { original: Chocolat },
  { original: Cosma },
  { original: Erica },
  { original: Fina },
  { original: Finetta },
  { original: Grischeli },
  { original: Grischetta },
  { original: Marletta },
  { original: Matador },
  { original: Merlo },
  { original: Okapi },
  { original: Ombra },
  { original: Peppa },
  { original: Pigna },
  { original: Robinia },
  { original: Roesli },
  { original: Rukka },
  { original: Runa },
  { original: Stracciatella },
  { original: Strella },
  { original: Tuepfli },
  { original: Vasta },
  { original: Vendetta },
  { original: Zabra },
];

export function GoatSponsorship() {
  const recipient = "info@agrimiadi.com";
  const subject = "Geissenpatenschaft Anfrage";

  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}`;

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Hero content */}
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Section header */}
              <div className="text-center pb-5 md:pb-5">
                <h1
                  className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                  data-aos="zoom-y-out"
                >
                  MINI SCHLAUI GEISS
                </h1>
                <div className="max-w-3xl mx-auto">
                  <p
                    className="text-xl text-left text-gray-600 mb-8"
                    data-aos="zoom-y-out"
                    data-aos-delay="150"
                  >
                    Die Berglandwirtschaft steht unter Druck – doch ohne sie
                    verliert unsere Alpenlandschaft ihr Gesicht. Ziegen leisten
                    dabei Erstaunliches: Sie erhalten Lebensräume, fördern
                    Biodiversität und bewahren unsere Kulturlandschaft.
                  </p>
                </div>
                <p
                  className="text-xl text-center text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Unterstütze deine Geiss mit einer Patenschaft bei ihrer
                  Arbeit.
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <div
                  className="relative flex justify-center mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="450"
                >
                  <div className="flex flex-col justify-center">
                    <img
                      className="mx-auto rounded"
                      src={GoatInTree}
                      width="600"
                      alt="Hero"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative">
          <div
            className="absolute inset-0 bg-gray-100 pointer-events-none mb-50"
            aria-hidden="true"
          ></div>
          <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-12 md:pt-20">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 space-y-6">
                <h1 className="h2 mb-4 text-gray-800">
                  MIT DEINER PATENSCHAFT UNTERSTÜTZT DU
                </h1>

                <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
                  <div className="relative flex flex-col p-6 bg-white rounded shadow-xl h-full">
                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-3">
                      Vielfalt statt Verbuschung
                    </h4>
                    <p className="text-gray-600 text-center">
                      Mit unseren Ziegen fördern wir ganz gezielt die
                      Biodiversität. Statt Wald wachsen seltene Pflanzen und es
                      schwirren rar gewordene Insekten.
                    </p>
                  </div>
                  <div className="relative flex flex-col p-6 bg-white rounded shadow-xl h-full">
                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-3">
                      Traditionelle Berglandwirtschaft
                    </h4>
                    <p className="text-gray-600 text-center">
                      Steile Hänge, viel Handarbeit, ökologische Bewirtschaftung
                      – unser Hof liegt auf 1300 m ü.M. in Braggio und ist nur
                      per Seilbahn erreichbar.
                    </p>
                  </div>
                </div>

                <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
                  <div className="relative flex flex-col p-6 bg-white rounded shadow-xl h-full">
                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-3">
                      Artgerechte Ziegenhaltung
                    </h4>
                    <p className="text-gray-600 text-center">
                      Tägliche Tour durch Wald und Wiesen, tierfreundlicher
                      Stall, Sommer auf der Alp - das ist Ziegenwohl, wie es
                      sein soll.
                    </p>
                  </div>
                  <div className="relative flex flex-col p-6 bg-white rounded shadow-xl h-full">
                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-3">
                      Nachhaltige Kreisläufe
                    </h4>
                    <p className="text-gray-600 text-center">
                      Unsere Ziegen fressen ausschließlich hofeigenes Futter –
                      alles biologisch und regional.
                    </p>
                  </div>
                </div>

                <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
                  <div className="relative flex flex-col p-6 bg-white rounded shadow-xl h-full">
                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-3">
                      Echte Handarbeit
                    </h4>
                    <p className="text-gray-600 text-center">
                      Wir machen alles selbst: Heuen, Käsen, Misten, Schlachten.
                      Ein echter Familien- betrieb mit Herz und Hand.
                    </p>
                  </div>
                  <div className="relative flex flex-col p-6 bg-white rounded shadow-xl h-full">
                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-3">
                      Lokale Spezialitäten
                    </h4>
                    <p className="text-gray-600 text-center">
                      Gitzifleisch ist eine typische Delikatesse der Alpenregion
                      – zart, mild, traditionell.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative">
          <div
            className="absolute inset-0 pointer-events-none mb-50"
            aria-hidden="true"
          ></div>
          <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-12 md:pt-20">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 space-y-6">
                <h2 className="h2 mb-4">WIE WERDE ICH PATE</h2>
                <div className="max-w-xl mx-auto">
                  <p className="text-lg text-left text-gray-600">
                    <ul className="list-decimal">
                      <li style={{ marginBottom: "1rem" }}>
                        Wähle ein passendes{" "}
                        <StyledLink href="#models">
                          Patenschaftsmodell
                        </StyledLink>
                      </li>
                      <li style={{ marginBottom: "1rem" }}>
                        <StyledLink href="#goats">
                          Finde Deine schlaue Geiss
                        </StyledLink>
                        , welche Du für mindestens 3 Jahre begleiten willst.
                      </li>
                      <li style={{ marginBottom: "1rem" }}>
                        Schreib uns eine Mail an{" "}
                        <StyledLink href={mailtoLink}>
                          info@agrimiadi.ch
                        </StyledLink>{" "}
                        oder kontaktiere uns per Telefon unter 0797567181{" "}
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="models" className="relative">
          <div
            className="absolute inset-0 bg-gray-100 pointer-events-none mb-50"
            aria-hidden="true"
          ></div>
          <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-12 md:pt-20">
              <div className="max-w-3xl mx-auto pb-12 md:pb-20 space-y-6">
                <h1 className="h2 mb-4 text-gray-800 text-center">
                  Patenschaftsmodelle
                </h1>

                <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
                  <div className=" relative flex flex-col p-6 bg-white rounded shadow-xl h-full items-center">
                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-3">
                      Margerite
                    </h4>
                    <div className="text-gray-600 w-full px-5">
                      <ul className="list-disc">
                        <li style={{ marginBottom: "0.5rem" }}>
                          Du erhältst ein persönliches Zertifikat mit Bild.
                        </li>
                        <li style={{ marginBottom: "0.5rem" }}>
                          Du wirst über Deine Geiss und das Geschehen rund herum
                          informiert
                        </li>
                        <li style={{ marginBottom: "0.5rem" }}>
                          Du darfst sie in Braggio besuchen – und gerne auch da
                          sein zum Helfen, Ausspannen oder Wandern
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4 flex space-x-2 justify-center">
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
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                      </svg>
                      <div>350 CHF pro Jahr</div>
                    </div>
                  </div>
                  <div className="relative flex flex-col p-6 bg-white rounded shadow-xl h-full">
                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-3 text-center">
                      Enzian
                    </h4>
                    <div className="text-gray-600 w-full px-5">
                      <ul className="list-disc">
                        <li style={{ marginBottom: "0.5rem" }}>
                          Alles vom Modell Margerite
                        </li>

                        <li style={{ marginBottom: "0.5rem" }}>
                          Nach Wunsch erhältst du jährlich ein
                          Herbstgitzi-Fleischpaket (ca. 8-9 kg)
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4 flex space-x-2 justify-center">
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
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                      </svg>
                      <div>750 CHF pro Jahr</div>
                    </div>
                    <div className="text-sm mt-1 text-center">
                      (Warenwert ca 400 CHF)
                    </div>
                  </div>
                </div>
                <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
                  <div className="relative flex flex-col p-6 bg-white rounded shadow-xl h-full">
                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-3 text-center">
                      Arnika
                    </h4>
                    <div className="text-gray-600 w-full px-5">
                      <ul className="list-disc">
                        <li style={{ marginBottom: "0.5rem" }}>
                          Alles vom Modell Margerite
                        </li>

                        <li style={{ marginBottom: "0.5rem" }}>
                          Nach Wunsch erhältst du jährlich ein halbes
                          Herbstgitzi-Fleischpaket (ca. 4-9 kg){" "}
                        </li>
                        <li>eine Übernachtung im Ferienhaus für 2 Personen </li>
                      </ul>
                    </div>
                    <div className="pt-4 flex space-x-2 justify-center">
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
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                      </svg>
                      <div>750 CHF pro Jahr</div>
                    </div>
                    <div className="text-sm mt-1 text-center">
                      (Warenwert ca 400 CHF)
                    </div>
                  </div>
                  <div className="relative flex flex-col p-6 bg-white rounded shadow-xl h-full">
                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-3 text-center">
                      Feuerlilie
                    </h4>
                    <div className="text-gray-600 w-full px-5">
                      <ul className="list-disc">
                        <li style={{ marginBottom: "0.5rem" }}>
                          Alles vom Modell Margerite
                        </li>

                        <li style={{ marginBottom: "0.5rem" }}>
                          Nach Wunsch erhältst du jährlich Post mit Leckereien
                          vom Hof
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4 flex space-x-2 justify-center">
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
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                      </svg>
                      <div>1000 CHF pro Jahr</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="goats" className="relative">
          <div
            className="absolute inset-0 pointer-events-none mb-50"
            aria-hidden="true"
          ></div>
          <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-12 md:pt-20">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 space-y-6">
                <h2 className="h2 mb-4">FINDE DEINE SCHLAUE GEISS</h2>
                <div className="max-w-xl mx-auto">
                  <div className="max-w-3xl mx-auto">
                    <ImageGallery
                      items={images}
                      showThumbnails={false}
                      showBullets={false}
                      showPlayButton={false}
                      showFullscreenButton={false}
                      lazyLoad
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function StyledLink(props) {
  return <a className="underline" {...props} />;
}
