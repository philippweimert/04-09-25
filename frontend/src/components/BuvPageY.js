import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Umbrella, Shield } from 'lucide-react';

const BuvPageY = () => {
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
                bUV Option Y
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                bUV Option <span className="text-acencia-orange">Y</span>
              </h1>
              <p className="text-lg text-slate-200 leading-relaxed max-w-4xl mx-auto">
                Platzhalter für bUV Option Y - Inhalte folgen
              </p>
            </div>

            {/* Content Placeholder */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16 text-center">
              <div className="flex items-center justify-center mb-6">
                <Shield className="w-12 h-12 text-acencia-orange mr-4" />
                <h2 className="text-2xl font-semibold text-white">
                  Inhalte für bUV Option Y folgen
                </h2>
              </div>
              <p className="text-slate-200 leading-relaxed">
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
