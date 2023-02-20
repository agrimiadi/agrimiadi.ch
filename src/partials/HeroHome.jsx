import React from "react";

import FamilyImage from "../images/family-miadi.jpeg";

function HeroHome() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Agri Miadi
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-left text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Eine etwas verrückte Geschichte einer Familie die ins abgelegene
                Calancatal zieht um ihren Traum vom eigenen Bauernbetrieb im
                Berggebiet zu verwirklichen. In den Hauptrollen sehen wir -
                Sarah als Betriebsleiterin, den getreuen Knecht und Ehemann
                Curdin, den kleinen Jon und nicht zu vergessen den etwas
                durchgeknallten Bordercollie Sky.
              </p>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div
              className="relative flex justify-center mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <div className="flex flex-col justify-center">
                <img
                  className="mx-auto"
                  src={FamilyImage}
                  width="768"
                  alt="Hero"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
