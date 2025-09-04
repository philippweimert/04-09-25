import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Umbrella, Shield, Users } from 'lucide-react';

const BuvPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                <Umbrella className="w-5 h-5 mr-2" />
                Betriebliche Unfallversicherung
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                <span className="text-acencia-orange">bUV</span> - Betriebliche
                Unfallversicherung
              </h1>
              <p className="text-lg text-slate-200 leading-relaxed max-w-4xl mx-auto">
                Umfassender Schutz für Ihre Mitarbeitenden - Sicherheit über die
                gesetzliche Unfallversicherung hinaus
              </p>
            </div>

            {/* Content Placeholder */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16 text-center">
              <div className="flex items-center justify-center mb-6">
                <Shield className="w-12 h-12 text-acencia-orange mr-4" />
                <h2 className="text-2xl font-semibold text-white">
                  Inhalte folgen in Kürze
                </h2>
              </div>
              <p className="text-slate-200 leading-relaxed mb-6">
                Diese Seite wird mit umfassenden Informationen zur betrieblichen
                Unfallversicherung gefüllt.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h3 className="text-white font-semibold mb-2">
                    Für Arbeitgeber
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Zusätzlicher Schutz und Vorteile
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h3 className="text-white font-semibold mb-2">
                    Für Arbeitnehmer
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Erweiterte Absicherung
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h3 className="text-white font-semibold mb-2">Leistungen</h3>
                  <p className="text-slate-300 text-sm">Umfassende Deckung</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-acencia-orange to-orange-600 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Interesse an betrieblicher Unfallversicherung?
              </h2>
              <p className="text-white/90 mb-6 leading-relaxed">
                Lassen Sie sich beraten, wie die bUV Ihre Mitarbeitenden optimal
                schützen kann.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-acencia-orange px-8 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg">
                  Beratung anfordern
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

export default BuvPage;
