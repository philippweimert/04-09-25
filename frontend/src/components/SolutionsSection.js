import React from 'react';
import {
  Building,
  Rocket,
  Factory,
  ArrowRight,
  Users,
  Briefcase,
  TrendingUp,
} from 'lucide-react';

const SolutionsSection = () => {
  const challenges = [
    {
      title: 'Komplexe Verwaltung',
      description:
        'bAV-Verwaltung ist administrativ sehr komplex und fehleranfällig',
    },
    {
      title: 'Zeitaufwand',
      description: 'Manuelle Prozesse binden wertvolle HR-Ressourcen',
    },
    {
      title: 'Rechtsunsicherheit',
      description:
        'Ständige Gesetzesänderungen erfordern permanente Überwachung',
    },
    {
      title: 'Systembrüche',
      description:
        'Fehlende Integration führt zu Medienbrüchen und Doppelerfassung',
    },
  ];

  const solutions = [
    {
      title: 'Digitale Automatisierung',
      description: 'Vollautomatisierte Abwicklung eliminiert Fehlerquellen',
    },
    {
      title: 'HR-Entlastung',
      description:
        'Bis zu 80% Zeitersparnis durch intelligente Automatisierung',
    },
    {
      title: 'Compliance-Sicherheit',
      description: 'Immer aktuell und rechtssicher durch permanente Updates',
    },
    {
      title: 'Nahtlose Integration',
      description: 'Durchgängiger Datenfluss in bestehende HR-Systeme',
    },
  ];

  return (
    <section className="bg-slate-100 py-20 relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute top-0 left-0 w-96 h-96" viewBox="0 0 400 400">
          <polygon
            points="50,200 150,50 350,50 350,350 150,350"
            fill="none"
            stroke="rgb(15 23 42)"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-100 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="text-red-700 font-medium text-sm">
              Die Herausforderung
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            bAV-Verwaltung ist{' '}
            <span className="text-red-500">komplex, zeitaufwendig</span>
            <br />
            und <span className="text-red-500">fehleranfällig</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Die betriebliche Altersvorsorge ist für Unternehmen verpflichtend,
            aber die Verwaltung stellt HR-Teams vor große Herausforderungen.
          </p>
        </div>

        {/* Challenge vs Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Challenges */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
              Typische Probleme
            </h3>
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg"
                >
                  <h4 className="font-semibold text-red-800 mb-1">
                    {challenge.title}
                  </h4>
                  <p className="text-red-700 text-sm">
                    {challenge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="lg:col-span-1 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 animate-pulse">
                <ArrowRight className="w-8 h-8 text-white lg:rotate-0 rotate-90" />
              </div>
              <span className="text-orange-600 font-semibold text-center">
                ACENCIA
                <br />
                Lösung
              </span>
            </div>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              Unsere Antworten
            </h3>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg"
                >
                  <h4 className="font-semibold text-green-800 mb-1">
                    {solution.title}
                  </h4>
                  <p className="text-green-700 text-sm">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solution Overview */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-green-700 font-medium text-sm">
              Die Lösung
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Die individuell passende{' '}
            <span className="text-orange-500">digitale Lösung</span>
            <br />
            für Ihr Unternehmen
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Egal ob Kleinunternehmen, Start-up, Mittelstand oder Konzern -
            ausgehend von Ihren individuellen Herausforderungen bieten wir
            maßgeschneiderte Lösungskonzepte für die digitale bAV-Verwaltung.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Entlastung der HR-Teams
            </h3>
            <p className="text-slate-600 mb-4">
              Vollautomatisierte Prozesse reduzieren zeitintensive manuelle
              Aufgaben und eliminieren Fehlerquellen.
            </p>
            <div className="flex items-center text-blue-600 font-medium text-sm">
              <TrendingUp className="w-4 h-4 mr-2" />
              Bis zu 80% Zeitersparnis
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <Briefcase className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              100% Digitale Transparenz
            </h3>
            <p className="text-slate-600 mb-4">
              Alle bAV-Dokumente digital verfügbar mit einfacher Suchfunktion
              und strukturierter Ablage.
            </p>
            <div className="flex items-center text-purple-600 font-medium text-sm">
              <TrendingUp className="w-4 h-4 mr-2" />
              Papierlose Verwaltung
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Factory className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Skalierbare Architektur
            </h3>
            <p className="text-slate-600 mb-4">
              Flexibel einsetzbar für jede Unternehmensgröße und passt sich an
              das Wachstum Ihres Unternehmens an.
            </p>
            <div className="flex items-center text-green-600 font-medium text-sm">
              <TrendingUp className="w-4 h-4 mr-2" />
              Zukunftssicher
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
