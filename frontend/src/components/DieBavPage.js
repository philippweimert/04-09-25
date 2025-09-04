import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import HeroSection from './HeroSection';
import ThreeStepProcessSection from './ThreeStepProcessSection';
import Footer from './Footer';
import {
  Shield,
  Users,
  TrendingUp,
  ArrowRight,
  Scale,
  Building2,
  AlertTriangle,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const DieBavPage = () => {
  const [isChallengesExpanded, setIsChallengesExpanded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Check if URL has hash for challenges section
    if (window.location.hash === '#herausforderungen') {
      setTimeout(() => {
        setIsChallengesExpanded(true);
        // Scroll to challenges section after a short delay
        setTimeout(() => {
          const challengesElement =
            document.getElementById('herausforderungen');
          if (challengesElement) {
            challengesElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }, 500);
    }
  }, []);

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

  const moreInfoBoxes = [
    {
      title: 'Für Unternehmen',
      description:
        'Alles Wichtige über Pflichten, Herausforderungen, Chancen und Vorteile der bAV für Arbeitgeber.',
      icon: <Building2 className="w-6 h-6" />,
      link: '/die-bav/x',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Für Arbeitnehmer',
      description:
        'Erfahren Sie, wie Sie von steuerlichen Vorteilen profitieren und Ihre Altersvorsorge optimieren.',
      icon: <Users className="w-6 h-6" />,
      link: '/die-bav/y',
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Aktuelles',
      description:
        'Bleiben Sie informiert über die neuesten Entwicklungen, Gesetze und Trends in der bAV.',
      icon: <TrendingUp className="w-6 h-6" />,
      link: '/die-bav/aktuelles',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-bg">
      <Header />

      {/* Content */}
      <div className="section">
        <HeroSection />
        <ThreeStepProcessSection />

        {/* Original die bAV content starts here */}
        <div className="section bg-bg-subtle">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              {/* Hero Section - kompakter */}
              <div className="text-center mb-12">
                <h1 className="mb-2">
                  die <span className="">bAV</span>
                </h1>
                <p className="text-xs text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Informationen aus dem Geschäftsbetrieb des
                  Versicherungsmaklers gemäß §93 HGB, keine Rechtsberatung,
                  keine Steuerberatung
                </p>
                <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Umfassende Informationen zur betrieblichen Altersvorsorge
                </p>
              </div>

              {/* Definition der betrieblichen Altersvorsorge - jetzt volle Breite */}
              <div className="rounded-lg p-6 border border-neutral-200 bg-white mb-12">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-slate-600 mr-2" />
                  <h2 className="text-lg font-semibold">
                    Was ist betriebliche Altersvorsorge?
                  </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                      Die betriebliche Altersvorsorge (bAV) ist eine Form der
                      privaten Altersvorsorge, die über den Arbeitgeber
                      organisiert wird. Sie ergänzt die gesetzliche Rente und
                      bietet Arbeitnehmern die Möglichkeit, zusätzliche
                      Rentenansprüche aufzubauen.
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Seit 2002 haben alle Arbeitnehmer einen Rechtsanspruch auf
                      betriebliche Altersvorsorge durch Entgeltumwandlung. Dabei
                      wird ein Teil des Bruttogehalts für die Altersvorsorge
                      verwendet, wodurch sich die Steuer- und Sozialabgabenlast
                      reduziert.
                    </p>
                  </div>
                </div>
              </div>

              {/* Herausforderungen Ausklapp-Element */}
              <div id="herausforderungen" className="mb-12">
                <div
                  className="cursor-pointer rounded-lg p-6 border border-neutral-200 bg-white transition-colors"
                  onClick={() => setIsChallengesExpanded(!isChallengesExpanded)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center">
                        <AlertTriangle className="w-6 h-6 text-slate-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">
                          bAV-Verwaltung ist komplex, zeitaufwendig und
                          fehleranfällig
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Klicken Sie hier, um die Herausforderungen und unsere
                          Lösungen zu sehen
                        </p>
                      </div>
                    </div>
                    <div className="text-slate-700">
                      {isChallengesExpanded ? (
                        <ChevronUp className="w-6 h-6" />
                      ) : (
                        <ChevronDown className="w-6 h-6" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Ausklappbarer Inhalt */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    isChallengesExpanded
                      ? 'max-h-[2000px] opacity-100 mt-6'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Herausforderungen */}
                    <div className="bg-gradient-to-br from-red-600/10 to-red-700/10 rounded-xl p-6 border border-red-500/20">
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                        <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
                        Herausforderungen
                      </h4>
                      <div className="space-y-4">
                        {challenges.map((challenge, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <h5 className="text-white font-semibold text-sm mb-1">
                                {challenge.title}
                              </h5>
                              <p className="text-slate-300 text-xs">
                                {challenge.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Lösungen */}
                    <div className="bg-gradient-to-br from-green-600/10 to-green-700/10 rounded-xl p-6 border border-green-500/20">
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Unsere Lösungen
                      </h4>
                      <div className="space-y-4">
                        {solutions.map((solution, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                            <div>
                              <h5 className="text-white font-semibold text-sm mb-1">
                                {solution.title}
                              </h5>
                              <p className="text-slate-300 text-xs">
                                {solution.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mehr erfahren Boxen - kompakter */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white text-center mb-8">
                  Mehr erfahren
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {moreInfoBoxes.map((box, index) => (
                    <Link key={index} to={box.link} className="group block">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
                        <div
                          className={`w-10 h-10 bg-gradient-to-r ${box.color} rounded-lg flex items-center justify-center mb-3 text-white group-hover:scale-110 transition-transform duration-300`}
                        >
                          {box.icon}
                        </div>

                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-acencia-orange transition-colors duration-300">
                          {box.title}
                        </h3>

                        <p className="text-slate-200 leading-relaxed mb-3 text-sm">
                          {box.description}
                        </p>

                        <div className="flex items-center text-acencia-orange group-hover:text-orange-300 transition-colors duration-300">
                          <span className="text-xs font-medium">
                            Mehr erfahren
                          </span>
                          <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default DieBavPage;
