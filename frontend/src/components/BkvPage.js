import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Heart, Shield, Users } from 'lucide-react';

const BkvPage = () => {
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
                <Heart className="w-5 h-5 mr-2" />
                Betriebliche Krankenversicherung
              </div>
              <h1 className="mb-8">bKV - Betriebliche Krankenversicherung</h1>
              <p className="text-base text-muted-foreground leading-relaxed max-w-4xl mx-auto measure">
                Gesundheitsvorsorge als Mitarbeiterbenefit - Attraktive
                Zusatzleistungen für Ihre Belegschaft
              </p>
            </div>

            {/* Content Placeholder */}
            <div className="rounded-2xl p-8 border border-neutral-200 bg-white mb-16 text-center">
              <div className="flex items-center justify-center mb-6">
                <Shield className="w-12 h-12 text-slate-600 mr-4" />
                <h2 className="text-2xl font-semibold">
                  Inhalte folgen in Kürze
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Diese Seite wird mit umfassenden Informationen zur betrieblichen
                Krankenversicherung gefüllt.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
                  <h3 className="font-semibold mb-2">
                    Für Arbeitgeber
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Vorteile und Möglichkeiten der bKV
                  </p>
                </div>
                <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
                  <h3 className="font-semibold mb-2">
                    Für Arbeitnehmer
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Leistungen und Benefits
                  </p>
                </div>
                <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
                  <h3 className="font-semibold mb-2">Beratung</h3>
                  <p className="text-muted-foreground text-sm">
                    Individuelle Lösungen
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="rounded-2xl p-8 text-center border border-neutral-200 bg-white">
              <h2 className="text-2xl font-semibold mb-4">
                Interessiert an betrieblicher Krankenversicherung?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Kontaktieren Sie uns für weitere Informationen zur bKV und wie
                sie Ihr Unternehmen unterstützen kann.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn--primary">
                  Beratung anfordern
                </button>
                <button className="btn--secondary">
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

export default BkvPage;
