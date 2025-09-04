import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const PrivacyPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-acencia">
      <Header />

      <div className="pt-28 bg-acencia">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-acencia via-acencia-light to-acencia py-16 relative overflow-hidden">
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

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                <span className="text-orange-500">Datenschutzerklärung</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Smooth transition from slate-900 to slate-100 */}
        <div className="h-12 bg-gradient-to-b from-slate-900 to-slate-100"></div>

        {/* Privacy Content */}
        <section className="bg-slate-100 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8 text-sm leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  A. Datenschutzrichtlinie
                </h2>

                <p className="text-slate-700 mb-6">
                  Vielen Dank für Ihren Besuch auf unserer Internetseite und für
                  Ihr Interesse an unserem Unternehmen. Wir möchten, dass Sie
                  angenehm durch unsere Seiten surfen und keine unangenehmen
                  Überraschungen erleben.
                </p>

                <p className="text-slate-700 mb-4">
                  Nach Maßgabe der Art. 37 - 39 DS-GVO/ § 38 BDSGneu erreichen
                  Sie unseren Datenschutzbeauftragten wie folgt:
                </p>

                <div className="bg-slate-50 p-6 rounded-lg mb-6">
                  <p className="text-slate-700">
                    <strong>IDD GmbH</strong>
                    <br />
                    Institut für Datenschutz und Datensicherheit
                    <br />
                    Herr Dietmar Niehaus
                    <br />
                    Anne-Conway-Straße 1<br />
                    D-28359 Bremen
                    <br />
                    Tel. 0421 / 598 635-0
                    <br />
                    niehaus@Institut-Datensicherheit.de
                    <br />
                    www.institut-datensicherheit.de
                  </p>
                </div>

                <p className="text-slate-700 mb-4">
                  Dieser nimmt die ihm aus dieser Richtlinie zugewiesenen
                  Aufgaben bei weisungsfreier Anwendung seiner Fachkunde wahr.
                  Für Meldungen, Auskünfte etc. gegenüber den
                  Datenschutzaufsichtsbehörden ist der DSB zuständig. Die
                  Unternehmensabteilungen stellen die hierfür erforderlichen
                  Informationen, Unterlagen etc. zur Verfügung. Gleiches gilt
                  für Anfragen, Beschwerden oder Auskunftsersuchen. Jeder
                  Mitarbeiter unseres Unternehmens kann sich unmittelbar mit
                  Hinweisen, Anregungen oder Beschwerden an den DSB wenden, auf
                  Wunsch wird absolute Vertraulichkeit gewahrt.
                </p>

                <p className="text-slate-700 mb-4">
                  Sie haben Beschwerderecht bei der Aufsichtsbehörde, in deren
                  Bundesland das Unternehmen seinen Sitz hat. Für unser
                  Unternehmen ist dies:
                </p>

                <div className="bg-slate-50 p-6 rounded-lg mb-6">
                  <p className="text-slate-700">
                    <strong>
                      Der Landesbeauftragte für den Datenschutz und die
                      Informationsfreiheit Rheinland-Pfalz
                    </strong>
                    <br />
                    Hintere Bleiche 34, 55116 Mainz
                    <br />
                    Tel. 06131 208-2449
                    <br />
                    Fax 06131 208-2497
                    <br />
                    http://www.datenschutz.rlp.de
                  </p>
                </div>

                <p className="text-slate-700 mb-8">
                  Eine Datenübermittlung findet an Versicherer/Dienstleister
                  statt, um den von Ihnen gewünschten Versicherungsschutz
                  einzudecken. Des Weiteren an öffentliche Stellen und
                  Institutionen, sofern eine gesetzliche Verpflichtung besteht.
                  Eine Übersicht über die vorgestellten Geschäftspartner sowie
                  Versicherer händigen wir auf Wunsch aus.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  1. Geltungsbereich
                </h3>
                <p className="text-slate-700 mb-4">
                  Diese Richtlinie regelt die datenschutzkonforme
                  Informationsverarbeitung und die entsprechenden
                  Verantwortlichkeiten beim obengenannten Unternehmen (und
                  seiner/n Niederlassung/en) auf Basis der gesetzlichen
                  Regelungen der Europäischen Datenschutz-Grundverordnung
                  (DS-GVO) und Bundesdatenschutzgesetz (BDSGneu). Alle
                  Mitarbeiter sind zur Einhaltung dieser Richtlinie
                  verpflichtet.
                </p>
                <p className="text-slate-700 mb-4">
                  Sie richtet sich insbesondere an:
                </p>
                <p className="text-slate-700 mb-4">
                  Mitarbeiter, Kunden und Interessenten, Versicherer und
                  Dienstleister.
                </p>
                <p className="text-slate-700 mb-4">
                  Hierbei gelten folgende Grundsätze:
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-1 mb-4">
                  <li>Wahrung der Persönlichkeitsrechte</li>
                  <li>Zweckbindung personenbezogener Daten</li>
                  <li>Transparenz</li>
                  <li>Datenvermeidung und Datensparsamkeit</li>
                  <li>Sachliche Richtigkeit/Aktualität der Daten</li>
                  <li>Vertraulichkeit bei der Datenverarbeitung</li>
                  <li>Sicherheit bei der Datenverarbeitung</li>
                  <li>
                    Löschung und Einschränkung der Verarbeitung von Daten auf
                    Anforderung
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  2. Begriffsdefinitionen (Art. 4 DS-GVO)
                </h3>
                <p className="text-slate-700 mb-4">
                  <strong>Personenbezogene Daten</strong> sind Einzelangaben
                  über persönliche oder sachliche Verhältnisse einer natürlichen
                  Person (Betroffener). Beispiele: Name, Vorname, Geburtstag,
                  Adressdaten, Vertragsdaten, E-Mail-Inhalte.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong>Besondere personenbezogene Daten</strong> sind Angaben
                  über rassische, ethnische Herkunft, politische Meinungen,
                  religiöse oder philosophische Überzeugungen,
                  Gewerkschaftszugehörigkeit, Gesundheit oder Sexualleben, sowie
                  wirtschaftliche Verhältnisse.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong>Verantwortliche Stelle</strong> ist jede Person oder
                  Stelle, die personenbezogene Daten für sich selbst erhebt,
                  verarbeitet oder nutzt oder dies durch andere im Auftrag
                  vornehmen lässt.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  3. Erheben, Verarbeiten und Speichern personenbezogener Daten
                  (Art. 5 + 6 DS-GVO)
                </h3>
                <p className="text-slate-700 mb-4">
                  Das Erheben, Verarbeiten und Speichern personenbezogener Daten
                  in unserem Unternehmen geschieht auf Basis des von uns
                  verwendeten Maklerauftrages und den mitgeltenden Dokumenten
                  (wie z.B. Maklervollmacht, Einwilligung zur Datenverarbeitung,
                  die separat unterzeichnet werden).
                </p>
                <p className="text-slate-700 mb-4">
                  Ohne eine konkrete Beauftragung und eine datenschutzrechtliche
                  Einwilligungserklärung durch unsere Kunden werden wir nicht
                  tätig (bei Kindern und Jugendlichen wird die Einwilligung
                  durch die Erziehungsberechtigten erteilt).
                </p>
                <p className="text-slate-700 mb-4">
                  Wir dokumentieren unsere Tätigkeit umfänglich über unser
                  Maklerverwaltungsprogramm und halten konkrete
                  Verfahrensanweisungen für die Ausführung unserer Aufträge vor.
                  Profiling findet in unserem Unternehmen nicht statt. Die Daten
                  werden ausschließlich zu den vereinbarten Zwecken verarbeitet.
                </p>
                <p className="text-slate-700 mb-4">
                  Die Daten unserer Kunden werden nach Kündigung des
                  Maklervertrages nach den gesetzlichen Vorgaben, insbesondere
                  der Bestimmungen zu gesetzlichen Aufbewahrungsfristen
                  gelöscht. Die Fristen können zur Verteidigung von möglichen
                  Rechtsansprüchen entsprechend verlängert werden. Anstelle der
                  Löschung tritt die Einschränkung der Verarbeitung.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  4. Verpflichtung auf Vertraulichkeit
                </h3>
                <p className="text-slate-700 mb-4">
                  Alle Mitarbeiter werden bei der Aufnahme ihrer Tätigkeit zur
                  Verschwiegenheit und der Einhaltung der Arbeitsanweisungen
                  sowie dieser Richtlinie verpflichtet. Die Verpflichtung wird
                  jährlich erneuert.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  5. Verarbeitungsübersichten (Art. 30 DS-GVO)
                </h3>
                <p className="text-slate-700 mb-4">
                  Mittels interner Verfahrensübersichten (Verzeichnis der
                  Verarbeitungstätigkeiten) schaffen wir Transparenz innerhalb
                  des Unternehmens und überprüfen, ob unsere Verfahren besondere
                  Risiken für die Rechte und Freiheiten der Betroffenen
                  aufweisen und damit einer Vorabkontrolle/
                  Datenschutz-Folgeabschätzung unterliegen. Es besteht die
                  Verpflichtung, diese Übersichten vorzuhalten für eine
                  Einsichtnahme durch die Behörden.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  6. Beschaffung von Hard- und Software
                </h3>
                <p className="text-slate-700 mb-4">
                  Sämtliche für unsere Arbeitsabläufe notwendige Hardware
                  (Rechner, Bildschirme, Tastatur, Maus und Peripheriegeräte wie
                  Scanner oder Drucker) wird nach internen Richtlinien
                  gesteuert. Die Rechner werden für die Mitarbeiter bereits
                  konfiguriert und mit den entsprechenden Programmen, die wir im
                  Standard nutzen, ausgestattet. Weitere Software darf nur in
                  Absprache mit der Geschäftsführung installiert werden.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  7. Passwortrichtlinien
                </h3>
                <p className="text-slate-700 mb-4">
                  Um die Zugriffe zu unseren Systemen sicher zu gestalten, ist
                  eine individuelle Authentifizierung notwendig. Für diese
                  wurden interne Regelungen getroffen, an die sich alle
                  Beteiligten halten müssen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  8. Technische und organisatorische Maßnahmen
                </h3>
                <p className="text-slate-700 mb-4">
                  Wir ergreifen alle uns möglichen Maßnahmen, die nach dem
                  aktuellen Stand der Technik, sowie organisatorisch dazu
                  geeignet sind, um Unbefugten keinen Zugriff auf die bei uns
                  gespeicherten personenbezogenen Daten zu gewähren. Dazu führen
                  wir separate Aufzeichnungen, um die Anforderungen an die
                  Sicherheit der Datenverarbeitung zu dokumentieren.
                </p>
                <p className="text-slate-700 mb-4">
                  Eine Übermittlung in Drittländer ist zum aktuellen Zeitpunkt
                  nicht geplant.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  9. Rechte von Betroffenen (Art. 12 -23 DS-GVO)
                </h3>
                <p className="text-slate-700 mb-4">
                  Der Betroffene kann Auskunft darüber verlangen, welche
                  personenbezogenen Daten welcher Herkunft über ihn zu welchem
                  Zweck gespeichert sind. Falls im Arbeitsverhältnis nach dem
                  jeweils anzuwendenden Arbeitsrecht weitergehende
                  Einsichtsrechte in Unterlagen des Arbeitgebers (z.B.
                  Personalakte) vorgesehen sind, so bleiben diese unberührt.
                </p>
                <p className="text-slate-700 mb-4">
                  Werden personenbezogene Daten an Dritte übermittelt, muss auch
                  über die Identität des Empfängers oder über die Kategorien von
                  Empfängern Auskunft gegeben werden.
                </p>
                <p className="text-slate-700 mb-4">
                  Sollten personenbezogene Daten unrichtig oder unvollständig
                  sein, kann der Betroffene ihre Berichtigung oder Ergänzung
                  verlangen.
                </p>
                <p className="text-slate-700 mb-4">
                  Der Betroffene kann der Verarbeitung seiner personenbezogenen
                  Daten zu Zwecken der Werbung oder der Markt- und
                  Meinungsforschung widersprechen. Für diese Zwecke müssen die
                  Daten für die Verarbeitung eingeschränkt (gesperrt) werden.
                </p>
                <p className="text-slate-700 mb-4">
                  Der Betroffene ist berechtigt, die Löschung seiner Daten zu
                  verlangen, wenn die Rechtsgrundlage für die Verarbeitung der
                  Daten fehlt oder weggefallen ist. Gleiches gilt für den Fall,
                  dass der Zweck der Datenverarbeitung durch Zeitablauf oder aus
                  anderen Gründen entfallen ist. Bestehende
                  Aufbewahrungspflichten und einer Löschung entgegenstehende
                  schutzwürdige Interessen müssen beachtet werden.
                </p>
                <p className="text-slate-700 mb-4">
                  Der Betroffene hat ein grundsätzliches Widerspruchsrecht gegen
                  die Verarbeitung seiner Daten mit Wirkung auf die Zukunft, das
                  zu berücksichtigen ist, wenn sein schutzwürdiges Interesse
                  aufgrund einer besonderen persönlichen Situation das Interesse
                  an der Verarbeitung überwiegt. Dies gilt nicht, wenn eine
                  Rechtsvorschrift zur Durchführung der Verarbeitung
                  verpflichtet.
                </p>
                <p className="text-slate-700 mb-4">
                  Der Betroffene hat ein Recht auf Datenübertragbarkeit. Das
                  bedeutet das Recht, die personenbezogenen Daten in einem
                  strukturierten, gängigen und maschinenlesbaren Format zu
                  erhalten. Freiheiten und Rechte anderer Personen dürfen
                  hierdurch nicht beeinträchtigt werden.
                </p>
                <p className="text-slate-700 mb-4">
                  Der Betroffene hat ein Beschwerderecht bei der
                  Aufsichtsbehörde, in deren Bundesland das Unternehmen seinen
                  Sitz hat. Die Kontaktdaten finden Sie zu Beginn der
                  Beschreibung unserer Datenschutzorganisation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  10. Verfahren bei "Datenpannen" (Art. 33 DS-GVO)
                </h3>
                <p className="text-slate-700 mb-4">
                  Jeder Mitarbeiter soll seinem jeweiligen Vorgesetzten, der
                  Geschäftsführung oder dem DSB unverzüglich Fälle von Verstößen
                  gegen diese Datenschutzrichtlinie oder andere Vorschriften zum
                  Schutz personenbezogener Daten (Datenschutzvorfälle) melden.
                  Die verantwortliche Führungskraft ist verpflichtet, den DSB
                  umgehend über Datenschutzvorfälle zu unterrichten.
                </p>
                <p className="text-slate-700 mb-4">
                  In Fällen von unrechtmäßiger Übermittlung personenbezogener
                  Daten an Dritte, unrechtmäßigem Zugriff durch Dritte auf
                  personenbezogene Daten, oder bei Verlust personenbezogener
                  Daten sind die im Unternehmen vorgesehenen Meldungen
                  unverzüglich vorzunehmen, damit nach staatlichem Recht
                  bestehende Meldepflichten von Datenschutzvorfällen erfüllt
                  werden können.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  B. Erklärung zum Schutz Ihrer Daten beim Besuch unserer
                  Homepage
                </h2>

                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  1. Formulare
                </h3>
                <p className="text-slate-700 mb-4">
                  Auf unserer Internetseite können Sie für die elektronische
                  Kontaktaufnahme das Kontaktformular nutzen. Geben Sie Ihre
                  persönlichen Daten wie beispielsweise Name, Geburtsdatum,
                  Anschrift, Bankverbindung oder sonstige Daten z.B. zur
                  Erstellung eines Angebots oder Meldung eines Schaden in ein
                  Formular ein, werden diese von uns gespeichert und
                  ausschließlich zu diesen Zwecken verarbeitet.
                </p>
                <p className="text-slate-700 mb-4">
                  Persönliche Daten über Minderjährige erheben wir wissentlich
                  nur bei Erziehungsberechtigten und nur, wenn und soweit die
                  personenbezogene Verarbeitung und Nutzung zur Erfüllung eines
                  Vertragsverhältnisses erforderlich ist.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  2. Live-Videoberatung
                </h3>
                <p className="text-slate-700 mb-4">
                  Wir bieten auf unserer Webseite zu unseren üblichen
                  Geschäftszeiten oder nach individueller Vereinbarung die
                  Möglichkeit einer Live-Videoberatung an. Mit dieser Form der
                  Kommunikation können wir uns mit Ihnen live, mit Bild und Ton
                  unterhalten. Um an der Live-Beratung teilnehmen zu können,
                  bitten wir Sie um die Angabe Ihres Namens. Wenn Sie Ihren
                  richtigen Namen nicht angeben möchten, können Sie ein
                  Pseudonym angeben, oder ganz auf eine Angabe verzichten.
                  Innerhalb der Videoberatungs-Sitzung können Sie auch die Text
                  Chat Funktion verwenden.
                </p>
                <p className="text-slate-700 mb-4">
                  Neben unserem Berater nehmen keine weiteren Personen an der
                  Unterhaltung teil. Es werden keine Daten an Dritte
                  weitergegeben. Die gesamte Kommunikation zwischen Ihnen und
                  unserem Berater findet ausschließlich verschlüsselt statt. Zu
                  statistischen Zwecken und zur Optimierung unseres Service
                  werden folgende Daten anonymisiert gespeichert:
                  Gesprächsdaten, Zeitpunkt, Dauer und Thema. Diese Daten
                  verarbeiten wir auf Grundlage des berechtigten Interessens.
                  Dient die Live-Videoberatung der Erfüllung eines Vertrages,
                  dessen Vertragspartei Sie sind oder der Durchführung
                  vorvertraglicher Maßnahmen, so ist dies eine zusätzliche
                  Rechtsgrundlage für die Verarbeitung der Daten.
                </p>
                <p className="text-slate-700 mb-4">
                  Die Daten werden gelöscht, sobald sie für die Erreichung des
                  Zweckes ihrer Erhebung nicht mehr erforderlich sind.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  3. Einbindung und Verwendung von Inhalten Dritter
                </h3>
                <p className="text-slate-700 mb-4">
                  In unserer Webseite können Inhalte von Dritten, insbesondere
                  Angebotsprogramme, Vergleichsrechner und Produktangebote z. B.
                  von Versicherern eingebunden sein. Diese Inhalte können im
                  Design unseres Internetauftritts sein. Für diese Inhalte
                  gelten die Datenschutzerklärungen des Dritten, welche an der
                  entsprechenden Stelle verlinkt sind, bzw. im Internetauftritt
                  des Dritten ersichtlich sind.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  4. Cookies
                </h3>
                <p className="text-slate-700 mb-4">
                  Die Internetseiten verwenden teilweise so genannte Cookies.
                  Cookies richten auf Ihrem Rechner keinen Schaden an und
                  enthalten keine Viren. Cookies dienen dazu, unser Angebot
                  nutzerfreundlicher, effektiver und sicherer zu machen. Cookies
                  sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden
                  und die Ihr Browser speichert. Die meisten der von uns
                  verwendeten Cookies sind so genannte "Session-Cookies". Sie
                  werden nach Ende Ihres Besuchs automatisch gelöscht. Andere
                  Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese
                  löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim
                  nächsten Besuch wiederzuerkennen.
                </p>
                <p className="text-slate-700 mb-4">
                  Sie können Ihren Browser so einstellen, dass Sie über das
                  Setzen von Cookies informiert werden und Cookies nur im
                  Einzelfall erlauben, die Annahme von Cookies für bestimmte
                  Fälle oder generell ausschließen sowie das automatische
                  Löschen der Cookies beim Schließen des Browsers aktivieren.
                  Bei der Deaktivierung von Cookies kann die Funktionalität
                  dieser Website eingeschränkt sein.
                </p>
                <p className="text-slate-700 mb-4">
                  Cookies, die zur Durchführung des elektronischen
                  Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von
                  Ihnen erwünschter Funktionen (z.B. Warenkorbfunktion)
                  erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit.
                  f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes
                  Interesse an der Speicherung von Cookies zur technisch
                  fehlerfreien und optimierten Bereitstellung seiner Dienste.
                  Soweit andere Cookies (z.B. Cookies zur Analyse Ihres
                  Surfverhaltens) gespeichert werden, werden diese in dieser
                  Datenschutzerklärung gesondert behandelt.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  5. Server-Log-Dateien
                </h3>
                <p className="text-slate-700 mb-4">
                  Der Provider der Seiten erhebt und speichert automatisch
                  Informationen in so genannten Server-Log-Dateien, die Ihr
                  Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-1 mb-4">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="text-slate-700 mb-4">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen
                  wird nicht vorgenommen. Grundlage für die Datenverarbeitung
                  ist Art. 6 Abs. 1 lit. f DSGVO, der die Verarbeitung von Daten
                  zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen
                  gestattet.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  6. Google Analytics
                </h3>
                <p className="text-slate-700 mb-4">
                  Diese Website nutzt Funktionen des Webanalysedienstes Google
                  Analytics. Anbieter ist die Google Inc., 1600 Amphitheatre
                  Parkway, Mountain View, CA 94043, USA. Google Analytics
                  verwendet so genannte "Cookies". Das sind Textdateien, die auf
                  Ihrem Computer gespeichert werden und die eine Analyse der
                  Benutzung der Website durch Sie ermöglichen. Die durch das
                  Cookie erzeugten Informationen über Ihre Benutzung dieser
                  Website werden in der Regel an einen Server von Google in den
                  USA übertragen und dort gespeichert. Die Speicherung von
                  Google-Analytics-Cookies erfolgt auf Grundlage von Art. 6 Abs.
                  1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
                  Interesse an der Analyse des Nutzerverhaltens, um sowohl sein
                  Webangebot als auch seine Werbung zu optimieren.
                </p>

                <h4 className="text-lg font-semibold text-slate-900 mb-3">
                  IP Anonymisierung
                </h4>
                <p className="text-slate-700 mb-4">
                  Wir haben auf dieser Website die Funktion IP-Anonymisierung
                  aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb
                  von Mitgliedstaaten der Europäischen Union oder in anderen
                  Vertragsstaaten des Abkommens über den Europäischen
                  Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur
                  in Ausnahmefällen wird die volle IP-Adresse an einen Server
                  von Google in den USA übertragen und dort gekürzt. Im Auftrag
                  des Betreibers dieser Website wird Google diese Informationen
                  benutzen, um Ihre Nutzung der Website auszuwerten, um Reports
                  über die Websiteaktivitäten zusammenzustellen und um weitere
                  mit der Websitenutzung und der Internetnutzung verbundene
                  Dienstleistungen gegenüber dem Websitebetreiber zu erbringen.
                  Die im Rahmen von Google Analytics von Ihrem Browser
                  übermittelte IP-Adresse wird nicht mit anderen Daten von
                  Google zusammengeführt.
                </p>

                <h4 className="text-lg font-semibold text-slate-900 mb-3">
                  Browser Plugin
                </h4>
                <p className="text-slate-700 mb-4">
                  Sie können die Speicherung der Cookies durch eine
                  entsprechende Einstellung Ihrer Browser-Software verhindern;
                  wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall
                  gegebenenfalls nicht sämtliche Funktionen dieser Website
                  vollumfänglich werden nutzen können. Sie können darüber hinaus
                  die Erfassung der durch das Cookie erzeugten und auf Ihre
                  Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse)
                  an Google sowie die Verarbeitung dieser Daten durch Google
                  verhindern, indem Sie das unter dem folgenden Link verfügbare
                  Browser-Plugin herunterladen und installieren:{' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout?hl=de"
                    className="text-orange-500 hover:text-orange-600"
                  >
                    https://tools.google.com/dlpage/gaoptout?hl=de
                  </a>
                  .
                </p>

                <h4 className="text-lg font-semibold text-slate-900 mb-3">
                  Widerspruch gegen Datenerfassung
                </h4>
                <p className="text-slate-700 mb-4">
                  Sie können die Erfassung Ihrer Daten durch Google Analytics
                  verhindern, indem Sie auf folgenden Link klicken. Es wird ein
                  Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei
                  zukünftigen Besuchen dieser Website verhindert: Google
                  Analytics deaktivieren.
                </p>
                <p className="text-slate-700 mb-4">
                  Mehr Informationen zum Umgang mit Nutzerdaten bei Google
                  Analytics finden Sie in der Datenschutzerklärung von Google:{' '}
                  <a
                    href="https://support.google.com/analytics/answer/6004245?hl=de"
                    className="text-orange-500 hover:text-orange-600"
                  >
                    https://support.google.com/analytics/answer/6004245?hl=de
                  </a>
                  .
                </p>

                <h4 className="text-lg font-semibold text-slate-900 mb-3">
                  Auftragsdatenverarbeitung
                </h4>
                <p className="text-slate-700 mb-4">
                  Wir haben mit Google einen Vertrag zur
                  Auftragsdatenverarbeitung abgeschlossen und setzen die
                  strengen Vorgaben der deutschen Datenschutzbehörden bei der
                  Nutzung von Google Analytics vollständig um.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  7. Google Maps
                </h3>
                <p className="text-slate-700 mb-4">
                  Diese Seite nutzt über eine API den Kartendienst Google Maps.
                  Anbieter ist die Google Inc., 1600 Amphitheatre Parkway,
                  Mountain View, CA 94043, USA. Zur Nutzung der Funktionen von
                  Google Maps ist es notwendig, Ihre IP-Adresse zu speichern.
                  Diese Informationen werden in der Regel an einen Server von
                  Google in den USA übertragen und dort gespeichert. Der
                  Anbieter dieser Seite hat keinen Einfluss auf diese
                  Datenübertragung. Die Nutzung von Google Maps erfolgt im
                  Interesse einer ansprechenden Darstellung unserer
                  Online-Angebote und an einer leichten Auffindbarkeit der von
                  uns auf der Website angegebenen Orte. Dies stellt ein
                  berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO
                  dar. Mehr Informationen zum Umgang mit Nutzerdaten finden Sie
                  in der Datenschutzerklärung von Google:{' '}
                  <a
                    href="https://www.google.de/intl/de/policies/privacy/"
                    className="text-orange-500 hover:text-orange-600"
                  >
                    https://www.google.de/intl/de/policies/privacy/
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  C. Einwilligungserklärung zur Datenverarbeitung und
                  Kontaktaufnahme
                </h2>
                <p className="text-slate-700 mb-4">
                  Um für Sie tätig werden zu können, müssen wir Daten von Ihnen
                  erfassen, speichern und an Dritte weitergeben. Dies tun wir
                  beispielsweise, wenn wir Ihre Risikosituation erfassen und
                  diese Daten an verschiedene Versicherer weitergeben, um für
                  Sie passende Angebote zu erhalten. Hierzu nutzen wir auch
                  sogenannte Maklerdienstleister. Oft ist es auch erforderlich,
                  dass wir Sie betreffende Daten von Dritten anfordern. In
                  erster Linie sind dies Versicherer, aber auch Daten von
                  Ärzten, Steuerberatern oder Rechtsanwälten und Auskunfteien
                  können beispielsweise erforderlich sein. Gesundheitsdaten
                  werden ausschließlich erhoben, soweit es für die Vermittlung
                  von Lebens-, Kranken- oder Unfallversicherungen
                  (Personenversicherungen) erforderlich ist, bzw. bei der
                  Abwicklung von Leistungs- und Schadenfällen. Sie können diese
                  Einwilligungen jeweils einzeln erteilen und jederzeit mit
                  Wirkung für die Zukunft widerrufen. Beachten Sie bitte, dass
                  wir dann ggfs. nicht mehr für Sie tätig sein können.
                </p>
                <p className="text-slate-700 mb-4">
                  Weiterreichende Informationen entnehmen Sie bitte unserer
                  Datenschutzrichtlinie mit Geschäftspartnerliste.
                </p>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Einwilligung zur Erfassung und Anforderung von Daten
                </h3>
                <p className="text-slate-700 mb-4">
                  Sie willigen ein, dass wir Daten von Ihnen erheben und von
                  Dritten anfordern. Sofern wir Gesundheitsdaten von Ärzten
                  anfordern, werden wir Sie zuvor darüber informieren.
                </p>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Einwilligung zur Speicherung von Daten
                </h3>
                <p className="text-slate-700 mb-4">
                  Sie willigen ein, dass wir die erfassten und angeforderten
                  Daten im erforderlichen Umfang speichern und verarbeiten bzw.
                  von berechtigten Dritten speichern und verarbeiten lassen.
                </p>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Einwilligung zur Weitergabe von Daten
                </h3>
                <p className="text-slate-700 mb-4">
                  Sie willigen ein, dass wir Daten im erforderlichen Rahmen
                  unserer Maklertätigkeit an Dritte weitergeben. Dritte sind
                  hier beispielsweise Versicherer, Maklerdienstleister,
                  Werkstätten, Gutachter oder sonstige Dienstleister. Eine
                  Übersicht potenzieller Empfänger können Sie der
                  Geschäftspartnerübersicht entnehmen. Auf Anfrage erhalten Sie
                  selbstverständlich auch Auskunft, an wen tatsächlich Sie
                  betreffende Daten von uns übermittelt wurden.
                </p>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Einwilligung zur Kontaktaufnahme
                </h3>
                <p className="text-slate-700 mb-4">
                  Kundeninformation ist ein Bestandteil unserer Arbeit. Sie
                  haben die Möglichkeit der elektronischen Kontaktaufnahme über
                  die Formulare genutzt und erwarten eine Rückmeldung zu Ihrer
                  Anfrage, wozu wir die übermittelten Kontaktdaten nutzen
                  werden. Deshalb benötigen wir Ihr Einverständnis, um unsere
                  Tätigkeit ausüben zu können.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  D. Änderung innerhalb der Datenschutz-Richtlinie
                </h2>
                <p className="text-slate-700 mb-4">
                  Wir behalten uns vor, die Datenschutz-Richtlinie bei Bedarf
                  anzupassen, damit diese den aktuellen rechtlichen und
                  technischen Anforderungen entspricht. Diese gelten dann bei
                  einem erneuten Besuch. Auf eine Änderung weisen wir durch den
                  Revisionsstand hin.
                </p>
              </div>

              <div className="border-t pt-8">
                <p className="text-slate-600 text-sm">
                  <strong>Stand:</strong> Januar 2025
                  <br />
                  Bei Fragen zum Datenschutz kontaktieren Sie uns unter:
                  <a
                    href="mailto:info@acencia.de"
                    className="text-orange-500 hover:text-orange-600 ml-1"
                  >
                    info@acencia.de
                  </a>
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

export default PrivacyPage;
