import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { MessageSquare, Phone, Mail, Calendar } from 'lucide-react';

const KontaktBeratungPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                <MessageSquare className="w-5 h-5 mr-2" />
                Individuelle Beratung
              </div>
              <h1 className="mb-8">Persönliche Beratung</h1>
              <p className="text-base text-muted-foreground leading-relaxed max-w-4xl mx-auto measure">
                Lassen Sie sich von unseren Experten individuell beraten - zu
                bAV, bKV und bUV
              </p>
            </div>

            {/* Beratung Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="rounded-lg p-6 border border-neutral-200 bg-white text-center">
                <Phone className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Telefonberatung
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Schnelle und unkomplizierte Beratung am Telefon
                </p>
                <button className="btn--primary">
                  Anrufen
                </button>
              </div>

              <div className="rounded-lg p-6 border border-neutral-200 bg-white text-center">
                <Calendar className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Termin vereinbaren
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Persönlicher Beratungstermin vor Ort oder online
                </p>
                <button className="btn--primary">
                  Termin buchen
                </button>
              </div>

              <div className="rounded-lg p-6 border border-neutral-200 bg-white text-center">
                <Mail className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  E-Mail Anfrage
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Schriftliche Anfrage für detaillierte Informationen
                </p>
                <button className="btn--primary">
                  E-Mail senden
                </button>
              </div>
            </div>

            {/* Call to Action */}
            <div className="rounded-lg p-8 text-center border border-neutral-200 bg-white">
              <h2 className="mb-4">
                Bereit für eine individuelle Beratung?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed measure mx-auto">
                Unsere Experten stehen Ihnen zur Verfügung. Kontaktieren Sie uns
                für ein unverbindliches Beratungsgespräch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn--primary">
                  Jetzt Beratung anfordern
                </button>
                <button className="btn--secondary">
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
