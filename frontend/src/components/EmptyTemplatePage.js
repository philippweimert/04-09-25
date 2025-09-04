import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const EmptyTemplatePage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      <Header />

      <div className="section">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
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

          <div className="container">
            <div className="text-center">
              <h1 className="mb-6">
                Leere Vorlage
              </h1>
              <p className="text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed measure">
                Dies ist eine Test-Seite für den neuen Navigationspunkt. Hier
                können zukünftige Inhalte eingefügt werden.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section bg-bg-subtle">
          <div className="container">
            <div className="text-center">
              <h2 className="mb-8">
                Platzhalter für zukünftige Inhalte
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed measure">
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
