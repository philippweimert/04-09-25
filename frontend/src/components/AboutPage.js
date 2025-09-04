import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Button } from './ui/button';
import {
  Users,
  Award,
  Lightbulb,
  Shield,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Partnerschaft',
      description:
        'Echter Partner unserer Kunden mit langfristiger Begleitung.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Expertise',
      description:
        'Über 30 Jahre Erfahrung in der betrieblichen Altersvorsorge.',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation',
      description:
        'Digitalisierung und Automatisierung für maximale Effizienz.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Sicherheit',
      description:
        'Rechtssichere und compliance-konforme Abwicklung als Standard.',
    },
  ];

  return (
    <div className="min-h-screen bg-acencia">
      <Header />

      <div className="pt-32 bg-acencia">
        {/* Kompakte Hero Section */}
        <section className="bg-gradient-to-b from-acencia via-acencia to-acencia py-16 relative overflow-hidden">
          {/* Geometrische Hintergrundmuster in Weiß */}
          <div className="absolute inset-0 opacity-[0.08]">
            <svg
              className="absolute top-20 right-0 w-96 h-96 animate-pulse"
              viewBox="0 0 400 400"
              style={{ animationDuration: '5s' }}
            >
              <polygon
                points="200,50 350,150 350,250 200,350 50,250 50,150"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
            <svg
              className="absolute bottom-20 left-0 w-64 h-64 animate-bounce"
              viewBox="0 0 300 300"
              style={{ animationDuration: '4s' }}
            >
              <polygon
                points="150,30 270,120 270,180 150,270 30,180 30,120"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Über{' '}
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  ACENCIA
                </span>
              </h1>
              <p className="text-lg text-slate-200 max-w-4xl mx-auto">
                Ihr digitaler Partner für einfache und rechtssichere
                betriebliche Altersvorsorge
              </p>
            </div>
          </div>
        </section>

        {/* Kompakter Hauptinhalt - erst hier Farbwechsel */}
        <section className="bg-gradient-to-b from-acencia via-acencia-light to-acencia-blue py-16 relative overflow-hidden">
          {/* Subtle background elements */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg
              className="absolute top-10 left-0 w-80 h-80"
              viewBox="0 0 400 400"
            >
              <polygon
                points="200,30 330,130 330,230 200,330 70,230 70,130"
                fill="none"
                stroke="#f97316"
                strokeWidth="1"
              />
            </svg>
            <svg
              className="absolute bottom-10 right-0 w-64 h-64"
              viewBox="0 0 400 400"
            >
              <polygon
                points="200,50 300,100 300,200 200,250 100,200 100,100"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="1"
              />
            </svg>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Company Info - Kompakt */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Digitale bAV-Expertise seit über 30 Jahren
                </h2>
                <div className="space-y-4 text-slate-300">
                  <p className="leading-relaxed">
                    ACENCIA ist Ihr spezialisierter Partner für die vollständige
                    Digitalisierung der betrieblichen Altersvorsorge. Wir
                    vereinfachen komplexe Verwaltungsprozesse und sorgen für
                    rechtssichere Abwicklung.
                  </p>
                  <p className="leading-relaxed">
                    Mit unserer modernen Plattform automatisieren wir Ihre
                    bAV-Verwaltung vollständig - von der Einrichtung bis zur
                    laufenden Betreuung.
                  </p>
                </div>

                {/* Kompakte Kontakt-Info */}
                <div className="mt-8 bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Kontakt
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3 text-slate-300">
                      <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      <span>
                        ACENCIA GmbH, Musterstraße 123, 12345 Musterstadt
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-300">
                      <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      <span>+49 (0) 123 456 789</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-300">
                      <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      <span>info@acencia.de</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kompakte Values */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">
                  Unsere Werte
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {values.map((value, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl p-4 hover:from-orange-600 hover:to-orange-700 transition-all duration-400 group"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="text-orange-400 group-hover:text-white transition-colors">
                          {value.icon}
                        </div>
                        <h4 className="font-semibold text-white text-base">
                          {value.title}
                        </h4>
                      </div>
                      <p className="text-slate-300 group-hover:text-slate-100 text-sm leading-relaxed transition-colors">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Kompakte Call-to-Action */}
                <div className="mt-8 text-center">
                  <Button
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-400 hover:scale-105 shadow-lg"
                    onClick={() =>
                      window.open(
                        'https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/',
                        '_blank',
                      )
                    }
                  >
                    Jetzt Gespräch vereinbaren
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
