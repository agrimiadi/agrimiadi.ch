import React from "react";
import HolidayHome from "../images/holidayhome.jpeg";

import Header from "../partials/Header";

function Contact() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Hero content */}
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Section header */}
              <div className="text-center pb-12 md:pb-16">
                <h1
                  className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-10"
                  data-aos="zoom-y-out"
                >
                  Ferien in Braggio
                </h1>
                <div>
                  <div
                    className="relative flex justify-center mb-8"
                    data-aos="zoom-y-out"
                    data-aos-delay="450"
                  >
                    <div className="flex flex-col justify-center">
                      <img
                        className="mx-auto rounded"
                        src={HolidayHome}
                        width="600"
                        alt="Ferienhaus"
                      />
                    </div>
                  </div>
                </div>
                <div className="max-w-3xl mx-auto">
                  <div className="text-lg text-left text-gray-600">
                    Entspannen im Ferienhaus direkt neben unserem Hof. Bei
                    Wanderungen, Spaziergängen, oder beim Horchen der Stille ist
                    der stressige Alltag schnell vergessen. Braggio ist autofrei
                    und nur mit der Seilbahn zu erreichen. Das Ferienhaus ist
                    einfach eingerichtet und bietet Platz für max. 5 Personen.
                    Auf dem Balkon kann man eine wunderschöne Aussicht auf die
                    Berglandschaft geniessen. Wir freuen uns auf dich!
                    <div className="pt-8">
                      <a
                        style={{ color: "blue", textDecoration: "underline" }}
                        href="./Ferienhaus.pdf"
                        download="Ferienhaus-Braggio"
                      >
                        Preise und weitere Informationen
                      </a>
                    </div>
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

export default Contact;
