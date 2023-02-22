import React from "react";
import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";
import Whatsapp from "../images/whatsapp.png";
import Substack from "../images/substack.png";

import Header from "../partials/Header";

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
                    Du findest uns in Braggio, welches zum schönen Parco Val
                    Calanca gehört. Du erreichst das kleine Dorf nur per
                    Seilbahn ab Arvigo.
                    <div className="pt-8">
                      Die genaue Adresse lautet: <br />
                      <br /> Sarah Hell & Curdin Barandun
                      <br />
                      Via Miadi 25
                      <br />
                      6544 Braggio
                      <br />
                    </div>
                    <div className="pt-6">
                      <a className="underline" href="tel:079 756 71 81">
                        079 756 71 81
                      </a>
                      <br />
                      <a className="underline" href="mailto:info@agrimiadi.ch">
                        info@agrimiadi.ch
                      </a>
                    </div>
                    <div className="pt-8 flex flex-grow flex-wrap items-center space-x-4">
                      <a
                        href="https://www.instagram.com/agri.miadi"
                        target="_blank"
                      >
                        <img
                          className="h-8 w-auto ml-2"
                          src={Instagram}
                          alt="Instagram"
                        />
                      </a>
                      <a
                        href="https://www.facebook.com/agrimiadi"
                        target="_blank"
                      >
                        <img
                          className="h-8 w-auto"
                          src={Facebook}
                          alt="Facebook"
                        />
                      </a>
                      <a
                        href="https://chat.whatsapp.com/FG8ccsdBPtYCortlZ5mKAf"
                        target="_blank"
                      >
                        <img
                          className="h-8 w-auto"
                          src={Whatsapp}
                          alt="Whatsapp"
                        />
                      </a>
                      <a href="https://agrimiadi.substack.com/" target="_blank">
                        <img
                          className="h-8 w-auto"
                          src={Substack}
                          alt="Substack"
                        />
                      </a>
                    </div>
                    <div className="pt-8">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d378.9071996146053!2d9.123700669923005!3d46.3075341509156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sch!4v1677068655123!5m2!1sen!2sch"
                        width="600"
                        height="350"
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
