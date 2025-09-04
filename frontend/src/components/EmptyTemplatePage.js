import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const EmptyTemplatePage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-acencia">
      <Header />

      <div className="pt-28 bg-acencia">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-acencia via-acencia-light to-acencia py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg
              className="absolute top-20 right-0 w-96 h-96"
              viewBox="0 0 400 400"
            >
              <polygon
                points="200,50 350,150 350,250 200,350 50,250 50,150"
                fill="currentColor"
                className="text-orange-400 animate-pulse"
              />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Leere Vorlage
              </h1>
              <p className="text-lg text-slate-200 max-w-4xl mx-auto leading-relaxed">
                Dies ist eine Test-Seite für den neuen Navigationspunkt. Hier
                können zukünftige Inhalte eingefügt werden.
              </p>
            </div>
          </div>
        </section>

        {/* Smooth transition from acencia to slate-100 */}
        <div className="h-12 bg-gradient-to-b from-acencia to-slate-100"></div>

        {/* Content Section */}
        <section className="bg-slate-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8">
                Platzhalter für zukünftige Inhalte
              </h2>
              <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Diese Seite dient als Vorlage für neue Navigationspunkte und
                kann bei Bedarf mit Inhalten gefüllt werden.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default EmptyTemplatePage;
