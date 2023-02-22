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
              <h1 className="h2 mb-4">WIR</h1>
              <p className="text-lg text-left text-gray-600">
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
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 space-y-6">
              <h1 className="h2 mb-4">UNSERE PHILOSOPHIE</h1>
              <p className="text-lg text-left text-gray-600">
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
        <div
          className="absolute inset-0 pointer-events-none mb-50"
          aria-hidden="true"
        ></div>
        <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-20">
            {/* Section header */}

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">UNSERE PRODUKTE</h2>
              <p className="text-lg text-left text-gray-600">
                Wir produzieren nicht in grossen Mengen, dafür mit viel
                Qualität. Falls Dir gefällt, wie und was wir tun, findest Du
                vielleicht etwas Feines.
              </p>
              <h4 className="h4 my-4 text-left">Gitzi Mischpakete</h4>
              <p className="text-lg text-left text-gray-600">
                Die Gitzi werden jeweils im Frühjahr zwischen Februar und Mai
                hier im Dorf geschlachtet. Bis dahin dürfen sie von ihren
                Müttern trinken und sobald sie gross genug sind auch mit auf den
                «Giro» gehen. Die Pakete werden per Express über Nacht
                versendet. Ein Mischpaket besteht aus 10kg Fleisch und kostet
                35.- CHF pro Kilo, Versandkosten inbegriffen. Auf Anfrage sind
                auch 5kg Pakete möglich. Die Gitzi Mischpakete können gerne
                vorbestellt werden.
              </p>
              <h4 className="h4 my-4 text-left">Herbstgitzi Mischpakete</h4>
              <p className="text-lg text-left text-gray-600">
                Im Sommer wachsen die Gitzi nur noch wenig, doch die
                Fleischqualität verändert sich. Dass Fleisch wird röter, ist
                fettarm und erinnert an Wild. Falls Du den Gitzi einen Sommer
                auf der Alp ermöglichen möchtest und Interesse an dieser
                Delikatesse hast, melde Dich bei uns. Da dies noch nicht
                verbreitet ist, können wir dies nur auf Anfrage anbieten.
              </p>
              <h4 className="h4 my-4 text-left">Geissen Mischpakete</h4>
              <p className="text-lg text-left text-gray-600">
                Alles wird verwertet, auch die älteren Tiere, welche wir nicht
                mehr mit gutem Gewissen auf die Alp schicken können, werden hier
                im Dorf geschlachtet und verwertet.
              </p>
              <h4 className="h4 my-4 text-left">Bienen Honig</h4>
              <p className="text-lg text-left text-gray-600">
                Wir haben zwischen drei und sechs Bienenvölker und verkaufen
                Honig nur wenn wir Überschuss haben. Viele Imker gibt es nicht
                in diesem Tal. Falls Du solch eine Rarität willst, musst Du
                schnell sein!
              </p>
              <h4 className="h4 my-4 text-left">Bestellungen</h4>
              <p className="text-lg text-left text-gray-600">
                Da unsere Produkte saisonal verfügbar sind, kündigen wir sie
                jeweils auf unseren Kanälen (WhatsApp & Social Media) an.
                Bestellen kannst Du dann direkt über WhatsApp, per Email oder Du
                rufst uns ganz einfach an.
                <br />
                <br /> Falls Dein Budget etwas knapp ist, Du aber trotzdem gerne
                etwas von unseren Produkten beziehen möchtest, nimm doch Kontakt
                auf.
              </p>
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
          <div className="pt-12 md:pt-20"></div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">SEI TEIL DES ABENTEUERS</h2>
            <p className="text-lg text-left text-gray-600">
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
              richtig.
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
      <section id="story" className="relative">
        <div
          className="absolute inset-0 pointer-events-none mb-50"
          aria-hidden="true"
        ></div>
        <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-20">
            {/* Section header */}

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">UNSERE GESCHICHTE </h2>
              <p className="text-lg text-left text-gray-600">
                Willst du noch mehr über unseren Alltag auf dem Bergbauernhof
                erfahren, dann lies doch unseren Blog (agrimiadi.substack.com).
                An jedem zweiten Sonntag, wird ein neues Kapitel veröffentlicht.
                Du kannst ihn auch als Newsletter abonnieren. Die Autoren
                erlauben sich jedoch auch etwas kreative Freiheit, deshalb nimm
                nicht alles für bare Münze.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroHome;
