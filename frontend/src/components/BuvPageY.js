import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Umbrella, Shield } from 'lucide-react';

const BuvPageY = () => {
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
                <Umbrella className="w-5 h-5 mr-2" />
                bUV Option Y
              </div>
              <h1 className="mb-8">bUV Option Y</h1>
              <p className="text-base text-muted-foreground leading-relaxed max-w-4xl mx-auto measure">
                Platzhalter für bUV Option Y - Inhalte folgen
              </p>
            </div>

            {/* Content Placeholder */}
            <div className="rounded-2xl p-8 border border-neutral-200 bg-white mb-16 text-center">
              <div className="flex items-center justify-center mb-6">
                <Shield className="w-12 h-12 text-slate-600 mr-4" />
                <h2 className="text-2xl font-semibold">
                  Inhalte für bUV Option Y folgen
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Diese Seite wird mit spezifischen Informationen zu bUV Option Y
                gefüllt.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BuvPageY;
