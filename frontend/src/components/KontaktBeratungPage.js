import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { MessageSquare, Phone, Mail, Calendar } from 'lucide-react';

const KontaktBeratungPage = () => {
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
                <MessageSquare className="w-5 h-5 mr-2" />
                Individuelle Beratung
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                Persönliche{' '}
                <span className="text-acencia-orange">Beratung</span>
              </h1>
              <p className="text-lg text-slate-200 leading-relaxed max-w-4xl mx-auto">
                Lassen Sie sich von unseren Experten individuell beraten - zu
                bAV, bKV und bUV
              </p>
            </div>

            {/* Beratung Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <Phone className="w-12 h-12 text-acencia-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Telefonberatung
                </h3>
                <p className="text-slate-200 text-sm mb-4">
                  Schnelle und unkomplizierte Beratung am Telefon
                </p>
                <button className="bg-acencia-orange text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  Anrufen
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <Calendar className="w-12 h-12 text-acencia-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Termin vereinbaren
                </h3>
                <p className="text-slate-200 text-sm mb-4">
                  Persönlicher Beratungstermin vor Ort oder online
                </p>
                <button className="bg-acencia-orange text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  Termin buchen
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <Mail className="w-12 h-12 text-acencia-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  E-Mail Anfrage
                </h3>
                <p className="text-slate-200 text-sm mb-4">
                  Schriftliche Anfrage für detaillierte Informationen
                </p>
                <button className="bg-acencia-orange text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  E-Mail senden
                </button>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-acencia-orange to-orange-600 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Bereit für eine individuelle Beratung?
              </h2>
              <p className="text-white/90 mb-6 leading-relaxed">
                Unsere Experten stehen Ihnen zur Verfügung. Kontaktieren Sie uns
                für ein unverbindliches Beratungsgespräch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-acencia-orange px-8 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg">
                  Jetzt Beratung anfordern
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  Rückruf vereinbaren
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

export default KontaktBeratungPage;
