import React from "react";

import Family from "../images/family.jpeg";
import Goats from "../images/goats.jpeg";
import Philosophy from "../images/philosophy.jpeg";
import Chicken from "../images/chicken.jpeg";
import Braggio from "../images/braggio.jpeg";

function StyledLink(props) {
  return <a className="underline" {...props} />;
}

function HeroHome() {
  return (
    <>
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
                  Wo die Ziegen wandern dürfen, die Heuernte noch ein Handwerk
                  ist und sich nur die Wagemutigen mit der Seilbahn hinauf
                  getrauen.
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
                    className="mx-auto rounded"
                    src={Braggio}
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
        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div
          className="absolute inset-0 bg-gray-100 pointer-events-none mb-50"
          aria-hidden="true"
        ></div>
        <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 space-y-6">
              <h1 className="h2 mb-4 text-gray-800">WIR</h1>
              <p className="text-lg text-left text-gray-800">
                Was uns nicht liegt, ist Langeweile. Was uns gut liegt, sind
                Abenteuer. Deshalb und wegen unseres unverbesserlichen
                Optimismus zogen wir im Oktober 2022 nach Braggio im Calancatal,
                um einen Bauernhof zu bewirtschaften. Region neu, Arbeit neu,
                Sprache neu, alles neu. Ein Stall voll mit Ziegen und einem Bock
                warteten auf uns, Curdin und Sarah. Mit dabei haben wir unsere
                mehr oder weniger tatkräftigen Helfer Jon und Sky. Jon, der
                gerade erst zur Welt kam und sich noch nicht sicher ist, ob er
                auch will, was seine Eltern wollen. Sky, der Bordercollie,
                findet es super in Braggio. Hier trifft er nur selten
                Artgenossen, diese seien nämlich die Pest.
              </p>
              <img
                className="md:max-w-none mx-auto rounded"
                src={Family}
                width="380"
                // height="462"
                alt="Features bg"
              />
              <p className="text-xl text-left text-gray-600"></p>
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
            {/* Section header */}

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 space-y-6">
              <h2 className="h2 mb-4">UNSERE TIERE</h2>
              <p className="text-lg text-left text-gray-600">
                Unsere Ziegen sind kunterbunt, was ihre Farben, aber auch ihre
                Gemüter anbelangt. Sie tragen alle Hörner und leben das ganze
                Jahr mit ihrem Bock unter einem Dach. Wobei soviel sind sie gar
                nicht unter Dach, denn jeden Tag dürfen sie auf ihren «Giro»
                gehen. Sie wandern über Wiesen und durch Wälder und essen dabei,
                was ihnen am besten schmeckt. Und im Sommer verweilen sie in den
                wunderschönen Alpgebieten des Calancatals. Finden sie im Winter
                draussen nicht mehr genug, kriegen sie Heu vom Feinsten. Doch
                die Ziegen sind weit in der Unterzahl gegenüber den
                Abertausenden von Bienen, welche sich über die feinen Blüten
                freuen und auf ihren weiten Flügen auch mal über die Köpfe der
                gackernden Hühner fliegen.
              </p>
              <div className="md:grid md:grid-cols-2">
                <img
                  className="md:max-w-none mx-auto rounded"
                  src={Chicken}
                  width="378"
                  // height="462"
                  alt="Der Hahn präsentiert sich"
                />
                <img
                  className="md:max-w-none mx-auto rounded"
                  src={Goats}
                  width="380"
                  // height="462"
                  alt="Eine Ziege schaut"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div
          className="absolute inset-0 bg-gray-100 pointer-events-none mb-50"
          aria-hidden="true"
        ></div>
        <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 space-y-6">
              <h1 className="h2 mb-4 text-gray-800">UNSERE PHILOSOPHIE</h1>
              <p className="text-lg text-left text-gray-800">
                Unser Hof liegt auf über 1300 m.ü.M.. Zugänglich ist er nur mit
                der Seilbahn. Es geht entweder hinauf oder hinunter. Futter dazu
                zukaufen ist hier keine Option, die Tiere mit der Seilbahn zu
                transportieren mühsam. Die steilen Hänge sind kaum noch mit
                Maschinen zu befahren. Deshalb essen unsere Tiere nur das Heu
                der eigenen Flächen. Die Heuernte verlangt viel Handarbeit und
                ist kaum mechanisiert. Und unsere Tiere werden im Dorf
                geschlachtet und verarbeitet.
              </p>
              <img
                className="md:max-w-none mx-auto rounded"
                src={Philosophy}
                width="380"
                // height="462"
                alt="Sky im Heu"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="relative">
        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div
          className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none"
          aria-hidden="true"
        ></div>
        {/* <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div> */}
        <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
              <h2 className="h2 mb-4 text-grey-800">UNSERE PRODUKTE</h2>
              <p className="text-lg text-gray-800">
                Wir produzieren nicht in grossen Mengen, dafür mit viel
                Qualität. Falls Dir gefällt, wie und was wir tun, findest Du
                vielleicht etwas Feines. Fleisch wird jeweils per Express über
                Nacht versendet. Die Liefergebühren sind im Preis inbegriffen.
              </p>
            </div>

            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
              {/* 1st item */}
              <div className="relative flex flex-col p-6 bg-white rounded shadow-xl h-full">
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-3">
                  Gitzi Mischpakete
                </h4>
                <p className="text-gray-600 text-left">
                  Die Gitzi werden jeweils im Frühjahr zwischen Februar und Mai
                  hier im Dorf geschlachtet. Bis dahin dürfen sie von ihren
                  Müttern trinken und sobald sie gross genug sind auch mit auf
                  den «Giro» gehen.
                </p>
                <div className="pt-4 flex space-x-2">
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
                      d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                    />
                  </svg>
                  <div>5kg / 10kg</div>
                </div>
                <div className="pt-4 flex space-x-2">
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
                  <div>35 CHF pro Kilo</div>
                </div>
                <div className="pt-4 flex space-x-2">
                  {/* <svg
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
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg> */}
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
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <div>Vorbestellung möglich</div>
                </div>
              </div>

              <div className="relative flex flex-col p-6 bg-white rounded shadow-xl h-full">
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-3 text-left">
                  Herbstgitzi Mischpakete
                </h4>
                <p className="text-gray-600 text-left">
                  Im Sommer wachsen die Gitzi nur noch wenig, doch die
                  Fleischqualität verändert sich. Dass Fleisch wird röter, ist
                  fettarm und erinnert an Wild. Falls Du Interesse an dieser
                  Delikatesse hast, melde Dich bei uns. Da dies noch nicht
                  verbreitet ist, können wir dies nur auf Anfrage anbieten.
                </p>
                <div className="pt-4 flex space-x-2">
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
                      d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                    />
                  </svg>
                  <div>5kg / 10kg</div>
                </div>
                <div className="pt-4 flex space-x-2">
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
                  <div>30 CHF pro Kilo</div>
                </div>
                <div className="pt-4 flex space-x-2">
                  {/* <svg
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
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                    />
                  </svg>

                  <div>Nur auf Anfrage</div>
                </div>
              </div>

              <div className="relative flex flex-col p-6 bg-white rounded shadow-xl h-full">
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-3">
                  Geissen Mischpakete
                </h4>
                <p className="text-gray-600 text-left">
                  Alles wird verwertet, auch die älteren Tiere, welche wir nicht
                  mehr mit gutem Gewissen auf die Alp schicken können, werden
                  hier im Dorf geschlachtet und verwertet.
                </p>
                <div className="pt-4 flex space-x-2">
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
                      d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                    />
                  </svg>
                  <div>auf Wunsch</div>
                </div>
                <div className="pt-4 flex space-x-2">
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
                  <div>20 CHF pro Kilo</div>
                </div>
                <div className="pt-4 flex space-x-2">
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
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>Momentan nicht verfügbar</div>
                </div>
              </div>
              <div className="relative flex flex-col p-6 bg-white rounded shadow-xl h-full">
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-3">
                  Bienen Honig
                </h4>
                <p className="text-gray-600 text-left">
                  Wir haben zwischen drei und sechs Bienenvölker und verkaufen
                  Honig nur wenn wir Überschuss haben. Viele Imker gibt es nicht
                  in diesem Tal. Falls Du solch eine Rarität willst, musst Du
                  schnell sein!
                </p>
                <div className="pt-4 flex space-x-2">
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
                      d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                    />
                  </svg>
                  <div>250g / 500g / 1kg</div>
                </div>
                <div className="pt-4 flex space-x-2">
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
                  <div>18 CHF pro Kilo</div>
                </div>
                <div className="pt-4 flex space-x-2">
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
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>Momentan nicht verfügbar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div
          className="absolute bg-gray-100 inset-0 pointer-events-none mb-50"
          aria-hidden="true"
        ></div>
        <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-20"></div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-grey-800">SEI TEIL DES ABENTEUERS</h2>
            <p className="text-lg text-left text-gray-800">
              Möchtest Du Teil des Abenteuers werden, dann komm in unsere{" "}
              <StyledLink href="https://chat.whatsapp.com/FG8ccsdBPtYCortlZ5mKAf">
                WhatsApp Gruppe
              </StyledLink>{" "}
              und folge uns auf{" "}
              <StyledLink href="https://www.instagram.com/agrimiadi">
                Instagram
              </StyledLink>{" "}
              oder{" "}
              <StyledLink href="https://www.facebook.com/agrimiadi">
                Facebook
              </StyledLink>
              . Dort erfährst Du immer alle Neuigkeiten und kannst verfolgen ,
              was gerade läuft auf dem Hof. Willst du vielleicht mal beim «Giro»
              dabei sein, bei der Heuernte mithelfen oder sofort erfahren,
              sobald neue Produkte verfügbar sind? Dann bist du dort genau
              richtig. <br />
              <br />
              Willst du noch mehr über unseren Alltag auf dem Bergbauernhof
              erfahren, dann lies doch unseren{" "}
              <StyledLink href="https://agrimiadi.substack.com" target="_blank">
                {" "}
                Blog
              </StyledLink>{" "}
              (agrimiadi.substack.com). An jedem zweiten Sonntag, wird ein neues
              Kapitel veröffentlicht. Du kannst ihn auch als Newsletter
              abonnieren. Die Autoren erlauben sich jedoch auch etwas kreative
              Freiheit, deshalb nimm nicht alles für bare Münze.
            </p>
            {/* <div className="md:grid md:grid-cols-2">
                <img
                  className="md:max-w-none mx-auto rounded"
                  src={Chicken}
                  width="380"
                  // height="462"
                  alt="Features bg"
                />
                <img
                  className="md:max-w-none mx-auto rounded"
                  src={Goats}
                  width="380"
                  // height="462"
                  alt="Features bg"
                />
              </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroHome;
