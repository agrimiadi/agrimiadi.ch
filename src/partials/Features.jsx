import React from "react";
import Cows from "../images/cows.jpeg";
import Goats from "../images/goats.jpeg";

function Features() {
  return (
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
            <h1 className="h2 mb-4">Wie alles begann</h1>
            <p className="text-xl text-left text-gray-600">
              Wir befinden uns in Trin Dorf im Jahre 2022. Es herrscht
              herlichstes Oktober Wetter und von Schnee ist noch weit und breit
              nichts zu sehen. Trotzdem ist es höchste Zeit aufzubrechen.
              Niemand weiss, wie lange die Strasse auf Braggio noch offen ist,
              und alles mit der Seilbahn transportieren will dann wirklich
              niemand. So packen also unsere Protagonisten all ihre Sachen um in
              ihr neues Abenteuer aufzubrechen. Nicht ganz ohne Wehmut lassen
              sie ihr altbekanntest Leben zurück. Doch wo etwas endet fängt
              etwas neues an und so fahren sie los. Obwohl sie ihr Hab und Gut
              auf das Minimum reduziert haben müssen sie doch bald etwas
              fluchend festellen, dass Umziehen immer noch eine ziemlich üble
              Sache ist. Eine gute Motivation nicht aufzugeben, witzelt Sarah -
              nochmals ziehen wir nicht um! Doch dies wird definitiv nicht die
              grösste Herausforderung sein die unsere Familie bewältigen muss.
              Denn da warten 27 Ziegen mit einem Bock, 4 Kühe, 7 Hühner und ein
              stolzer Hahn auf sie und es wäre doch etwas übertrieben zu sagen
              sie hätten viel Erfahrung mit irgendeinem dieser Tiere.
            </p>
            <div className="md:grid md:grid-cols-2">
              <img
                className="md:max-w-none mx-auto rounded"
                src={Cows}
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
            </div>
            <p className="text-xl text-left text-gray-600">
              Doch wer nun denkt sie lassen sich davor abschrecken wird bald
              lernen, dass sie nicht so schnell unterzukriegen sind. Sie mussten
              schon einige Herausforderungen meistern in den Jahren als sie auf
              dem Betrieb von Curdin's Schwester Flurina mitgearbeitet haben
              oder damals auf der Alp Calasa, als sie mit blossen Händen ihre
              Schafe gegen ein Wolfsrudel verteidigt. Ok, das mit dem Wolfsrudel
              ist vielleicht etwas übertrieben aber wer kann schon das Gegenteil
              beweisen? Wie auch immer, sie haben sicher noch viel zu lernen und
              einige Schwierigkeiten zu meistern. Fehler werden passieren und
              das ein oder andere Fluchwort wird fallen. Aber sie haben schon
              einiges geschafft in ihrem Leben und es wäre doch gelacht würden
              sie das nicht auch schaffen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
