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
                      <div className="flex space-x-3 align-middle">
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
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                          />
                        </svg>

                        <a className="underline" href="tel:079 756 71 81">
                          079 756 71 81
                        </a>
                      </div>
                      <div className="flex space-x-3 align-top pt-3">
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
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          />
                        </svg>

                        <a
                          className="underline"
                          href="mailto:info@agrimiadi.ch"
                        >
                          info@agrimiadi.ch
                        </a>
                      </div>
                    </div>
                    <div className="pt-8 flex flex-grow flex-wrap items-center space-x-4">
                      <a
                        href="https://www.instagram.com/agri.miadi"
                        target="_blank"
                      >
                        <img
                          className="h-8 w-auto"
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
