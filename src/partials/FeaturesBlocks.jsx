import React from "react";
import Sky from "../images/sky.jpeg";
import Bees from "../images/bees.jpeg";
import Chicken from "../images/chicken.jpeg";

function FeaturesBlocks() {
  return (
    <>
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
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Was zum Teufel tuen wir hier?</h2>
              <p className="text-xl text-left text-gray-600">
                Diese Frage wird sich unsere kleine Familie wohl noch einige
                Male fragen, aber was hat sie eigentlich in dieses, für
                schweizer Verhältnisse wilde Tal verschlagen? Würde man Sky
                fragen, dann würde er mit einem bestimmten "Damit wir keine
                anderen dieser miesen Köter mehr treffen müssen" antworten. Denn
                obwhohl er selbst einer ist, kann er andere Hunde auf den Tod
                nicht ausstehen. Die sind die Pest! Schnaubt er wenn er darauf
                angesprochen wird und will nichts mehr von seinen Artgenossen
                hören. Das einzige was er will ist, andere Tiere vor sich
                hertreiben. Oder wandern ist auch ganz ok, Hauptsache Bewegung!
              </p>
              <img
                className="mx-auto rounded py-6"
                src={Sky}
                width="768"
                alt="Sky"
              />
              <p className="text-xl text-left text-gray-600">
                Aber wir schweifen ab. Interessanter wäre es zu wissesn, was
                Sarah und Curdin dazu angetrieben hat sich im Calancatal nieder
                zulassen. Wer dieses Tal kennt, und das sind wohl nicht gerde
                viele, weiss dass es in diesem Tal vor allem eines ist, steil
                und felsig. Und aus einem, wohl nicht für jeden
                nachvollziehbaren Grund, reizt die Beiden genau das. Eine rauhe
                Umgebung, viel Handarbeit, viel Schweiss und Leidenschaf umgeben
                von kleinen, ziemlich frechen und gerne schmatzenden
                Wiederkäuern.
              </p>
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
              <h1 className="h2 mb-4">Wovon leben wir denn?</h1>
              <p className="text-xl text-left text-gray-600">
                Ja diese Frage stellen sich in der Landwirtschaft leider immer
                mehr und natürlich auch Sarah und Curdin. Und dann noch in
                solcher Lage! Nur von Luft und Liebe können sie leider auch
                nicht leben. Glücklicherweise gibt es an diesen kargen, mageren
                Hängen etwas sehr wertvolles was ihnen auch sehr am Herzen
                liegt. Und ihr Wert wird mit Sicherheit steigen. Also eigentlich
                eine sichere Geldanlage. Wir sprechen von ihr, der
                sagenumwogenen, viel diskutierten und zu höchster Wichtigkeit
                emporerhobenen Biodiversität. Sie zu erhalten und zu fördern ist
                eine der wichtigsten, und leugnen wir es nicht, auch auch
                Ertagsbringendsten Tätigkeiten in solch einer Umgebung. Aber nur
                davon reicht es nicht zum leben, weshalb sie auch Gizi und
                Geissenfleisch verkaufen sowie in die Milchverarbeitung
                einsteigen wollen. Dazu noch ein paar Bienenvölker, ein paar
                Hühner und wer weiss was sonst nocht kommt. Kreativ muss man
                heutzutage sein, und das ist unsere Familie allemale!
              </p>
              <div className="md:grid md:grid-cols-2">
                <img
                  className="md:max-w-none mx-auto rounded"
                  src={Bees}
                  width="380"
                  // height="462"
                  alt="Features bg"
                />
                <img
                  className="md:max-w-none mx-auto rounded"
                  src={Chicken}
                  width="380"
                  // height="462"
                  alt="Features bg"
                />
              </div>
              <p className="text-xl text-left text-gray-600">
                Nun denn, so ist dieses Abenteuer gestartet, und falls du wissen
                willst wie die Geschichte weitergeht, oder du Interesse an ihren
                Produkten hast, dann folge ihnen am besten auf Socil Media oder
                schau in ihre Whatsapp Gruppe rein. Sie würden sich siche
                freuen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturesBlocks;
