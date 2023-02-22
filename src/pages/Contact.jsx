import React from "react";
import { Link } from "react-router-dom";

import Header from "../partials/Header";
import Banner from "../partials/Banner";

function Contact() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Hero content */}
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Section header */}
              <div className="text-center pb-12 md:pb-16">
                <h1
                  className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                  data-aos="zoom-y-out"
                >
                  Kontakt
                </h1>
                <div className="max-w-3xl mx-auto">
                  <div className="text-lg text-left text-gray-600">
                    Du findest uns in Braggio welches zum schönen Parco val
                    Calanca gehört. Das kleine Dorf ist nur mit der Seilbahn von
                    Arvigo aus zu erreichen. Wir wohnen an der Via Miadi 25
                    welche ganz am nördlichen Ende des Dorfes liegt.
                    <div className="pt-8">
                      Die genaue Adresse lautet: <br />
                      <br /> Sarah Hell & Curdin Barandun
                      <br />
                      Via Miadi 25
                      <br />
                      6544 Braggio
                      <br />
                    </div>
                    <div className="pt-8">
                      Telefonisch erreichst du uns unter{" "}
                      <a className="underline" href="tel:079 756 71 81">
                        079 756 71 81
                      </a>
                      , unsere Email Adresse lautet{" "}
                      <a className="underline" href="mailto:info@agrimiadi.ch">
                        info@agrimiadi.ch
                      </a>
                    </div>
                    <div className="pt-8">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d378.9071996146053!2d9.123700669923005!3d46.3075341509156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sch!4v1677068655123!5m2!1sen!2sch"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
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
