import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const ImprintPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      <Header />

      <div className="section">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg
              className="absolute top-20 right-0 w-96 h-96"
              viewBox="0 0 400 400"
            >
              <polygon
                points="200,50 350,150 350,250 200,350 50,250 50,150"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="container relative z-10">
            <div className="text-center">
              <h1 className="mb-6">
                <span className="">Impressum</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Imprint Content */}
        <section className="section bg-bg-subtle">
          <div className="container">
            <div className="bg-white rounded-lg p-8 border border-neutral-200 space-y-8 text-sm leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Allgemeine Daten
                </h2>

                <div className="bg-slate-50 p-6 rounded-lg mb-8">
                  <p className="text-slate-700 leading-relaxed">
                    <strong>ACENCIA GmbH</strong>
                    <br />
                    Fasanenweg 5<br />
                    55546 Hackenheim
                    <br />
                    <br />
                    <strong>Geschäftsführer:</strong> Herr Uwe Weimert
                    <br />
                    <br />
                    <strong>Telefon:</strong> +49 671 / 79 65 8-0
                    <br />
                    <strong>E-Mail:</strong> info(at)acencia.de
                    <br />
                    <br />
                    <strong>Amtsgericht Bad Kreuznach:</strong> HRB 20784
                    <br />
                    <br />
                    <strong>§34d GewO</strong>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Berufsbezeichnung:
                </h3>
                <p className="text-slate-700 mb-6">
                  Versicherungsmakler mit Erlaubnis nach § 34d Abs. 1
                  Gewerbeordnung, Bundesrepublik Deutschland
                </p>

                <p className="text-slate-700 mb-4">
                  Die Eintragung im Vermittlerregister
                  (www.vermittlerregister.info) als Versicherungsmakler kann
                  unter folgender Registrierungs-Nummer abgerufen werden:
                </p>
                <div className="bg-orange-50 p-4 rounded-lg mb-6">
                  <p className="text-slate-700 font-semibold">
                    D-3IGK-LBZ78-76
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Aufsichtsbehörde und zuständige Behörde für die Erlaubnis:
                </h3>
                <div className="bg-slate-50 p-6 rounded-lg mb-6">
                  <p className="text-slate-700">
                    <strong>Industrie- und Handelskammer (IHK) Koblenz</strong>
                    <br />
                    Schlossstr. 2<br />
                    56068 Koblenz
                    <br />
                    Telefon: +49 261 106-0
                    <br />
                    <a
                      href="http://www.ihk-koblenz.de"
                      className="text-orange-500 hover:text-orange-600"
                    >
                      http://www.ihk-koblenz.de
                    </a>
                  </p>
                </div>

                <p className="text-slate-700 mb-4">
                  Die Eintragung kann wie folgt überprüft werden:
                </p>
                <div className="bg-slate-50 p-6 rounded-lg mb-8">
                  <p className="text-slate-700">
                    <strong>
                      DIHK | Deutsche Industrie- und Handelskammer
                    </strong>
                    <br />
                    Breite Straße 29, 10178 Berlin
                    <br />
                    Telefon 0180-600-585-0 *<br />
                    <a
                      href="https://www.vermittlerregister.info"
                      className="text-orange-500 hover:text-orange-600"
                    >
                      www.vermittlerregister.info
                    </a>
                    <br />
                    <span className="text-xs">* 0,20 €/Anruf</span>
                  </p>
                </div>
              </div>

              <div>
                <p className="text-slate-700 mb-4">
                  Gemäß § 36 VSBG und § 17 Abs. 4 VersVermV teilen wir mit, dass
                  wir verpflichtet und bereit sind an einem
                  Streitbetilegungsverfahren teilzunehmen. Folgende
                  Schlichtungsstellen können angerufen werden:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-slate-900 mb-3">
                      Versicherungsombudsmann e.V.
                    </h4>
                    <p className="text-slate-700 text-sm">
                      Postfach 08 06 32
                      <br />
                      10006 Berlin
                      <br />
                      <a
                        href="https://www.versicherungsombudsmann.de"
                        className="text-orange-500 hover:text-orange-600"
                      >
                        www.versicherungsombudsmann.de
                      </a>
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-slate-900 mb-3">
                      Ombudsmann Private Kranken- und Pflegeversicherung
                    </h4>
                    <p className="text-slate-700 text-sm">
                      Postfach 06 02 22
                      <br />
                      10052 Berlin
                      <br />
                      <a
                        href="https://www.pkv-ombudsmann.de"
                        className="text-orange-500 hover:text-orange-600"
                      >
                        www.pkv-ombudsmann.de
                      </a>
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h4 className="font-semibold text-slate-900 mb-3">
                    Europäische Kommission
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Online-Streitbeilegungsplattform (OS-Plattform)
                    <br />
                    <a
                      href="http://ec.europa.eu/consumers/odr"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      http://ec.europa.eu/consumers/odr
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Berufsrechtliche Regelungen:
                </h3>
                <ul className="text-slate-700 space-y-2 mb-4">
                  <li>§ 34 d Gewerbeordnung (GewO)</li>
                  <li>§§ 59 - 68 Versicherungsvertragsgesetz (VVG)</li>
                  <li>Versicherungsvermittlerverordnung (VersVermV)</li>
                </ul>
                <p className="text-slate-700 mb-8">
                  Die berufsrechtlichen Regelungen können über die vom
                  Bundesministerium der Justiz und von der juris GmbH
                  betriebenen Homepage
                  <a
                    href="https://www.gesetze-im-internet.de"
                    className="text-orange-500 hover:text-orange-600 ml-1"
                  >
                    www.gesetze-im-internet.de
                  </a>{' '}
                  eingesehen und abgerufen werden.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Beschwerdemanagement:
                </h3>
                <p className="text-slate-700 mb-8">
                  Beschwerden sind in Textform an die Geschäftsleitung zu
                  richten und werden im Rahmen unseres Beschwerdemanagements
                  unverzüglich bearbeitet.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Redaktionell-journalistische Inhalte:
                </h3>
                <p className="text-slate-700 mb-4">
                  Verantwortlicher i.S.d. § 18 Abs. 2 MStV für
                  redaktionell-journalistische Inhalte:
                </p>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <p className="text-slate-700">
                    Uwe Weimert, Geschäftsführer ACENCIA GmbH, Fasanenweg 5,
                    55546 Hackenheim
                  </p>
                </div>
              </div>

              <div className="border-t pt-8">
                <p className="text-slate-600 text-sm">
                  <strong>Stand:</strong> Januar 2025
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ImprintPage;
