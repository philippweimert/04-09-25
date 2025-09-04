import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Button } from './ui/button';
import {
  AlertTriangle,
  CheckCircle,
  FileText,
  Scale,
  Shield,
  Users,
  Calendar,
  ArrowRight,
  ChevronDown,
  ExternalLink,
  Gavel,
  Euro,
  Clock,
  TrendingUp,
  Heart,
  Award,
  Building2,
  BookOpen,
  Target,
} from 'lucide-react';

const EmployerObligationsPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  // Legal obligations data
  const obligations = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Informationspflichten',
      summary: 'Umfassende Aufklärung der Mitarbeitenden über bAV-Optionen',
      details: [
        'Jährliche Information über bAV-Möglichkeiten nach § 3a BetrAVG',
        'Aufklärung über steuerliche Auswirkungen und Sozialversicherungsfreiheit',
        'Information über Portabilität und Unverfallbarkeit',
        'Dokumentation der Beratungsgespräche',
      ],
      legal: '§ 3a BetrAVG, § 4a BetrAVG',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Haftungsrisiken',
      summary: 'Rechtssichere Umsetzung zur Minimierung von Haftungsrisiken',
      details: [
        'Haftung bei unzureichender Information der Mitarbeitenden',
        'Risiken bei fehlerhafter Beratung oder Durchführung',
        'Schadensersatzansprüche bei Pflichtverletzungen',
        'Absicherung durch professionelle Beratung und Dokumentation',
      ],
      legal: '§ 280 BGB, § 823 BGB',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Gleichbehandlung',
      summary:
        'Faire und diskriminierungsfreie bAV-Angebote für alle Mitarbeitenden',
      details: [
        'Gleichbehandlung aller berechtigten Arbeitnehmer',
        'Berücksichtigung von Teilzeitbeschäftigten',
        'Vermeidung mittelbarer Diskriminierung',
        'Transparente Kommunikation der Auswahlkriterien',
      ],
      legal: '§ 1b BetrAVG, AGG',
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Verwaltungspflichten',
      summary: 'Ordnungsgemäße Verwaltung und laufende Betreuung der bAV',
      details: [
        'Beitragszahlung und Verwaltung der Anwartschaften',
        'Jährliche Standmitteilungen an die Mitarbeitenden',
        'Bearbeitung von Leistungsfällen und Kündigungen',
        'Archivierung und Dokumentation über gesetzliche Fristen',
      ],
      legal: '§ 4a BetrAVG, § 155 VVG',
    },
  ];

  // Opportunities data
  const opportunities = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Mitarbeiterbindung',
      summary: 'Stärkung der Loyalität durch attraktive Zusatzleistungen',
      benefit: 'Langfristige Kostenersparnis durch reduzierte Fluktuation',
    },
    {
      icon: <Euro className="w-6 h-6" />,
      title: 'Steuervorteile',
      summary: 'Optimierung der Lohnnebenkosten durch Entgeltumwandlung',
      benefit: 'Einsparung von Sozialversicherungsbeiträgen',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Employer Branding',
      summary: 'Verbesserung der Arbeitgeberattraktivität im Wettbewerb',
      benefit: 'Leichtere Gewinnung qualifizierter Fachkräfte',
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Unternehmenskultur',
      summary: 'Stärkung des Verantwortungsbewusstseins für Mitarbeitende',
      benefit: 'Verbesserung der Mitarbeiterzufriedenheit und Produktivität',
    },
  ];

  return (
    <div className="min-h-screen bg-bg">
      <Header />

      <div className="section">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Geometric background patterns */}
          <div className="absolute inset-0 opacity-[0.08]">
            <svg
              className="absolute top-20 right-0 w-96 h-96 animate-pulse"
              viewBox="0 0 400 400"
              style={{ animationDuration: '6s' }}
            >
              <polygon
                points="200,50 350,150 350,250 200,350 50,250 50,150"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
            <svg
              className="absolute bottom-20 left-0 w-80 h-80 animate-bounce"
              viewBox="0 0 400 400"
              style={{ animationDuration: '4s' }}
            >
              <polygon
                points="200,30 320,120 320,200 200,290 80,200 80,120"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </svg>
          </div>
          <div className="container relative z-10">
            <div className="text-center mb-8">
              <h1 className="mb-6">bAV – rechtliche Grundlagen</h1>

              <p className="text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed font-body mb-8 measure">
                Verstehen Sie Ihre Pflichten und Chancen als Arbeitgeber bei der
                betrieblichen Altersvorsorge. Wir unterstützen Sie bei der
                rechtssicheren Umsetzung.
              </p>

              {/* Quick action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="btn--primary"
                  onClick={() =>
                    window.open(
                      'https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/',
                      '_blank',
                    )
                  }
                >
                  <Target className="w-4 h-4 mr-2" />
                  Kostenlose Beratung
                </Button>
                <Button
                  variant="outline"
                  className="btn--secondary"
                  onClick={() =>
                    window.open(
                      'https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/',
                      '_blank',
                    )
                  }
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Mehr erfahren
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="section relative overflow-hidden bg-bg-subtle">
          {/* Background patterns for light section */}
          <div className="absolute inset-0 opacity-[0.04]">
            <svg
              className="absolute top-10 left-0 w-80 h-80"
              viewBox="0 0 400 400"
            >
              <polygon
                points="200,30 330,130 330,230 200,330 70,230 70,130"
                fill="none"
                stroke="#001f3c"
                strokeWidth="2"
              />
            </svg>
            <svg
              className="absolute bottom-10 right-0 w-64 h-64 animate-pulse"
              viewBox="0 0 400 400"
              style={{ animationDuration: '5s' }}
            >
              <polygon
                points="200,50 300,100 300,200 200,250 100,200 100,100"
                fill="none"
                stroke="#98a9c3"
                strokeWidth="1"
              />
            </svg>
          </div>
          <div className="container relative z-10">
            {/* Legal Obligations Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="mb-4">Ihre Pflichten als Arbeitgeber</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto font-body">
                  Diese rechtlichen Verpflichtungen müssen Sie bei der bAV
                  beachten
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {obligations.map((obligation, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden border border-neutral-200"
                  >
                    <div className="p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="flex-shrink-0 p-3 bg-neutral-100 rounded-xl text-slate-700">
                          {obligation.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2 font-heading">
                            {obligation.title}
                          </h3>
                          <p className="text-muted-foreground text-sm font-body">
                            {obligation.summary}
                          </p>
                        </div>
                        <button
                          onClick={() => toggleSection(`obligation-${index}`)}
                          className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors"
                        >
                          <ChevronDown
                            className={`w-4 h-4 text-slate-600 transition-transform duration-300 ${
                              expandedSection === `obligation-${index}`
                                ? 'rotate-180'
                                : ''
                            }`}
                          />
                        </button>
                      </div>

                      {/* Expandable content */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedSection === `obligation-${index}`
                            ? 'max-h-96 opacity-100'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="pt-4 border-t border-neutral-200">
                          <ul className="space-y-2 mb-4">
                            {obligation.details.map((detail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className="flex items-start space-x-3"
                              >
                                <CheckCircle className="w-4 h-4 text-slate-600 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground text-sm font-body">
                                  {detail}
                                </span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-center space-x-2 text-xs text-slate-500">
                            <Gavel className="w-3 h-3" />
                            <span className="font-mono">
                              {obligation.legal}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Opportunities Section */}
            <div className="mb-12">
              <div className="text-center mb-12">
                <h2 className="mb-4">Ihre Chancen mit bAV</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto font-body">
                  Diese Vorteile bietet die betriebliche Altersvorsorge für Ihr
                  Unternehmen
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {opportunities.map((opportunity, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 border border-neutral-200"
                  >
                    <div className="text-center">
                        <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <div className="text-slate-700">{opportunity.icon}</div>
                      </div>
                      <h3 className="text-lg font-semibold mb-3 font-heading">
                        {opportunity.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 font-body">
                        {opportunity.summary}
                      </p>
                      <div className="bg-neutral-100 rounded-xl p-3">
                        <p className="text-slate-700 text-xs font-semibold font-body">
                          {opportunity.benefit}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center rounded-lg p-8 border border-neutral-200 bg-white">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-xl lg:text-2xl font-semibold mb-4 font-heading">
                  Lassen Sie sich rechtssicher beraten
                </h3>
                <p className="text-muted-foreground mb-6 font-body">
                  Unsere Experten unterstützen Sie bei der compliant Umsetzung
                  Ihrer bAV-Strategie
                </p>
                <Button
                  className="btn--primary"
                  onClick={() =>
                    window.open(
                      'https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/',
                      '_blank',
                    )
                  }
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Jetzt Beratungstermin vereinbaren
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default EmployerObligationsPage;
