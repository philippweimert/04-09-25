import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import CustomerSegments from './CustomerSegments';
import GoogleReviews from './GoogleReviews';
import Footer from './Footer';
import {
  Award,
  Users,
  TrendingUp,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Trophy,
  Zap,
  Building,
  Shield,
} from 'lucide-react';

const Homepage = () => {
  const expertiseAreas = [
    {
      title: 'bAV',
      subtitle: 'Betriebliche Altersvorsorge',
      description:
        'Komplexe bAV-Herausforderungen einfach gelöst - mit über 30 Jahren Expertise',
      link: '/die-bav',
      color: 'from-slate-600 to-slate-700',
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: 'bKV',
      subtitle: 'Betriebliche Krankenversicherung',
      description:
        'Gesundheitsvorsorge als Mitarbeiterbenefit - professionell implementiert',
      link: '/bkv',
      color: 'from-blue-600 to-blue-700',
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: 'bUV',
      subtitle: 'Betriebliche Unfallversicherung',
      description:
        'Umfassender Schutz für Ihre Mitarbeitenden - über das Gesetz hinaus',
      link: '/buv',
      color: 'from-indigo-600 to-indigo-700',
      icon: <Award className="w-8 h-8" />,
    },
  ];

  const benefits = [
    {
      text: 'Über 30 Jahre Erfahrung',
      icon: <Trophy className="w-4 h-4" />,
    },
    {
      text: 'DSGVO konform & Rechtssicher',
      icon: <Shield className="w-4 h-4" />,
    },
    {
      text: 'Individuelle Lösungen für jede Unternehmensgröße',
      icon: <Building className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-bg">
      <Header />

      {/* Hero Section */}
      <div className="section">
        <section className="flex items-center relative overflow-hidden">
          {/* Erweiterte animierte Background Patterns */}
          <div className="absolute inset-0">
            {/* Floating animated shapes */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-bounce"
              style={{ animationDuration: '6s' }}
            ></div>

            {/* Animated geometric patterns */}
            <div className="absolute inset-0 opacity-[0.08]">
              <svg
                className="absolute top-32 right-10 w-80 h-80 animate-spin"
                viewBox="0 0 400 400"
                style={{ animationDuration: '20s' }}
              >
                <polygon
                  points="200,40 350,120 350,280 200,360 50,280 50,120"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
                <polygon
                  points="150,80 250,80 300,150 250,220 150,220 100,150"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </svg>
              <svg
                className="absolute bottom-32 left-10 w-64 h-64 animate-pulse"
                viewBox="0 0 300 300"
              >
                <polygon
                  points="150,20 270,80 270,180 150,240 30,180 30,80"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>

          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content - Hero Text */}
              <div className="text-left">
                {/* Main Headline */}
                <h1 className="mb-6">
                  <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-gradient-x">
                    Digital.
                  </span>{' '}
                  <span>Einfach.</span>{' '}
                  <span className="text-muted-foreground">Modern.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg text-muted-foreground mb-8 measure--narrow">
                  Automatisieren Sie Ihre betriebliche Altersvorsorge komplett
                </p>

                {/* Interactive Benefits */}
                <div className="space-y-3 mb-10">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="w-8 h-8 bg-neutral-100 border border-neutral-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="text-slate-600">
                          {benefit.icon}
                        </div>
                      </div>
                      <span className="text-slate-700 font-medium">
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() =>
                      window.open(
                        'https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/',
                        '_blank',
                      )
                    }
                    className="btn--primary text-white text-base"
                  >
                    <span>Jetzt kostenfrei starten</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <Link
                    to="/die-bav?autoplay=true"
                    className="btn--secondary text-base flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span>Video ansehen</span>
                  </Link>
                </div>
              </div>

              {/* Right Content - Solutions + Onboarding (shifted down for video placeholder) */}
              <div className="lg:mt-48 mt-8">
                <div className="max-w-lg w-full space-y-6">
                  {/* Solutions Section - Horizontal Layout (größer) */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Unsere Lösungen
                    </h3>
                    <div className="flex gap-4">
                      {expertiseAreas.map((area, index) => (
                        <Link
                          key={index}
                          to={area.link}
                          className="group block transform hover:scale-105 transition-all duration-300 flex-1"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-lg relative overflow-hidden h-20 flex items-center justify-center">
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/5 transition-all duration-500 rounded-lg"></div>

                            <div className="relative z-10 text-center">
                              <h4 className="text-base font-bold text-white group-hover:text-slate-200 transition-colors duration-300">
                                {area.title}
                              </h4>
                              <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300 mt-1">
                                {area.subtitle}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Onboarding Offer Box - Unter den Lösungen */}
                  <div className="group">
                    <div className="bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-600/20 backdrop-blur-lg border-2 border-green-400/40 rounded-xl p-3 relative overflow-hidden group-hover:scale-105 transition-all duration-300 shadow-xl">
                      {/* Animated background glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10 animate-pulse"></div>

                      {/* Floating sparkles */}
                      <div className="absolute top-1 right-2">
                        <Sparkles
                          className="w-4 h-4 text-green-400 animate-bounce"
                          style={{ animationDelay: '0.5s' }}
                        />
                      </div>
                      <div className="absolute bottom-1 left-2">
                        <Sparkles
                          className="w-3 h-3 text-emerald-400 animate-pulse"
                          style={{ animationDelay: '1s' }}
                        />
                      </div>

                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>

                          <div>
                            <h3 className="text-lg font-bold text-white">
                              <span className="text-green-400">0,00 €</span>{' '}
                              Onboarding
                            </h3>
                            <p className="text-slate-300 text-xs">
                              Bis zum{' '}
                              <span className="text-green-400 font-bold">
                                01.01.2027
                              </span>
                            </p>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-slate-400 text-xs">
                            Jetzt kostenfrei
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
            <div className="flex flex-col items-center text-slate-400 hover:text-orange-400 transition-colors duration-300 cursor-pointer">
              <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center mb-2">
                <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
              </div>
              <span className="text-xs font-medium">Mehr erfahren</span>
            </div>
          </div>
        </section>

        {/* Unsere Kunden vertrauen uns Sektion */}
        <CustomerSegments />

        {/* Google Bewertungen Section */}
        <GoogleReviews />

        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
