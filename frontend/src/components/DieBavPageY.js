import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import {
  Users,
  Shield,
  TrendingUp,
  CheckCircle,
  Euro,
  Gift,
  Banknote,
  Lock,
  Clock,
  ArrowUp,
  RefreshCw,
  PlusCircle,
  Heart,
  User,
} from 'lucide-react';

const DieBavPageY = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: 'vorteile',
      title: 'Vorteile',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      items: [
        {
          title: 'Steuer- und sozialabgabenfreie Beiträge aus dem Bruttogehalt',
          description:
            'Reduzierung der Steuerlast durch Entgeltumwandlung – mehr Netto vom Brutto',
          icon: <Euro className="w-6 h-6" />,
        },
        {
          title: '15% Arbeitgeberförderung plus zusätzliche Leistungen möglich',
          description:
            'Seit 2022 gesetzlich garantierte 15% Förderung der Entgeltumwandlung - zusätzliche Arbeitgeberzuschüsse oder -beiträge erhöhen Ihre Altersvorsorge noch weiter',
          icon: <Gift className="w-6 h-6" />,
        },
        {
          title: 'Lebenslange Rentenzahlung oder Kapitalauszahlung',
          description:
            'Flexible Auszahlungsoptionen je nach persönlichen Bedürfnissen und Lebensplanung',
          icon: <Banknote className="w-6 h-6" />,
        },
        {
          title: 'Schutz vor Pfändung und Hartz-IV-Anrechnung',
          description:
            'Ihre Altersvorsorge ist vor Zugriffen geschützt und wird nicht auf Sozialleistungen angerechnet',
          icon: <Shield className="w-6 h-6" />,
        },
      ],
    },
    {
      id: 'chancen',
      title: 'Chancen',
      icon: <ArrowUp className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      items: [
        {
          title: 'Früher Einstieg = höhere Rente durch Zinseszinseffekt',
          description:
            'Je früher Sie beginnen, desto mehr profitieren Sie von der Wirkung des Zinseszinses',
          icon: <Clock className="w-6 h-6" />,
        },
        {
          title: 'Ergänzung zur gesetzlichen Rente',
          description:
            'Schließen Sie die Rentenlücke und sichern Sie Ihren gewohnten Lebensstandard im Alter',
          icon: <PlusCircle className="w-6 h-6" />,
        },
        {
          title: 'Flexibilität bei Anbieterwechsel oder Arbeitgeberwechsel',
          description:
            'Ihre Ansprüche bleiben erhalten und können mitgenommen oder übertragen werden',
          icon: <RefreshCw className="w-6 h-6" />,
        },
        {
          title: 'Möglichkeit zur privaten Aufstockung',
          description:
            'Kombination mit privaten Beiträgen für eine noch bessere Altersvorsorge möglich',
          icon: <ArrowUp className="w-6 h-6" />,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-bg">
      <Header />

      {/* Content */}
      <main className="section">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-neutral-100 rounded-full text-slate-700 text-sm font-medium mb-8">
                <User className="w-5 h-5 mr-2" />
                Für Arbeitnehmer
              </div>
              <h1 className="mb-8">Sicherheit für später – heute schon profitieren</h1>
              <p className="text-base text-muted-foreground leading-relaxed max-w-4xl mx-auto measure">
                Was bleibt am Ende des Berufslebens?
              </p>
            </div>

            {/* Emotionale Einleitung */}
            <div className="bg-gradient-to-r from-acencia-orange/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 mb-16">
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-acencia-orange mr-3" />
                <h2 className="text-2xl font-semibold text-white">
                  Was bleibt am Ende des Berufslebens?
                </h2>
              </div>
              <p className="text-slate-200 leading-relaxed mb-4 text-lg">
                Nach einem langen Arbeitsleben haben Sie sich eine sorgenfreie
                Rente verdient. Doch die gesetzliche Rente allein reicht oft
                nicht aus, um den gewohnten Lebensstandard zu halten.
              </p>
              <p className="text-slate-200 leading-relaxed text-lg">
                <strong className="text-white">
                  Hier kommt die betriebliche Altersvorsorge ins Spiel:
                </strong>{' '}
                Eine kluge Ergänzung, die schon heute Ihre Steuerlast reduziert
                und später für finanzielle Sicherheit sorgt.
              </p>
            </div>

            {/* Was ist bAV */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-acencia-orange mr-3" />
                <h2 className="text-2xl font-semibold text-white">
                  Was ist betriebliche Altersvorsorge und wie funktioniert sie?
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-slate-200 leading-relaxed mb-4">
                    Bei der betrieblichen Altersvorsorge (bAV) wird ein Teil
                    Ihres Bruttogehalts für die Altersvorsorge verwendet. Dieser
                    Betrag wird <strong className="text-white">vor</strong> der
                    Berechnung von Steuern und Sozialabgaben abgezogen.
                  </p>
                  <p className="text-slate-200 leading-relaxed mb-4">
                    <strong className="text-acencia-orange">
                      Das Ergebnis:
                    </strong>{' '}
                    Sie zahlen weniger Steuern und Sozialabgaben, während
                    gleichzeitig Ihre Altersvorsorge wächst.
                  </p>
                </div>
                <div className="bg-acencia-light/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Ihr Recht auf bAV
                  </h3>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    Seit 2002 hat{' '}
                    <strong className="text-white">jeder Arbeitnehmer</strong>{' '}
                    den gesetzlichen Anspruch auf betriebliche Altersvorsorge
                    durch Entgeltumwandlung. Ihr Arbeitgeber ist verpflichtet,
                    Ihnen diese Möglichkeit anzubieten.
                  </p>
                </div>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-16">
              {sections.map((section, sectionIndex) => (
                <div key={section.id} className="relative">
                  {/* Section Header */}
                  <div className="flex items-center mb-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center text-white mr-4 shadow-lg`}
                    >
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {sectionIndex + 1}. {section.title}
                      </h2>
                    </div>
                  </div>

                  {/* Section Items */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                      >
                        <div className="flex items-start space-x-4">
                          <div
                            className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                          >
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-acencia-orange transition-colors duration-300">
                              {item.title}
                            </h3>
                            <p className="text-slate-200 leading-relaxed text-sm">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Beispielrechnung */}
            <div className="mt-16 bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">
                💡 Berechnungsbeispiel: bAV mit 15% Arbeitgeberförderung
              </h2>

              {/* Hauptberechnung */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4 text-center">
                    Monatliche Beiträge
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/20 pb-2">
                      <span className="text-slate-200">Gesamtbeitrag bAV:</span>
                      <span className="text-2xl font-bold text-acencia-orange">
                        100 €
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/20 pb-2">
                      <span className="text-slate-200">
                        Arbeitgeberzuschuss (15%):
                      </span>
                      <span className="text-xl font-bold text-green-400">
                        + 15 €
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/20 pb-2">
                      <span className="text-slate-200">Ihr Eigenbeitrag:</span>
                      <span className="text-xl font-bold text-blue-400">
                        85 €
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-200">
                        Steuer-/Abgabenersparnis:
                      </span>
                      <span className="text-xl font-bold text-green-400">
                        ca. 34 €
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4 text-center">
                    Ihre Nettobelastung
                  </h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-acencia-orange mb-2">
                        nur 51 €
                      </div>
                      <div className="text-white font-semibold">
                        weniger Netto pro Monat
                      </div>
                    </div>
                    <div className="bg-acencia-light/30 rounded-lg p-4 text-center">
                      <div className="text-sm text-slate-200 mb-2">
                        Aufgrund der Steuerersparnis zahlen Sie effektiv:
                      </div>
                      <div className="text-lg font-bold text-green-400">
                        85 € - 34 € = 51 € Nettobelastung
                      </div>
                    </div>
                    <div className="text-xs text-slate-300 text-center">
                      *Bei einem Grenzsteuersatz von ca. 40% (Steuer +
                      Sozialabgaben)
                    </div>
                  </div>
                </div>
              </div>

              {/* Langfristige Auswirkungen */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    100 €
                  </div>
                  <div className="text-white font-semibold mb-2">
                    Gesamtbeitrag
                  </div>
                  <div className="text-slate-300 text-sm">
                    monatlich in Ihre bAV
                  </div>
                  <div className="text-xs text-slate-400 mt-2">
                    (85 € Eigenbeitrag + 15 € AG-Zuschuss)
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    612 €
                  </div>
                  <div className="text-white font-semibold mb-2">
                    Jährliche Ersparnis
                  </div>
                  <div className="text-slate-300 text-sm">
                    durch AG-Zuschuss + Steuervorteile
                  </div>
                  <div className="text-xs text-slate-400 mt-2">
                    (180 € AG-Zuschuss + 408 € Steuerersparnis)
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-acencia-orange mb-2">
                    ≈ 31.000 €
                  </div>
                  <div className="text-white font-semibold mb-2">
                    Nach 20 Jahren
                  </div>
                  <div className="text-slate-300 text-sm">
                    Kapital bei 2% Zinssatz
                  </div>
                  <div className="text-xs text-slate-400 mt-2">
                    Ihre Nettobelastung: nur ≈ 12.240 €
                  </div>
                </div>
              </div>

              {/* Aufklärung */}
              <div className="mt-6 bg-acencia-orange/20 rounded-xl p-4 border border-orange-400/30">
                <div className="text-center">
                  <div className="text-white font-semibold mb-2">
                    🎯 Das Beste für Sie:
                  </div>
                  <div className="text-slate-200 text-sm">
                    Sie bekommen eine Altersvorsorge von 31.000 €, zahlen aber
                    netto nur 12.240 € selbst! Der Rest kommt vom
                    Arbeitgeberzuschuss und Ihren Steuervorteilen.
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 bg-gradient-to-r from-acencia-orange to-orange-600 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Starten Sie noch heute in Ihre sichere Zukunft!
              </h2>
              <p className="text-white/90 mb-6 leading-relaxed">
                Nutzen Sie Ihr Recht auf betriebliche Altersvorsorge und
                profitieren Sie von steuerlichen Vorteilen. Sprechen Sie mit
                Ihrem Arbeitgeber oder lassen Sie sich beraten.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-acencia-orange px-8 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg">
                  Beratung anfordern
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  Arbeitgeber informieren
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DieBavPageY;
