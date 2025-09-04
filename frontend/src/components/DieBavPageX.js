import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import {
  Building2,
  AlertTriangle,
  Target,
  TrendingUp,
  CheckCircle,
  Users,
  Shield,
  FileText,
  Lightbulb,
  Award,
  DollarSign,
  Heart,
} from 'lucide-react';

const DieBavPageX = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: 'pflichten',
      title: 'Pflichten',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-red-600',
      items: [
        {
          title:
            'Gesetzliche Verpflichtung zur Entgeltumwandlung (§ 1a BetrAVG)',
          description:
            'Überblick über die rechtlichen Grundlagen und Ansprüche der Mitarbeitenden',
        },
        {
          title: 'Informationspflicht gegenüber Mitarbeitenden',
          description:
            'Aufklärung über Möglichkeiten und Bedingungen der betrieblichen Altersvorsorge',
        },
        {
          title: 'Dokumentations- und Nachweispflichten',
          description:
            'Führung ordnungsgemäßer Unterlagen und Nachweis der Compliance',
        },
        {
          title: 'Pflicht zur 15% Förderung seit 2022',
          description:
            'Gesetzliche Verpflichtung zur Bezuschussung der Entgeltumwandlung mit mindestens 15%',
        },
      ],
    },
    {
      id: 'herausforderungen',
      title: 'Herausforderungen',
      icon: <AlertTriangle className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600',
      items: [
        {
          title: 'Komplexität der Produktlandschaft und Anbieterwahl',
          description:
            'Navigation durch vielfältige Angebote und Tarife verschiedener Versicherer',
        },
        {
          title: 'Verwaltungsaufwand und Integration in bestehende HR-Prozesse',
          description:
            'Einbindung in Lohn- und Gehaltsabrechnung sowie bestehende Systeme',
        },
        {
          title: 'Kommunikation und Akzeptanz bei Mitarbeitenden',
          description:
            'Vermittlung der Vorteile und Aufbau von Vertrauen in die bAV-Lösung',
        },
        {
          title: 'Umgang mit Altverträgen und bestehenden Zusagen',
          description:
            'Integration vorhandener Verträge und Berücksichtigung erworbener Ansprüche',
        },
      ],
    },
    {
      id: 'chancen',
      title: 'Chancen',
      icon: <Target className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      items: [
        {
          title:
            'Mitarbeiterbindung und -gewinnung durch attraktive Zusatzleistungen',
          description:
            'Stärkung der Arbeitgeberattraktivität im Wettbewerb um Fachkräfte',
        },
        {
          title: 'Imagegewinn als verantwortungsbewusster Arbeitgeber',
          description: 'Positionierung als sozial verantwortliches Unternehmen',
        },
        {
          title: 'Steuerliche Vorteile und Sozialabgabenersparnis',
          description:
            'Optimierung der Gesamtkosten durch steuerliche Begünstigungen',
        },
        {
          title:
            'Möglichkeit zur individuellen Gestaltung (z. B. Matching Contributions)',
          description:
            'Flexible Anpassung an Unternehmensstrategie und Mitarbeiterbedürfnisse',
        },
      ],
    },
    {
      id: 'vorteile',
      title: 'Vorteile',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      items: [
        {
          title: 'Geringere Fluktuation und höhere Zufriedenheit im Team',
          description:
            'Messbare Verbesserung der Mitarbeiterbindung und Arbeitsplatzzufriedenheit',
        },
        {
          title: 'Wettbewerbsvorteil gegenüber anderen Arbeitgebern',
          description:
            'Differenzierung im Arbeitsmarkt durch zusätzliche Sozialleistungen',
        },
        {
          title: 'Kosteneffiziente Möglichkeit zur Gehaltsoptimierung',
          description:
            'Erhöhung der Nettoentlohnung ohne zusätzliche Arbeitgeberkosten',
        },
        {
          title:
            'Beitrag zur Altersvorsorge der Mitarbeitenden ohne hohe Zusatzkosten',
          description:
            'Soziale Verantwortung mit wirtschaftlich sinnvoller Umsetzung',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-acencia via-acencia to-acencia-light">
      <Header />

      {/* Doubled spacing from header */}
      <main className="pt-56">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-acencia-orange rounded-full text-white text-sm font-medium mb-8">
                <Building2 className="w-5 h-5 mr-2" />
                Für Unternehmen
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                Betriebliche Altersvorsorge für{' '}
                <span className="text-acencia-orange">Unternehmen</span>
              </h1>
              <p className="text-lg text-slate-200 leading-relaxed max-w-4xl mx-auto">
                Warum bAV heute wichtiger ist denn je
              </p>
            </div>

            {/* Einleitung */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-acencia-orange mr-3" />
                <h2 className="text-2xl font-semibold text-white">
                  Bedeutung der bAV im Wettbewerb um Fachkräfte
                </h2>
              </div>
              <p className="text-slate-200 leading-relaxed mb-4">
                In Zeiten des demografischen Wandels und des Fachkräftemangels
                wird die betriebliche Altersvorsorge zu einem entscheidenden
                Faktor im Wettbewerb um qualifizierte Mitarbeitende.
                Unternehmen, die eine durchdachte bAV-Strategie implementieren,
                verschaffen sich nicht nur einen Wettbewerbsvorteil, sondern
                übernehmen auch gesellschaftliche Verantwortung.
              </p>
              <p className="text-slate-200 leading-relaxed">
                <strong className="text-white">
                  Gesetzliche Rahmenbedingungen:
                </strong>{' '}
                Die Berücksichtigung aktueller Gesetze und Verordnungen ist
                nicht nur eine rechtliche Notwendigkeit, sondern auch ein
                Zeichen für verantwortungsvolle Unternehmensführung. Eine
                professionell gestaltete bAV stärkt das Vertrauen der
                Mitarbeitenden und das Image des Unternehmens.
              </p>
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
                          <div className="flex-shrink-0">
                            <CheckCircle className="w-6 h-6 text-acencia-orange mt-1" />
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

            {/* Call to Action */}
            <div className="mt-16 bg-gradient-to-r from-acencia-orange to-orange-600 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Bereit für den nächsten Schritt?
              </h2>
              <p className="text-white/90 mb-6 leading-relaxed">
                Lassen Sie uns gemeinsam die optimale bAV-Lösung für Ihr
                Unternehmen entwickeln. Unsere Experten beraten Sie individuell
                und unverbindlich.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-acencia-orange px-8 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg">
                  Beratungstermin vereinbaren
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  Mehr erfahren
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

export default DieBavPageX;
