import React from "react";

import Family from "../images/family.jpeg";
import Goats from "../images/goats.jpeg";
import Philosophy from "../images/philosophy.jpeg";
import Chicken from "../images/chicken.jpeg";
import Braggio from "../images/braggio.jpeg";
import HolidayHome from "../images/holidayhome.jpeg";
import FerienhausPdf from "./Ferienhaus.pdf";
function StyledLink(props) {
  return <a className="underline" {...props} />;
}

function PickUpOrder() {
  return (
    <>
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
          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
        />
      </svg>
      <div>
        Abholung /{" "}
        <StyledLink
          href="https://www.post.ch/de/pakete-versenden/express-und-kurier/swiss-express-mond"
          target="_blank"
        >
          Post
        </StyledLink>{" "}
        (23 CHF)
      </div>
    </>
  );
}

function WhatsAppGroupLink() {
  return (
    <StyledLink href="https://chat.whatsapp.com/FG8ccsdBPtYCortlZ5mKAf">
      WhatsApp Gruppe
    </StyledLink>
  );
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
                  wagen.
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
      <section id="we" className="relative">
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
                Sarah, Curdin, Jon, Anna und Sky, das ist unsere kleine Familie.
                Im Oktober 2022 sind wir zu einem Abenteuer aufgebrochen. Das
                Ziel, ein Bergbauernhof in Braggio im wunderschönen Parco Val
                Calanca. Sarah, mit einer Ausbildung als Umweltingenieurin in
                biologischher Landwirtschaft, übernimmt die Betriebsleitung,
                Curdin, der auf einem Hof aufgewachsen ist, jedoch nur eine
                Ausbildung als Softwareentwickler hat, darf als Knecht anheuern
                und Sky, der etwas durchgeknallte Bordercollie, wird als
                Hilfshirte auf Probe eingestellt. Jon und Anna machen die
                Allrounder, oder sowas.
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
      <section id="animals" className="relative">
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
                <br />
                Die drei Eseldamen interessieren sich weder für den krähenden
                Hahn noch für die meckernden Ziegen, denn sie sind sowieso die
                Lautesten auf dem Hof.
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
      <section id="philosophy" className="relative">
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
                Wenn wir unsere Philosophie in einem Wort beschreiben wollen,
                dann wäre das wohl "enkeltaugliche Landwirtschaft". Ok, das sind
                zwei Worte, aber was solls. Entscheidend ist, dass wir nur das
                verwenden, was wir hier haben. Sprich kein Futterzukauf oder
                sowas. Durch die etwas schwierigen Tarnsportbedingungen mit der
                Seilbahn fällt dies einem auch leicht. Wir brauchen das auch
                nicht! Die feinen Kräuter mögen es nämlich steinig!
                <br /> Wir bewirtschaften das Land so, dass wir möglichst wenig
                Spuren hinterlassen. Wir wünschen uns nämlich, dass klein Jon
                und Anna sowie deren Kinder und Kindeskinder auch noch diesen
                wunderschönen Ort hier geniessen können. So verwenden wir ein
                Minimum an Maschinen. Sprich ein Motormäher und ein Tarnsporter.
                Der Rest passiert von Hand.
                <br /> Um das Schlachten der Tiere so stressfrei wie möglich zu
                machen und den Tieren den Transport zu ersparen, schlachten wir
                im hier im Dorf. Das Fleisch wird auch hier verschnitten,
                verpackt und danach verschickt. Alles so lokal wie irgendwie
                möglich.
                {/* dann wollen wir
                ihnen ermöglichen, ihre Bedürfnisse Wir produzieren Obwohl all
                die schönen Blumen nicht ganz unrentabel sind, produzieren wir
                auch noch andere Sachen. Im Konkreten können wir leider nicht
                nur davon leben, . wie auch keine andere Wahl , dann Unser Hof
                liegt auf über 1300 m.ü.M.. Zugänglich ist er nur mit der
                Seilbahn. Es geht entweder hinauf oder hinunter. Futter dazu
                zukaufen ist hier keine Option, die Tiere mit der Seilbahn zu
                transportieren mühsam. Die steilen Hänge sind kaum noch mit
                Maschinen zu befahren. Deshalb essen unsere Tiere nur das Heu
                der eigenen Flächen. Die Heuernte verlangt viel Handarbeit und
                ist kaum mechanisiert. Und unsere Tiere werden im Dorf
                geschlachtet und verarbeitet. */}
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
                vielleicht etwas Feines. Fleisch wird jeweils per{" "}
                <StyledLink
                  href="https://www.post.ch/de/pakete-versenden/express-und-kurier/swiss-express-mond"
                  target="_blank"
                >
                  Swiss-Express «Mond»{" "}
                </StyledLink>
                über Nacht versendet oder kann tiefgefroren abgeholt werden.
                Falls Du Fragen hast, komm doch in usere <WhatsAppGroupLink />{" "}
                oder ruf uns direkt an unter 079 756 71 81.
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
                  <div> 4kg / 8kg</div>
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
                  <PickUpOrder />
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
                  Fleischqualität verändert sich. Das Fleisch wird roter, ist
                  fettarm und erinnert an Wild. Falls Du Interesse an dieser
                  Delikatesse hast, melde Dich beireits im Frühjahr bei uns.
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
                  <div>4kg / 8kg</div>
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
                  <div>37 CHF pro Kilo</div>
                </div>
                <div className="pt-4 flex space-x-2">
                  <PickUpOrder />
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
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-3">
                  Geissenfleisch
                </h4>
                <p className="text-gray-600 text-left">
                  Alles wird verwertet, auch die älteren Tiere. Wir verareiten
                  das Fleisch zu Hack, Trockenfleisch und Würsten. Frag am
                  besten direkt nach.
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
                  <div>nach Wunsch</div>
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
                  <div>Auf Anfrage</div>
                </div>
                <div className="pt-4 flex space-x-2">
                  <PickUpOrder />
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
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#1C274C"
                      stroke-width="1.5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      // d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      d="M10.125 8.875C10.125 7.83947 10.9645 7 12 7C13.0355 7 13.875 7.83947 13.875 8.875C13.875 9.56245 13.505 10.1635 12.9534 10.4899C12.478 10.7711 12 11.1977 12 11.75V13"
                      // d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.
                      // 326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                    />
                    <circle cx="12" cy="16" r="0.5" fill="#1C274C" />
                  </svg>
                  <div>Auf Anfrage</div>
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
                  <div>30 CHF pro Kilo</div>
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
                      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                    />
                  </svg>
                  <div>Abholung / Versand auf Anfrage</div>
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

      <section id="holidayhome" className="relative">
        <div
          className="absolute bg-gray-100 inset-0 pointer-events-none mb-50"
          aria-hidden="true"
        ></div>
        <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-20"></div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-grey-800">FERIEN IN BRAGGIO</h2>
            <p className="text-lg text-left text-gray-800">
              Entspannen im Ferienhaus direkt neben unserem Hof. Bei
              Wanderungen, Spaziergängen, oder beim Horchen der Stille ist der
              stressige Alltag schnell vergessen. Braggio ist autofrei und nur
              mit der Seilbahn zu erreichen. Das Ferienhaus ist einfach
              eingerichtet und bietet Platz für max. 5 Personen. Auf dem Balkon
              kann man eine wunderschöne Aussicht auf die Berglandschaft
              geniessen. Wir freuen uns auf dich!
              <div className="pt-8 flex justify-center">
                <StyledLink
                  href={FerienhausPdf}
                  target="_blank"
                  // download="Ferienhaus-Braggio.pdf"
                >
                  Preise und weitere Informationen
                </StyledLink>
              </div>
              <br />
            </p>
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
          <div className="pt-12 md:pt-20"></div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-grey-800">SEI TEIL DES ABENTEUERS</h2>
            <p className="text-lg text-left text-gray-800">
              Möchtest Du Teil des Abenteuers werden, dann komm in unsere{" "}
              <WhatsAppGroupLink /> und folge uns auf{" "}
              <StyledLink
                href="https://www.instagram.com/agri.miadi"
                target="_blank"
              >
                Instagram
              </StyledLink>{" "}
              oder{" "}
              <StyledLink
                href="https://www.facebook.com/agrimiadi"
                target="_blank"
              >
                Facebook
              </StyledLink>
              . Dort erfährst Du immer alle Neuigkeiten und kannst verfolgen ,
              was gerade läuft auf dem Hof. Willst du vielleicht mal beim «Giro»
              dabei sein, bei der Heuernte mithelfen oder sofort erfahren,
              sobald neue Produkte verfügbar sind? Dann bist du dort genau
              richtig. <br />
              <br />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroHome;
